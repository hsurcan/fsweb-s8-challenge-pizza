import { useState } from 'react';
import Header from './components/Header';
import OrderPage from './components/OrderPage';
import Success from './components/Success';

function App() {
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrderSubmit = (orderData) => {
    console.log("Sipariş Verileri:", orderData);
    setIsOrdered(true);
  };

  return (
    <>
      {!isOrdered ? (
        <>
          <Header />
          <OrderPage onOrderSubmit={handleOrderSubmit} />
        </>
      ) : (
        <Success />
      )}
    </>
  );
}

export default App;