import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ConsultasPage({ clientes }) {
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

    const [currentConsultaIndex, setCurrentConsultaIndex] = useState(0);

    const handleNextConsulta = () => {
        if (currentConsultaIndex < cliente.consultas.size() - 1) {
            setCurrentConsultaIndex(currentConsultaIndex + 1);
        }
    };

    const handlePreviousConsulta = () => {
        if (currentConsultaIndex > 0) {
            setCurrentConsultaIndex(currentConsultaIndex - 1);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Consultas de {cliente.nombre}</h2>
            {cliente.consultas.size() === 0 ? (
                <p>No hay consultas.</p>
            ) : (
                <div>
                    <p>{cliente.consultas.items[currentConsultaIndex]}</p>
                    <div style={styles.navigation}>
                        <button
                            style={styles.button}
                            onClick={handlePreviousConsulta}
                            disabled={currentConsultaIndex === 0}
                        >
                            Consulta Anterior
                        </button>
                        <button style={styles.button} onClick={() => navigate('/')}>
                            Volver
                        </button>
                        <button
                            style={styles.button}
                            onClick={handleNextConsulta}
                            disabled={currentConsultaIndex === cliente.consultas.size() - 1}
                        >
                            Siguiente Consulta
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

export default ConsultasPage;