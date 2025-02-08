import './App.css'
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { useState } from 'react'
import { Product } from "./interfaces";

function App() {

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  function AddToCart(product: Product) {
    if(!selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product])
    } else {
      alert('Produktas jau krepšelyje')
    }
  }

  function RemoveFromCart(product: Product) {
    setSelectedProducts(selectedProducts.filter(p => p.id !== product.id))
  }

  return (
    <>
      <ProductList AddToCart={AddToCart}/>
      <Cart selectedProducts={selectedProducts} RemoveFromCart={RemoveFromCart}/>
    </>
  )
}

export default App
