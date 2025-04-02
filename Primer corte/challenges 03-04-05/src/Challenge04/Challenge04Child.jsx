import React, { useState } from "react";

export function Challenge04Child({ onGuardarCategoria }) {
    const [categoria, setCategoria] = useState('');

    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onGuardarCategoria(categoria);
        setCategoria('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={categoria} onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
}