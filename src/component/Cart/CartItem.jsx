import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { ProductContext } from '../../context';

export default function CartItem(props) {
    const theme = useTheme()
    const {img, productName, description, productId, count, index, total, price} = props
    const {incrementQuality, decrementQuality} = React.useContext(ProductContext)
    console.log(props, 'cart props');
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <div className='card_cartlist_container'>
       <Card>
        <div className='card_content_container'>
            <CardMedia
                component="img"
                sx={{ width: !isSmallScreen ? '100%' : 165, height: isSmallScreen ? 100 : '' }}
                image={img}
                alt={productName}
            />

            <CardContent className='cart_description_container'>
                <div>
                <Typography variant="subtitle1" component="div">
                    {`$${price}`}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                {productName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {productId}
              </Typography>
                </div>
            </CardContent>
            <CardContent>
            <div className='cart_increase_decrease_container'>
              {<span className='btn btn-black' onClick={() => decrementQuality(index)}>-</span>}
              <span className='btn btn-black'>{count}</span>
              <span className='btn btn-black' onClick={()=>incrementQuality(index)}>+</span>
            </div>
            </CardContent>
            <CardContent>
                <div>
                <Typography><strong>Total Item: $ {total}</strong></Typography>
                </div>
            </CardContent>
        </div>
        </Card> 
    </div>
  )
}

// const styles = makeStyles({
//     '.MuiCardMedia-img':  {

//     }
// })