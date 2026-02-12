import { useState } from 'react';
import Header from './components/Header';
import OrderPage from './components/OrderPage/OrderHeader';
import Success from './components/OrderPage/Success';
import Cards from './components/Cards';
import Icons from './components/Icons';
import Footer from './components/Footer';     

function App() {
  const [activePage, setActivePage] = useState("home");
  
  return(
<>
      {activePage === "home" && (
        <>
          <Header setActivePage={setActivePage} />
          <Icons />
          <Cards />
        </>
      )}

      {activePage === "order" && (
        <OrderPage setActivePage={setActivePage} />
      )}

      {activePage === "success" && (
        <Success />
      )}

      <Footer />
    </>
  )
}

export default App;
