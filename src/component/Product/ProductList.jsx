import React, {useContext} from 'react'
import ProductItem from './ProductItem'
import './product.css'
import { ProductContext } from '../../context'
import Loading from '../Loading'

export default function ProductList() {

  const {giftCards, handleAddToCart, isLoading} = useContext(ProductContext)
  
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
        <h2>Gift Cards</h2>
        <div className='product_list_container'>
        {giftCards?.length > 0 && giftCards?.map((item, index) => {
          item.price = !item.price ? index + 10 : item.price
          return <ProductItem {...item} key={item.productId} index={index} handleAddToCart={handleAddToCart} />
        })}
        </div>
    </div>
  )
}
