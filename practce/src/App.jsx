import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './Components/Product'

function App() {
  let pd = [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "price": 4500
    },
    {
      "id": 3,
      "name": "Noise Cancelling Headphones",
      "price": 8999
    },
    {
      "id": 4,
      "name": "27-inch 4K Monitor",
      "price": 24999
    },
    {
      "id": 5,
      "name": "Ergonomic Office Chair",
      "price": 15500
    }
  ]

 

    function addToCart() {
      alert("Item Added");
    }
  
 
  return(
  pd.map((x,i) =>{
    return <Product productdata = {x} addcart = {addToCart} />
    
  })
)


  

}

export default App
