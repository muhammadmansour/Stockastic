// src/components/Layout.jsx
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register' ; 

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
