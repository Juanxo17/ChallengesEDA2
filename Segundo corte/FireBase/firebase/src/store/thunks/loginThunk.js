import { signInWithEmailAndPassword } from 'firebase/auth';
import { checkingCredentials, login, logout } from '../slices/authSlice';
import { auth } from '../../firebase/config';

export const loginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const { uid, displayName, photoURL } = result.user;

            dispatch(login({ uid, email, displayName, photoURL }));
        } catch (error) {
            console.error('Error in login: ', error.message);
            dispatch(logout({ errorMessage: error.message }));
        }
    };
};
