import React from 'react'
import { useContext } from 'react'
import { CartContext, CartProvider } from '../context/Cart'

const Items = (props) => {
    const cart = useContext(CartContext) 
    console.log(cart)
  return (
    <div className='items-class'>
      <h3>{props.name} </h3>
      <h4>Price : ${props.price}</h4>
      <button onClick={()=>{cart.setItems([...cart.items, {name : props.name , price: props.price}])}}>Add to cart</button>
      <hr />
    </div>
  )
}

export default Items
