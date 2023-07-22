import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function RedirectHome() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
}

function App() {
  const user = true;

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <RedirectHome /> : <Login />} />
          <Route
            path="/register"
            element={user ? <RedirectHome /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
