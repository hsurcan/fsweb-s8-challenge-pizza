import React from 'react'
import { SuccessPage } from './orderSuccess.style'

const pizzaPrice = 85.5
const ingredientPrice = 5
const pizzaSize = { 
  kucuk: 'Küçük', 
  orta: 'Orta', 
  buyuk: 'Büyük' }


function OrderSuccess({ orderData, onNavigateHome }) {
  if (!orderData) { //eğer formdan veri gelmezse
    return null
  }

  //prop destructuring ile orderData içindeki bilgileri alıyoruz. Malzemeler ve miktar için varsayılan değerler atıyoruz.
  const { boyut, hamur, malzemeler = [], miktar = 1 } = orderData
  const boyutLabel = pizzaSize[boyut] ?? boyut
  const selections = (malzemeler.length * ingredientPrice * miktar).toFixed(2)
  const total = ((pizzaPrice + malzemeler.length * ingredientPrice) * miktar).toFixed(2)

  return (
    <SuccessPage>
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      </header>
      <div>
        <p className="tagline">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
        <div className="details">
          <div><span>Boyut:</span><span className="value">{boyutLabel}</span></div>
          <div><span>Hamur:</span><span className="value">{hamur}</span></div>
          <div><span>Ek Malzemeler:</span><span className="value">{malzemeler.join(', ')}</span></div>
        </div>
        <div className="summary">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-row"><span>Seçimler</span><span>{selections}₺</span></div>
          <div className="summary-row total-row"><span>Toplam</span><span>{total}₺</span></div>
        </div>
      </div>
    </SuccessPage>
  )
}

export default OrderSuccess
