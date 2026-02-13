import React, { useState } from 'react'
import axios from 'axios'

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



    return null
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
