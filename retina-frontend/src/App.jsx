import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Regester/Register';
import Health from './components/Health';
import Products from './components/Products';
import ProductsPage from './components/ProductsPage/ProductsPage';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/fleet-app/v1/health-check" element={<Health />} />
          <Route path="/fleet-app/v1/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}
