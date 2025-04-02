import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Componentes/Login';
import PrivateRoute from './Routes/PrivateRoutes';
import PublicRoute from './Routes/PublicRoutes';
import { AuthProvider, useAuth } from './FakeAuth/AuthContext';

    const Home = () => <h1>Home (Public)</h1>;
    const Private = () => {
      const { user, logout } = useAuth();
      return (
        <div>
          <h1>Private Page</h1>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      );
    };

    function App() {
      return (
        <AuthProvider>
          <BrowserRouter>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/private">Private</Link>
            </nav>
            <Routes>
                <Route element={<PublicRoute/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/private" element={<Private/>} />
                </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      );
    }

    export default App;