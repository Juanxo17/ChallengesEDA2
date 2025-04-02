    import { books } from "../utils/books";
    import { Stack } from "../pila";
    import { useState } from "react";


    const pilaELibros = new Stack();

    books.forEach (book => {
        pilaELibros.push(book)
    });

    console.log(pilaELibros);

    const Page1 = () => {

        // estado para manejar y mostrar lo que este almacenado en el array de libros.
        const [stack, setStack] = useState ([...pilaELibros.items])

    /*Ejemplo de por que se usa handleChange:
        const handleChange = (evento) => {
        console.log(evento.target.name);
        }; 
        
    Contenido de target: 
    {
    "target": {
        "name": "name",
        "value": "Harry Potter"
    }
    }
    
        */ 
        //Estado para agregar nuevo libro

        const [newBook, setNewBook ] = useState({
            name: "",
            ISBN: "",
            author: "",
            editorial: ""
        });

        const handleChange = (e) =>{
            setNewBook({...newBook, [e.target.name]: e.target.value});
        }

        const addBook = (e) =>{
            e.preventDefault();
            pilaELibros.push(newBook);
            setStack ([...pilaELibros.items]);
            setNewBook({ name: "", ISBN: "", author: "", editorial: "" });

        }

        return (
            <>
                <h1>Gestión de Libros con Pila</h1>
        
                <form onSubmit={addBook}>
                    <input type="text" name="name" placeholder="Nombre del libro" value={newBook.name} onChange={handleChange} required />
                    <input type="text" name="ISBN" placeholder="ISBN" value={newBook.ISBN} onChange={handleChange} required />
                    <input type="text" name="author" placeholder="Autor" value={newBook.author} onChange={handleChange} required />
                    <input type="text" name="editorial" placeholder="Editorial" value={newBook.editorial} onChange={handleChange} required />
                    <button type="submit">Agregar Libro</button>
                </form>
        
                <h2>Libros en la Pila:</h2>
                <ul>
                    {stack.map((book, index) => (
                        <li key={index}>
                            <strong>{book.name}</strong> - {book.author} ({book.ISBN})
                        </li>
                    ))}
                </ul>
            </>
        );
        



        

        



    };

    export default Page1;