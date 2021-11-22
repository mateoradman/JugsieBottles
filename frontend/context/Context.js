import {createContext, useContext, useState} from 'react'

const getCartItemsFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    let localStorageCartItems = localStorage.getItem('JugsieBottlesCartItems');
    if (localStorageCartItems) {
      console.log(JSON.parse(localStorageCartItems));
    }
  } else return [];
}

const CartStateContext = createContext({cartItemsArray: []});

export const CartProvider = ({children}) => {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  return (
    <CartStateContext.Provider value={{cartItemsArray, setCartItemsArray}}>
      {children}
    </CartStateContext.Provider>
  )
}

export const useCartItems = () => useContext(CartStateContext)
