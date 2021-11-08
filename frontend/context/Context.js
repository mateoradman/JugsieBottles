import {createContext, useContext, useEffect, useState} from 'react'

const CartStateContext = createContext({cartItemsArray: []});

const getCartItemsFromLocalStorage = () => {
  let localStorageCartItems = localStorage.getItem('JugsieBottlesCartItems');
  if (localStorageCartItems) {
    console.log(JSON.parse(localStorageCartItems));
  } else return [];
}

export const CartProvider = ({children}) => {
  const [cartItemsArray, setCartItems] = useState([]);

  const updateCartItems = (cartItem) => {
   setCartItems(oldCartItemsArray => [...oldCartItemsArray, cartItem]);
  }

  return (
    <CartStateContext.Provider
      value={{cartItemsArray, updateCartItems}}
    >
      {children}
    </CartStateContext.Provider>
  )
}

export const useCartItems = () => useContext(CartStateContext)
