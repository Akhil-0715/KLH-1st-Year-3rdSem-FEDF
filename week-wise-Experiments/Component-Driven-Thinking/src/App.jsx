import { useState } from 'react'
import ProductCard from './components/ProductCard'
import './App.css'



function App(){
  return(
    <div>
    <h1>My Shop</h1>

    <ProductCard name="Phone" price="55400" image="phone.jpg"/>
    <ProductCard name="Laptop" price="75400" image="laptop.jpg"/>
    <ProductCard name="Headphones" price="5400" image="headphones.jpg"/>
    </div>
  );
}
export default App;