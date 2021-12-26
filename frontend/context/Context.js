import { createContext, useContext, useEffect, useState } from 'react'

const CartStateContext = createContext({ cartItemsArray: [] });

export const CartProvider = ({ children }) => {
  const getCartItemsFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      let localStorageCartItems = window.localStorage.getItem('JugsieBottlesCartItems');
      if (typeof localStorageCartItems === 'string') {
        let parsedJSONArray = JSON.parse(localStorageCartItems);
        if (typeof parsedJSONArray === 'object') {
          return parsedJSONArray;
        }
      }
    }
    return [];
  }
  const [cartItemsArray, setCartItemArray] = useState([]);
  useEffect(() => setCartItemArray(getCartItemsFromLocalStorage()), [])
  const setCartItemsArray = (newCartItemsArray) => {
    setCartItemArray(newCartItemsArray);
    window.localStorage.setItem('JugsieBottlesCartItems', JSON.stringify(newCartItemsArray));
  }

  return (
    <CartStateContext.Provider value={ { cartItemsArray, setCartItemsArray } }>
      { children }
    </CartStateContext.Provider>
  )
}

export const useCartItems = () => useContext(CartStateContext)
