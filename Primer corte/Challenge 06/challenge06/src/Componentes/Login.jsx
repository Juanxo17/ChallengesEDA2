import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useAuth } from '../FakeAuth/AuthContext';

    const Login = () => {
      const [username, setUsername] = useState('');
      const { login } = useAuth();
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
        navigate('/private');
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button type="submit">Login</button>
        </form>
      );
    };

    export default Login;