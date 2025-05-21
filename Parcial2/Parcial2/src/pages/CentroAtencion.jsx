import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cliente from '../Componentes/Clientes';

function CentroAtencion({ clientes }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    if (!clientes.head) {
        return <p>No hay clientes disponibles.</p>;
    }

    const clientesArray = [];
    let current = clientes.head;

    while (current) {
        clientesArray.push(current.data);
        current = current.next;
    }

    if (clientesArray.length === 0) {
        return <p>No hay clientes disponibles.</p>;
    }

    const currentCliente = clientesArray[currentIndex];

    if (!currentCliente) {
        return <p>Error: Cliente actual no encontrado.</p>;
    }

    const handleNext = () => {
        if (currentIndex < clientesArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div style={styles.container}>
            <Cliente cliente={currentCliente} />
            <div style={styles.buttonGroup}>
                <button
                    style={styles.button}
                    onClick={() => navigate(`/reclamos/${currentCliente.id}`)}
                >
                    Ver Reclamos
                </button>
                <button
                    style={styles.button}
                    onClick={() => navigate(`/consultas/${currentCliente.id}`)}
                >
                    Ver Consultas
                </button>
            </div>
            <div style={styles.navigation}>
                <button
                    style={styles.button}
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                >
                    Anterior
                </button>
                <button
                    style={styles.button}
                    onClick={handleNext}
                    disabled={currentIndex === clientesArray.length - 1}
                >
                    Siguiente
                </button>
            </div>
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
    buttonGroup: {
        margin: '20px 0',
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

export default CentroAtencion;