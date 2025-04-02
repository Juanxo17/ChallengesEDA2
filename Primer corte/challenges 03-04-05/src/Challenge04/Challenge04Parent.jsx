import React, { useState } from "react";
import { Challenge04Child } from "./Challenge04Child";

export function Challenge04Parent() {
    const [categoriasGuardadas, setCategoriasGuardadas] = useState([]);

    const guardarCategoria = (nuevaCategoria) => {
        setCategoriasGuardadas(prevCategorias => [...prevCategorias, nuevaCategoria]);
        console.log("categoria guardada: ", nuevaCategoria, "categorias: ", categoriasGuardadas);
    };

    return (
        <>
            <Challenge04Child onGuardarCategoria={guardarCategoria} />
            <h2>Categorias almacenadas :D</h2>
            <ul>
                {categoriasGuardadas.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ul>
        </>
    );
}