import React, { useState } from 'react'
import axios from 'axios'
import './OrderForm.css'

function OrderForm({onOrderSuccess, onNavigateHome }){

//verinin başlangıç değeri tanımlandı, her data için seçilen değer setFormData ile güncellenecek
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        dough: '',
        ingredients: [],
        note: '',
        quantity: 1
    })

//Eğer form gönderilemezse oluşacak hatayı göstermek için
    const [submitError, setSubmitError] = useState(null);

//formda kullanılacak verileri değiştirmek için fonksiyonlar:
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData(oldData => ({...oldData, [name]: value}))
    }
//Ek ingredienti ekleyip çıkarmak için
    const handleIngredientChange = (ingredient) => {
        setFormData(oldData => {
            const newIngredients = oldData.ingredients.includes(ingredient)
                ? oldData.ingredients.filter(i => i !== ingredient)
                : [...oldData.ingredients, ingredient]
            return {...oldData, ingredients: newIngredients}
        })
    }
//formda eklenen ingredient quantityını değiştirmek için
    const handleQuantityChange = (amount) => {
        setFormData(oldData => ({
            ...oldData,
            quantity: Math.max(1, oldData.quantity + amount)
        }))
    }

//formun hangi durumlarda geçerli olacağını kontrol etmek için 
    const isFormValid = () => {
        return (
            formData.name.trim().length >= 3 &&
            formData.size !== '' &&
            formData.dough !== '' &&
            formData.ingredients.length >= 4 
        )
    }

    const calculateIngredientCost = () => {
        return formData.ingredients.length * ingredientPrice * formData.quantity
    }

    const calculateTotalCost = () => {
        const basePrice = 85.5
        return (basePrice + calculateIngredientCost()) * formData.quantity
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!isFormValid()) return
        setSubmitError(null)

        const apiKey = import.meta.env.VITE_REQRES_API_KEY || 'reqres_db158a8589274953bd9f7f9deac3a5bd'

        axios
            .post('https://reqres.in/api/pizza', formData, {
              headers: {
               'Content-Type': 'application/json',
               'x-api-key': apiKey
        }
            })
            .then(response => {
                console.log('Sipariş başarılı:', response.data)
                if(onOrderSuccess) onOrderSuccess(response.data)
            })
            .catch(error => {
                console.error('Sipariş hatası:', error)
                setSubmitError('Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
            })  
    }

{/*Form Elementi eklendi*/}
    return (

  <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="pizza-form">

          <div className="bej-full-width-wrapper">
            <div className="pizza-info">
              <img
                src="/images/iteration-2-images/pictures/form-banner.png"
                alt="Position Absolute Acı Pizza"
                className="form-banner" />
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <button type="button" onClick={onNavigateHome}>Anasayfa</button>
                <span className="sep">-</span>
                <span className="current">Sipariş Oluştur</span>
              </nav>
              <h2>Position Absolute Acı Pizza</h2>
              <div className="price-row">
                <span className="price">85.50₺</span>
                <span className="rating">4.9 <span className="rating-count">(200)</span></span>
              </div>
              <p className="description">
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
              </p>
            </div>
          </div>
          {/*size ve dough Seçimi Alanı*/}
          <div className="form-inner-content">
            <div className="size-dough-container">
              <div className="selection-box">
                <h3>Boyut Seç <span className="required">*</span></h3>
                <div className="size-options-list">
                  {pizzaSizes.map(size => (
                    <div key={size.value} className="size-option-item">
                      <input
                        type="radio"
                        id={size.value}
                        name="size"
                        value={size.value}
                        checked={formData.size === size.value}
                        onChange={handleInputChange} />
                      <label htmlFor={size.value}>{size.label}</label>
                    </div>
                  ))}
                </div>
                {formData.size === '' && <div className="field-error">boyut seçmelisiniz</div>}
              </div>

              <div className="selection-box">
                <h3>Hamur Seç <span className="required">*</span></h3>
                <select
                  name="dough"
                  className="dough-select-dropdown"
                  value={formData.dough}
                  onChange={handleInputChange}
                >
                  <option value="">- Hamur Kalınlığı Seç -</option>
                  {pizzaThickness.map(dough => (
                    <option key={dough} value={dough}>{dough}</option>
                  ))}
                </select>
                {formData.dough === '' && <div className="field-error">Hamur kalınlığı seçmelisiniz</div>}
              </div>
            </div>

            {/* Ek ingredient */}
            <section className="toppings-section">
              <h3>Ek Malzemeler</h3>
              <p className="toppings-hint">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="toppings-grid-layout">
                {PizzaIngredients.map(ing => {
                  const isChecked = formData.ingredients.includes(ing)
                  const isDisabled = !isChecked && formData.ingredients.length >= 10
                  return (
                    <div key={ing} className="topping-checkbox-item">
                      <input
                        type="checkbox"
                        id={ing}
                        name="ing"
                        value={ing}
                        checked={isChecked}
                        onChange={() => handleIngredientChange(ing)}
                        disabled={isDisabled} />
                      <label htmlFor={ing}>{ing}</label>
                    </div>
                  )
                })}
              </div>
              {formData.ingredients.length < 4 && (
                <div className="field-error">
                  {formData.ingredients.length === 0
                    ? 'En az 4 malzeme seçmelisiniz'
                    : `En az 4 malzeme seçmelisiniz (${formData.ingredients.length}/4)`}
                </div>
              )}
            </section>

            {/* İsim Girişi */}
            <section className="input-section">
              <h3>İsim <span className="required">*</span></h3>
              <input
                type="text"
                name="name"
                className="text-input-field"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="İsminizi giriniz (en az 3 karakter)" />
              {formData.name.length > 0 && formData.name.trim().length < 3 && (
                <div className="field-error">İsim en az 3 karakter olmalıdır</div>
              )}
            </section>

            {/* Sipariş Notu */}
            <section className="input-section">
              <h3>Sipariş Notu</h3>
              <textarea
                name="note"
                className="notes-area"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.notlar}
                onChange={handleInputChange} />
              <hr className="form-divider" />
            </section>

            {/* quantity ve Özet Kartı */}
            <div className="order-footer-row">
              <div className="quantity-and-mobile-btn">
                <div className="quantity-control-group">
                  <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
                  <input type="text" value={formData.quantity} readOnly />
                  <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <button type="submit" disabled={!isFormValid()} className="submit-btn mobile-only">
                  SİPARİŞ VER
                </button>
              </div>

              <div className="summary-card-container">
                <h3 className="summary-card-title">Sipariş Toplamı</h3>
                <div className="summary-details">
                  <div className="summary-detail-row">
                    <span>Seçimler</span>
                    <span>{calculateIngredientCost().toFixed(2)}₺</span>
                  </div>
                  <div className="summary-detail-row total-highlight">
                    <span>Toplam</span>
                    <span>{calculateTotalCost().toFixed(2)}₺</span>
                  </div>
                </div>
                {submitError && <div className="submit-error">{submitError}</div>}
                <button type="submit" disabled={!isFormValid()} className="submit-btn desktop-only">
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}


//formda kullanılacak seçenekler tanımlandı
const pizzaSizes = [
  { value: 'kucuk', label: 'S' },
  { value: 'orta', label: 'M' },
  { value: 'buyuk', label: 'L' }
]

const pizzaThickness = [
  'İnce hamur',
  'Normal hamur',
  'Kalın hamur'
]

const PizzaIngredients = [
  'Pepperoni',
  'Sosis',
  'Mısır',
  'Jalapeno',
  'Ananas',
  'Kanada Jambonu',
  'Tavuk Izgara',
  'Soğan',
  'Domates',
  'Sucuk',
  'Sarımsak',
  'Biber',
  'Kabak',
  'Kanat'
]

const ingredientPrice = 5

export default OrderForm    
