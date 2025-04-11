import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = null; // Limpiar cualquier error
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        setError: (state, action) => {
            state.errorMessage = action.payload; // Guardar solo el mensaje de error
        },
    },
});

// Exporta las acciones
export const { login, logout, checkingCredentials, setError } = authSlice.actions;

// Exporta el reducer por defecto
export default authSlice.reducer;
