import React from 'react'
import CartList from '../component/Cart/CartList'
import ResponsiveAppBar from './Layout'

export default function Cart() {
  return (
    <ResponsiveAppBar>
        <CartList />
    </ResponsiveAppBar>
  )
}
