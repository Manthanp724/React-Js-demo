import { useState } from 'react'
import './App.css'
import Items from './components/Items'
import CartList from './components/CartList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Items name="Macbook Pro" price = "3000" />
      <Items name="Iphone 15 Pro Max" price = "2000" />
      <Items name="One Plus 9R" price = "1200" />
      <Items name="Keyboard" price = "400" />
      <CartList />
      
    </>
  )
}

export default App
