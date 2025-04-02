import { songs } from "../songs";
import { LinkedList } from "../Linkedlist";
import { useState } from "react";


const songsList = new LinkedList();

songs.forEach(song=>songsList.append(song));


function Page1(){




    //Hago un usestate para inicializar un array vacio e irlo actualizando en la interfaz
const [songList, setSongList] = useState ([])

const [currentNode,setCurrentNode] = useState(songsList.head);

const goNextSong = () =>{
    if (currentNode && currentNode.next){
        setCurrentNode (currentNode.next);
    }
}

//Este metodo es para convertir la lista de canciones en una lista legible de strings con unicamente los tirulos de las canciones.

const showSongsList = ()=>{


let current = songsList.head;

let newSongsList = []

while (current){
    newSongsList.push(current.value.title)
    current = current.next
}

setSongList(newSongsList)


}
return(
    <>

    <h1>Reproductor de canciones.</h1>
    <h2>Cancion actual: {currentNode ? currentNode.value.title : "No hay canciones :("}</h2>
    <button onClick={goNextSong} disabled={!currentNode?.next}>Siguiente :D</button>
    <h2>Mostrar lista con todas tus canciones :D </h2>
    <button onClick={showSongsList}>Mostrar :p</button>
    <ul>
        {songList.map((song,index) => (
            <li key={index}>{song}</li>
        ))}
    </ul>

    </>
)

}
export default Page1;

