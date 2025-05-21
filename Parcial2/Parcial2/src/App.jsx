import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CentroAtencion from './pages/CentroAtencion';
import ReclamosPage from './pages/ReclamosPage';
import ConsultasPage from './pages/ConsultasPage';
import { DoublyLinkedList } from './DoublyLinkedList/DoublyList';
import { Cliente } from './Cliente/Cliente';

function App() {
    const clientesList = new DoublyLinkedList();

    const clientes = [
        new Cliente('Juan Plata', 1),
        new Cliente('Lionel Messi', 2),
        new Cliente('Lamine Yamal', 3),
        new Cliente('Batman Ocoró', 4),
        new Cliente('Leonardo Favio', 5),
        new Cliente('Don Pollo', 6),
        new Cliente('Neymar Jr', 7),
        new Cliente('Pedro Porro', 8),
        new Cliente('Samuel Alberto', 9),
        new Cliente('Santiago Guevara', 10),
        new Cliente('Jordi Wild', 11),
        new Cliente('Canserbero', 12),
    ];

    clientes[0].reclamos.push('Reclamo 1 de Juan Plata', 'Reclamo 2 de Juan Plata', 'Reclamo 3 de Juan Plata');
    clientes[0].consultas.enqueue('Consulta 1 de Juan Plata', 'Consulta 2 de Juan Plata', 'Consulta 3 de Juan Plata');

    clientes[1].reclamos.push('Reclamo 1 de Lionel Messi', 'Reclamo 2 de Lionel Messi', 'Reclamo 3 de Lionel Messi');
    clientes[1].consultas.enqueue('Consulta 1 de Lionel Messi', 'Consulta 2 de Lionel Messi', 'Consulta 3 de Lionel Messi');

    clientes[2].reclamos.push('Reclamo 1 de Lamine Yamal', 'Reclamo 2 de Lamine Yamal', 'Reclamo 3 de Lamine Yamal');
    clientes[2].consultas.enqueue('Consulta 1 de Lamine Yamal', 'Consulta 2 de Lamine Yamal', 'Consulta 3 de Lamine Yamal');

    clientes[3].reclamos.push('Reclamo 1 de Batman Ocoró', 'Reclamo 2 de Batman Ocoró', 'Reclamo 3 de Batman Ocoró');
    clientes[3].consultas.enqueue('Consulta 1 de Batman Ocoró', 'Consulta 2 de Batman Ocoró', 'Consulta 3 de Batman Ocoró');

    clientes[4].reclamos.push('Reclamo 1 de Leonardo Favio', 'Reclamo 2 de Leonardo Favio', 'Reclamo 3 de Leonardo Favio');
    clientes[4].consultas.enqueue('Consulta 1 de Leonardo Favio', 'Consulta 2 de Leonardo Favio', 'Consulta 3 de Leonardo Favio');

    clientes[5].reclamos.push('Reclamo 1 de Don Pollo', 'Reclamo 2 de Don Pollo', 'Reclamo 3 de Don Pollo');
    clientes[5].consultas.enqueue('Consulta 1 de Don Pollo', 'Consulta 2 de Don Pollo', 'Consulta 3 de Don Pollo');

    clientes[6].reclamos.push('Reclamo 1 de Neymar Jr', 'Reclamo 2 de Neymar Jr', 'Reclamo 3 de Neymar Jr');
    clientes[6].consultas.enqueue('Consulta 1 de Neymar Jr', 'Consulta 2 de Neymar Jr', 'Consulta 3 de Neymar Jr');

    clientes[7].reclamos.push('Reclamo 1 de Pedro Porro', 'Reclamo 2 de Pedro Porro', 'Reclamo 3 de Pedro Porro');
    clientes[7].consultas.enqueue('Consulta 1 de Pedro Porro', 'Consulta 2 de Pedro Porro', 'Consulta 3 de Pedro Porro');

    clientes[8].reclamos.push('Reclamo 1 de Samuel Alberto', 'Reclamo 2 de Samuel Alberto', 'Reclamo 3 de Samuel Alberto');
    clientes[8].consultas.enqueue('Consulta 1 de Samuel Alberto', 'Consulta 2 de Samuel Alberto', 'Consulta 3 de Samuel Alberto');

    clientes[9].reclamos.push('Reclamo 1 de Santiago Guevara', 'Reclamo 2 de Santiago Guevara', 'Reclamo 3 de Santiago Guevara');
    clientes[9].consultas.enqueue('Consulta 1 de Santiago Guevara', 'Consulta 2 de Santiago Guevara', 'Consulta 3 de Santiago Guevara');

    clientes[10].reclamos.push('Reclamo 1 de Jordi Wild', 'Reclamo 2 de Jordi Wild', 'Reclamo 3 de Jordi Wild');
    clientes[10].consultas.enqueue('Consulta 1 de Jordi Wild', 'Consulta 2 de Jordi Wild', 'Consulta 3 de Jordi Wild');

    clientes[11].reclamos.push('Reclamo 1 de Canserbero', 'Reclamo 2 de Canserbero', 'Reclamo 3 de Canserbero');
    clientes[11].consultas.enqueue('Consulta 1 de Canserbero', 'Consulta 2 de Canserbero', 'Consulta 3 de Canserbero');

    
    clientes.forEach((cliente) => clientesList.append(cliente));

    
    console.log(clientesList);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<CentroAtencion clientes={clientesList} />} />
                <Route path="/reclamos/:id" element={<ReclamosPage clientes={clientesList} />} />
                <Route path="/consultas/:id" element={<ConsultasPage clientes={clientesList} />} />
            </Routes>
        </Router>
    );
}

export default App;