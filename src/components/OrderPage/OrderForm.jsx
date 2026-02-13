import React, { useState } from 'react'
import axios from 'axios'

function OrderForm(){

//verinin başlangıç değeri tanımlandı
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        thickness: '',
        ingredients: [],
        noted: '',
        quantity: 1
    })

    return()
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
