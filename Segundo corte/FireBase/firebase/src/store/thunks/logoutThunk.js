import { signOut } from 'firebase/auth';
import { logout } from '../slices/authSlice';
import { auth } from '../../firebase/config';

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
    };
};
