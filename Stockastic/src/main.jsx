import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Analysis from './pages/analysis.jsx'
import { lazy, Suspense } from 'react';
import Spinner from './components/spinner.jsx';
import Registration from './pages/registration.jsx';
const AnalysisPage = lazy(() => import('./pages/analysis.jsx'));
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import Landing from './pages/landing.jsx';
import News from './pages/news.jsx';
import ProtectedRoute from './utils/privateRoutes.jsx';
import { Navbar } from 'flowbite-react';

import { AuthProvider } from "./contexts/authContexts.jsx"
import Layout from './layouts/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
<Suspense fallback={<Spinner />}>

    <Layout>
       <Routes>
  <Route path="/" index element={<Landing />} />

  {/* Protected Routes */}
  <Route path="/analysis" element={
    <ProtectedRoute><Analysis /></ProtectedRoute>
  } />
  <Route path="/register" element={
    <Registration />
  } />
  <Route path="/login" element={
    <Login />
  } />
  <Route path="/dashboard" element={
    <ProtectedRoute><Dashboard /></ProtectedRoute>
  } />
  <Route path="/news" element={
   <News />
  } />
</Routes>
    </Layout>
 
    </Suspense>
  </AuthProvider>
    

  </BrowserRouter>
)
