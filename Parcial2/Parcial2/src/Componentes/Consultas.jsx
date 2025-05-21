import React from 'react';

function Consultas({ consultas }) {
    return (
        <div>
            <h3>Consultas</h3>
            {consultas.size() === 0 ? (
                <p>No hay consultas.</p>
            ) : (
                <ul>
                    {consultas.items.map((consulta, index) => (
                        <li key={index}>{consulta}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Consultas;