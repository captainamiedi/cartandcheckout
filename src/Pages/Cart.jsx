import React from 'react'
import CartList from '../component/Cart/CartList'
import ResponsiveAppBar from '../Layout/Layout'

export default function Cart() {
  return (
    <ResponsiveAppBar>
        <CartList />
    </ResponsiveAppBar>
  )
}
