import { Button } from '@mui/material'
import React from 'react'
import './cart.css'
import { ProductContext } from '../../context'

export default function CartTotal() {
  const {cartTotal, clearCart} = React.useContext(ProductContext)
  return (
    <div className="total_container">
    <div className="">
            <h4>
                <strong>Total: $ {cartTotal}</strong>
            </h4>
           <Button variant='outlined' onClick={clearCart}>Clear Cart</Button>
            <div className='checkout_btn_container'>
           <Button variant='contained'>Checkout</Button>

            </div>
    </div>
</div>
  )
}
