// src/utils/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/authContexts"

export default function ProtectedRoute({ children }) {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!auth) return <Navigate to="/login" />;

  return children;
}
