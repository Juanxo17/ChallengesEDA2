// src/pages/HomePage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config'; // Importa la configuración de Firebase

const HomePage = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await signOut(auth); // Cierra sesión en Firebase
            dispatch(logout()); // Actualiza el estado en Redux
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div>
            <h2>Página de Inicio</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default HomePage;
