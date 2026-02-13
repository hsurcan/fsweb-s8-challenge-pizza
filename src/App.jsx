import { useState } from 'react';
import Header from './components/HomePage/Header';
import Cards from './components/HomePage/Cards';
import Icons from './components/HomePage/Icons';
import Footer from './components/HomePage/Footer';     
import OrderHeader from './components/OrderPage/OrderHeader';
import Success from './components/OrderPage/Success';

function App() {

  const [activePage, setActivePage] = useState("home");
  const [orderData, setOrderData] = useState(null);

// Order formundan gelen veriyi al ve success'e gönder
  const handleOrderSuccess = (data) => {
    setOrderData(data);
    setActivePage("success");
  }

  return (
    <>
      {activePage === "home" && (
        <>
          <Header setActivePage={setActivePage} />
          <Icons />
          <Cards />
        </>
      )}

      {activePage === "order" && (
        <>
        <OrderHeader setActivePage={setActivePage} />
        <OrderForm setActivePage={setActivePage} handleOrderSuccess={handleOrderSuccess} />
        </>
      )}

      {activePage === "success" && (
        <Success orderData={orderData} setActivePage={setActivePage} />
      )}

      <Footer />
    </>
  );
}

export default App;