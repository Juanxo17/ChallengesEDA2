import React from 'react';

function Cliente({ cliente }) {
    if (!cliente) {
        return <p>No hay cliente seleccionado.</p>;
    }

    return (
        <div>
            <h2>Cliente Actual</h2>
            <p>Nombre: {cliente.nombre}</p>
            <p>ID: {cliente.id}</p>
        </div>
    );
}

export default Cliente;