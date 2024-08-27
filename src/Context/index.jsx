import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false) 
   
  const [productToShow, setProductToShow] = useState({})
  const [carProducts, setCarProducts] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      setIsProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow, 
      setProductToShow,
      carProducts, 
      setCarProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}
