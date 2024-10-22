import React ,  {useContext} from "react";
import { CartContext } from "../context/Cart";

const CartList = () => {
    const cart = useContext(CartContext)

    const total = cart.items.reduce((a, b) => a + parseInt(b.price), 0);
  return ( 
    <div>

    <h3>Cart</h3>

      <h4>
        {
            cart && cart.items.map((item) => <li>{item.name} - ${item.price}</li>)
        }
      </h4>

      <h4>Total Bills : ${total}</h4>
    </div>
  );
};

export default CartList;
