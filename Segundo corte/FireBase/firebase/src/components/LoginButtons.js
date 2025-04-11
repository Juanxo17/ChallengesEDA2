import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const LoginButtons = () => {
    const { status } = useSelector(state => state.auth);

    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

    return (
        <div>
            <button disabled={isAuthenticated}>Register</button>
            <button disabled={isAuthenticated}>Login</button>
            <button disabled={!isAuthenticated}>Logout</button>
        </div>
    );
};

export default LoginButtons;
