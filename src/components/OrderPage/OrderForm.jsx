import React, { useState } from 'react'
import axios from 'axios'
import './OrderForm.css'

function OrderForm(){

//verinin başlangıç değeri tanımlandı, her data için seçilen değer setFormData ile güncellenecek
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        thickness: '',
        ingredients: [],
        noted: '',
        quantity: 1
    })

//Eğer form gönderilemezse oluşacak hatayı göstermek için
    const [submitError, setSubmitError] = useState(null);

//formda kullanılacak verileri değiştirmek için fonksiyonlar:
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData(oldData => ({...oldData, [name]: value}))
    }
//Ek malzemeleri ekleyip çıkarmak için
    const handleIngredientChange = (ingredient) => {
        setFormData(oldData => {
            const newIngredients = oldData.ingredients.includes(ingredient)
                ? oldData.ingredients.filter(i => i !== ingredient)
                : [...oldData.ingredients, ingredient]
            return {...oldData, ingredients: newIngredients}
        })
    }
//formda eklenen malzeme miktarını değiştirmek için
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
            formData.thickness !== '' &&
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

        const apiKey = import.meta.env.REQRES_API_KEY || 'reqres-free-v1'

        axios.post('https://reqres.in/api/pizza', formData)
            .then(response => {
                console.log('Sipariş başarılı:', response.data)
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
            className="form-banner" 
          />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <button type="button" onClick={onNavigateHome}>Anasayfa</button>
            <span className="sep">-</span>
            <span>Seçenekler</span>
            <span className="sep">-</span>
            <span className="current">Sipariş Oluştur</span>
          </nav>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-row">
            <span className="price">85.50₺</span>
            <span className="rating">4.9 <span className="rating-count">(200)</span></span>
          </div>
          <p className="description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
          </p>
        </div>
      </div>
{/*Boyut ve Hamur Seçimi Alanı*/}
      <div className="form-inner-content">
        <div className="size-dough-container">
          <div className="selection-box">
            <h3>Boyut Seç <span className="required">*</span></h3>
            <div className="size-options-list">
              {BOYUTLAR.map(boyut => (
                <div key={boyut.value} className="size-option-item">
                  <input
                    type="radio"
                    id={boyut.value}
                    name="boyut"
                    value={boyut.value}
                    checked={formData.boyut === boyut.value}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={boyut.value}>{boyut.label}</label>
                </div>
              ))}
            </div>
            {formData.boyut === '' && <div className="field-error">Boyut seçmelisiniz</div>}
          </div>

          <div className="selection-box">
            <h3>Hamur Seç <span className="required">*</span></h3>
            <select
              name="hamur"
              className="dough-select-dropdown"
              value={formData.hamur}
              onChange={handleInputChange}
            >
              <option value="">- Hamur Kalınlığı Seç -</option>
              {HAMUR_SECENEKLERI.map(hamur => (
                <option key={hamur} value={hamur}>{hamur}</option>
              ))}
            </select>
            {formData.hamur === '' && <div className="field-error">Hamur seçmelisiniz</div>}
          </div>
        </div>

        {/* Ek Malzemeler */}
        <section className="toppings-section">
          <h3>Ek Malzemeler</h3>
          <p className="toppings-hint">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings-grid-layout">
            {MALZEMELER.map(malzeme => {
              const isChecked = formData.malzemeler.includes(malzeme);
              const isDisabled = !isChecked && formData.malzemeler.length >= 10;
              return (
                <div key={malzeme} className="topping-checkbox-item">
                  <input
                    type="checkbox"
                    id={malzeme}
                    name="malzemeler"
                    value={malzeme}
                    checked={isChecked}
                    onChange={() => handleMalzemeChange(malzeme)}
                    disabled={isDisabled}
                  />
                  <label htmlFor={malzeme}>{malzeme}</label>
                </div>
              );
            })}
          </div>
          {formData.malzemeler.length < 4 && (
            <div className="field-error">
              {formData.malzemeler.length === 0
                ? 'En az 4 malzeme seçmelisiniz'
                : `En az 4 malzeme seçmelisiniz (${formData.malzemeler.length}/4)`}
            </div>
          )}
        </section>

        {/* İsim Girişi */}
        <section className="input-section">
          <h3>İsim <span className="required">*</span></h3>
          <input
            type="text"
            name="isim"
            className="text-input-field"
            value={formData.isim}
            onChange={handleInputChange}
            placeholder="İsminizi giriniz (en az 3 karakter)"
          />
          {formData.isim.length > 0 && formData.isim.trim().length < 3 && (
            <div className="field-error">İsim en az 3 karakter olmalıdır</div>
          )}
        </section>

        {/* Sipariş Notu */}
        <section className="input-section">
          <h3>Sipariş Notu</h3>
          <textarea
            name="notlar"
            className="notes-area"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={formData.notlar}
            onChange={handleInputChange}
          />
          <hr className="form-divider" />
        </section>

        {/* Miktar ve Özet Kartı */}
        <div className="order-footer-row">
          <div className="quantity-and-mobile-btn">
            <div className="quantity-control-group">
              <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
              <input type="text" value={formData.miktar} readOnly />
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
                <span>{calculateSelections().toFixed(2)}₺</span>
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
);
}

//formda kullanılacak seçenekler tanımlandı
const pizzaSizes = [
  { value: 'kucuk', label: 'S' },
  { value: 'orta', label: 'M' },
  { value: 'buyuk', label: 'L' }
]

const pizzaThickness = [
  'İnce Hamur',
  'Normal Hamur',
  'Kalın Hamur'
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
