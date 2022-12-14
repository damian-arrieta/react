
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainter from './components/ItemDetailContainer';
import React from 'react';
import CartProvider from './context/CartContext';
import Footer from './components/Footer';
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainter />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
