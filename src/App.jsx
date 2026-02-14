import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderPage/OrderForm.jsx'
import OrderHeader from './components/OrderPage/OrderHeader.jsx'
import Success from './components/OrderPage/Success.jsx'
import HomePage from './HomePage.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [orderResponse, setOrderResponse] = useState(null)

  const handleOrderSuccess = (data) => {
    setOrderResponse(data)
    setCurrentPage('success')
  }

  return (
    <div className="app-main-layout">
      {currentPage === 'home' && (
        <HomePage onAciktimClick={() => setCurrentPage('order')} />
      )}

      {currentPage === 'order' && (
        <>
          <OrderHeader onNavigateHome={() => setCurrentPage('home')} />
          <OrderForm
            onNavigateHome={() => setCurrentPage('home')}
            onOrderSuccess={handleOrderSuccess} />
        </>
      )}

      {currentPage === 'success' && (
        <Success
          orderData={orderResponse}
          onNavigateHome={() => {
            setCurrentPage('home')
            setOrderResponse(null)
          } } />
      )}
       <Footer />
    </div>
  
  )
}


