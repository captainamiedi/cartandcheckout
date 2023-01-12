import React, { useEffect, useState } from "react";
import { getGiftCardAsset } from "./Service";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [giftCards, setGiftCards] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    // get all gift cards from API call
    getGiftCardAsset().then((data) => {
      console.log(data, "from product list");
      setGiftCards(data.content);
    });

    // get cart data stored in local storage
    const getCartGiftCards = localStorage.getItem("cartData");
    setCartData(JSON.parse(getCartGiftCards) || []);
  }, []);

  useEffect(() => {
    if (cartData?.length > 0) {
      // persist data to local storage
      localStorage.setItem("cartData", JSON.stringify(cartData));
      // get total sum after every action on cart data
      addTotal()
    }
  }, [cartData]);

  const handleAddToCart = (id) => {
    let tempProduct = [...giftCards];
    const product = tempProduct[id];
    // check if gift cart has been added
    const cartIndex = cartData.indexOf((el) => el.productId === product.productId)
    console.log(cartIndex, 'index');
    if (cartIndex === -1) {
      product.inCart = true;
      product.count = 1;
      product.total = product.price;
      setGiftCards([...giftCards, product]);
  
      setCartData([...cartData, product]);
    } else {
      const tempCart = [...cartData]
      const cartProduct = tempCart[cartIndex]
      cartProduct.count += 1
      cartProduct.total = cartProduct.price * cartProduct.count
      tempCart[cartIndex] = cartProduct
      setCartData(tempCart)
      product.inCart = true;
      setGiftCards([...giftCards, product]);
    }
  };
  const handleRemoveToCart = (id) => {
    let tempProduct = [...giftCards];
    const product = tempProduct[id];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    setGiftCards([...giftCards, product]);
    // get the index of the product in cart
    const cartIndex = cartData.indexOf((el) => el.productId === product.productId)
    const cartTempProduct = [...cartData]
    cartTempProduct.splice(cartIndex, 1)
    setCartData(cartTempProduct)
  };

  const incrementQuality = (id) => {
    let tempProduct = [...cartData];
    const product = tempProduct[id];
    product.count += 1
    product.total = product.price * product.count
    tempProduct[id] = product
    setCartData(tempProduct);
  };
  const decrementQuality = (id) => {
    let tempProduct = [...cartData];
    const product = tempProduct[id];
    product.count -= 1
    tempProduct[id] = product
    product.total = product.price * product.count
    if (product.count === 0) {
      product.count = 0;
      product.total = 0;
      product.inCart = false
      tempProduct.splice(id, 1)
      setGiftCards([...giftCards, product]);
    }
    setCartData(tempProduct);
  };

  const addTotal = () => {
    let total = 0;
    cartData.map((item) => total += item.total)
    setCartTotal(total)
  }

  const clearCart = () => {
    setCartData([])
    localStorage.removeItem('cartData')
  }

  return (
    <ProductContext.Provider
      value={{
        handleAddToCart,
        handleRemoveToCart,
        giftCards,
        cartData,
        incrementQuality,
        decrementQuality,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
