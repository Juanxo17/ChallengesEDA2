import { useState } from "react";




export function Challenge3 ({defaultValue }){
const [contador, setContador] = useState(defaultValue)
const handleSubstract = () =>{
    setContador(contador -1)
}
const handleIncrement = () =>{
    setContador (contador + 1)
}
const resetContador = () =>{
    setContador(defaultValue)
}

return (
    <>
    <h1>Contador: </h1>
    <h2>{contador}</h2>
    <button onClick={handleSubstract}>Reducir </button>
    <button onClick={handleIncrement}>Incrementar</button>
    <button onClick={resetContador}>Reiniciar</button>
    </>
)
}