import React, { useContext } from 'react'
import { ProductContext } from '../../context'
import './cart.css'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

export default function CartList() {
    const {cartData} = useContext(ProductContext)
  return (
    <div className='cartlist_container'>
        <h2>Shopping List</h2>

        {cartData?.length > 0 ? cartData?.map((item, index) => <CartItem {...item} key={index} index={index}/>) : (
          <div className='empty_cart_container'>
            <p>Cart is Empty</p>
          </div>
        )}

        {cartData?.length > 0 && <CartTotal />}
    </div>
  )
}
