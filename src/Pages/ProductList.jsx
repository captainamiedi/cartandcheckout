import React from 'react'
import ProductList from '../component/Product/ProductList'
import ResponsiveAppBar from '../Layout/Layout'

export default function ProductListPage() {
  return (
    <ResponsiveAppBar>
        <ProductList />
    </ResponsiveAppBar>
  )
}
