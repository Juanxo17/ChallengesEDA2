import { songs } from "../songs";
import { useState } from "react";
import { DoublyLinkedList } from "../DoublyLinkedList";


const listaCanciones = new DoublyLinkedList();

songs.forEach( song => {
    listaCanciones.append(song)
});

function Page2(){

const [listaInicial, setListaInicial] = useState([]);

const [currentNode, setCurrentNode] = useState(listaCanciones.head);

const siguientecancion = ()=>{

    if (currentNode && currentNode.next){

        setCurrentNode (currentNode.next);

    }

}

const cancionAnterior = () =>{

    if (currentNode && currentNode.prev){
        setCurrentNode (currentNode.prev);
    }
    
}

const mostrarTodas = () =>{
    
    let current = listaCanciones.head;

    let nuevaLista = [];

    while (current){

        nuevaLista.push(current.value.title);

        current = current.next;



    }

    setListaInicial(nuevaLista);
}


return (
    <>
    <h1>Reproductor de canciones.</h1>
    <h2>Cancion actual: {currentNode ? currentNode.value.title : "No hay canciones en el reproductor! :("}</h2>
    <button onClick={siguientecancion} disabled={!currentNode?.next}>Siguiente cancion  :D</button>
    <button onClick={cancionAnterior} disabled={!currentNode?.prev}>Cancion anterior :D</button>
    <h2>Mostrar todas las canciones</h2>
    <button onClick={mostrarTodas}>Mostrar :P</button>
    <ul>
        {listaInicial.map((song,index)=>(
            <li key={index}>{song}</li>
        ))}
    </ul>


    </>
)


}

export default Page2;