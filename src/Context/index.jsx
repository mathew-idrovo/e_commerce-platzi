import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

 export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setcount] = useState(0)
  return (
    <ShoppingCartContext.Provider value={{
        count,
        setcount
    }}>
     {children}
    </ShoppingCartContext.Provider>
    
  )
}
