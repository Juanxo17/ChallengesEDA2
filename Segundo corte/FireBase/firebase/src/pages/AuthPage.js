// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmailPassword } from '../store/thunks/loginThunk';
import { registerWithEmailPassword } from '../store/thunks/registerThunk';
import { googleLogin } from '../store/thunks/googleLoginThunk'; // Importa el thunk de Google

const AuthPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            dispatch(registerWithEmailPassword({ email, password }));
        } else {
            dispatch(loginWithEmailPassword({ email, password }));
        }
    };

    const handleGoogleLogin = () => {
        dispatch(googleLogin()); // Despacha el thunk para iniciar sesión con Google
    };

    return (
        <div className="container">
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={handleGoogleLogin} style={{ marginTop: '10px' }}>
                Iniciar Sesión con Google
            </button>
            <button onClick={() => setIsRegister(!isRegister)} style={{ marginTop: '10px' }}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default AuthPage;
