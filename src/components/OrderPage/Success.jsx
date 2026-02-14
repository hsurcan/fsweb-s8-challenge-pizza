import './Success.css'

const pizzaPrice = 85.5
const ingredientPrice = 5
const pizzaSize = { 
  kucuk: 'Küçük', 
  orta: 'Orta', 
  buyuk: 'Büyük' }


export default function Success({ orderData }) {
  if (!orderData) { //eğer formdan veri gelmezse
    return null
  }

  //prop destructuring ile orderData içindeki bilgileri alıyoruz. Malzemeler ve miktar için varsayılan değerler atıyoruz.
  const { size, dough, ingredients = [], quantity = 1 } = orderData
  const sizeLabel = pizzaSize[size] ?? size //boyut bilgisini daha okunabilir hale getiriyoruz. Eğer tanımlı değilse gelen değeri kullanıyoruz.
  const selections = (ingredients.length * ingredientPrice * quantity).toFixed(2)
  const total = ((pizzaPrice + ingredients.length * ingredientPrice) * quantity).toFixed(2)

  return (
    <div className='success-container'> 
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      </header>
      <div>
        <p className="tagline">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
        <div className="details">
          <div><span>Boyut:</span><span className="value">{sizeLabel}</span></div>
          <div><span>Hamur:</span><span className="value">{dough}</span></div>
          <div><span>Ek Malzemeler:</span><span className="value">{ingredients.join(', ')}</span></div>
        </div>
        <div className="summary">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-row"><span>Seçimler</span><span>{selections}₺</span></div>
          <div className="summary-row total-row"><span>Toplam</span><span>{total}₺</span></div>
        </div>
      </div>
    </div>
  )
}


