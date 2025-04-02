import React, { createContext, useState, useContext } from 'react';

    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);

      const login = (username) => {
        setUser({ username }); // Simulación de login
      };

      const logout = () => {
        setUser(null); // Simulación de logout
      };

      const value = {
        user,
        login,
        logout,
      };

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };

    export const useAuth = () => useContext(AuthContext);
