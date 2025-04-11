// src/store/thunks/googleLoginThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { login } from '../slices/authSlice';

export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async (_, { dispatch, rejectWithValue }) => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log("user", user);
            // Despacha la acción de login con la información del usuario
            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
            }));

            return user;
        } catch (error) {
            console.error('Error en el inicio de sesión con Google:', error);
            return rejectWithValue(error);
        }
    }
);
