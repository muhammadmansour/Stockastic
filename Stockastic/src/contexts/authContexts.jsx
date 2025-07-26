// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/authToken`, {
      withCredentials: true
    }).then(() => {
      setAuth(true);
    }).catch(() => {
      setAuth(false);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
