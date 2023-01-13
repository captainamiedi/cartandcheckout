import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { ProductContext } from '../../context';
import { useNavigate } from 'react-router-dom';

export default function ProductItem(props) {
  const navigate = useNavigate()
    const {productName, img, description, productId, index, handleAddToCart, inCart, price} = props
    const {handleRemoveToCart} = React.useContext(ProductContext)
    const handleDetailsComponent = () => {
      navigate(`/details/${index}`)
    }
  return (
    <Card className='card_main'>
      <CardMedia
        component="img"
        alt={productName}
        height="200"
        image={img}
        onClick={handleDetailsComponent}
        id='giftCardImg'
      />
        <CardContent onClick={handleDetailsComponent}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {productName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {productId}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {`$${price}`}
            </Typography>
          </Grid>
        </Grid>

        </CardContent>
        <CardActions>
            {inCart ? <Button variant="outlined" id='inCartBtn'>In Cart</Button> : <Button id='AddToCartBtn' onClick={() => handleAddToCart(index)} variant='contained'>Add to Cart</Button>}
            {inCart ? <Button id='RemoveFromCartBtn' onClick={() => handleRemoveToCart(index)}>Remove</Button> : null }
        </CardActions>
    </Card>
  )
}
