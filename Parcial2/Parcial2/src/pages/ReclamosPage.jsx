import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReclamosPage({ clientes }) {
    const { id } = useParams();
    const navigate = useNavigate();

    
    let current = clientes.head;
    let cliente = null;

    while (current) {
        if (current.data.id === parseInt(id)) {
            cliente = current.data;
            break;
        }
        current = current.next;
    }

    if (!cliente) {
        return <p>Cliente no encontrado.</p>;
    }

    const [currentReclamoIndex, setCurrentReclamoIndex] = useState(cliente.reclamos.size() - 1);

    const handleNextReclamo = () => {
        if (currentReclamoIndex > 0) {
            setCurrentReclamoIndex(currentReclamoIndex - 1);
        }
    };

    const handlePreviousReclamo = () => {
        if (currentReclamoIndex < cliente.reclamos.size() - 1) {
            setCurrentReclamoIndex(currentReclamoIndex + 1);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Reclamos de {cliente.nombre}</h2>
            {cliente.reclamos.size() === 0 ? (
                <p>No hay reclamos.</p>
            ) : (
                <div>
                    <p>{cliente.reclamos.items[currentReclamoIndex]}</p>
                    <div style={styles.navigation}>
                        <button
                            style={styles.button}
                            onClick={handlePreviousReclamo}
                            disabled={currentReclamoIndex === cliente.reclamos.size() - 1}
                        >
                            Reclamo Anterior
                        </button>
                        <button style={styles.button} onClick={() => navigate('/')}>
                            Volver
                        </button>
                        <button
                            style={styles.button}
                            onClick={handleNextReclamo}
                            disabled={currentReclamoIndex === 0}
                        >
                            Siguiente Reclamo
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    navigation: {
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default ReclamosPage;