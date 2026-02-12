import { useState } from 'react';
import Header from './components/Header';
import OrderPage from './components/OrderPage';
import Success from './components/Success';
import index from './index.css';


function App() {
  return(
    <>
    <Header />
    <NavLinks />
    <OrderPage />
    <Success />
    </>
  )
}

export default App;