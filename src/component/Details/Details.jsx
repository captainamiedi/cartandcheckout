import React, { useContext, useEffect } from "react";
import "./detail.css";
import { ProductContext } from "../../context";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Details() {
  const { giftCards, handleAddToCart, handleGiftCardAsset } = useContext(ProductContext);
  const {id} = useParams()
  const { img, productName, description, 
    productId, denominationType, 
    inCart, maxRecipientDenomination,
    maxSenderDenomination, minRecipientDenomination,
    minSenderDenomination, price
   } =giftCards[id];
  
   useEffect(() => {
    handleGiftCardAsset()
   }, [])
   
  return (
    <div className="details_main_container">
      <div>
        <img src={img} alt={productName} className='details_img' />
      </div>
      <div>
        <Typography gutterBottom variant="subtitle1" component="div">
          {productName}
        </Typography>
        <Typography variant="subtitle1" component="div">
              {`$${price}`}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {productId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DenominationType: {denominationType}
        </Typography>
        {maxRecipientDenomination && <Typography className="text-space" variant="body2" color="text.secondary">
          Max Recipient Denomination: {maxRecipientDenomination}
        </Typography>}
        {minRecipientDenomination && <Typography variant="body2" color="text.secondary">
          Min Recipient Denomination: {minRecipientDenomination}
        </Typography>}
        {maxSenderDenomination && <Typography className="text-space" variant="body2" color="text.secondary">
          Max Sender Denomination: {maxSenderDenomination}
        </Typography>}
        {minSenderDenomination && <Typography variant="body2" color="text.secondary">
          Min Sender Denomination: {minSenderDenomination}
        </Typography>}

        {inCart ? <div className="details_btn"><Button variant="outlined">In Cart</Button> </div> : <div className="details_btn"> <Button onClick={() => handleAddToCart(id)} variant='contained'>Add to Cart</Button></div>}
      </div>
    </div>
  );
}
