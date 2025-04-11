import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config'; 
import { login, logout } from './store/slices/authSlice';
import AuthPage from './pages/AuthPage'; 
import HomePage from './pages/HomePage'; 

const App = () => {
    const dispatch = useDispatch();
    const { status, email } = useSelector(state => state.auth); 

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const { uid, email, displayName, photoURL } = user;
                dispatch(login({ uid, email, displayName, photoURL }));
            } else {
               
                dispatch(logout());
            }
        });

        
        return () => unsubscribe();
    }, [dispatch]);

    if (status === 'checking') {
        return <h2>Loading...</h2>; 
    }

    return (
        <div>
            {status === 'authenticated' ? (
                <>
                    <h1>Bienvenido, {email}!</h1> {}
                    <HomePage /> {}
                </>
            ) : (
                <AuthPage />
            )}
        </div>
    );
};

export default App;
