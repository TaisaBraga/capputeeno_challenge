import { useGetProductsContext } from '@/context/useGetProductsContext'
import React from 'react'

export const FilterProducts = () => {
  const { handleProductType } = useGetProductsContext()
  return (
    <>
      <p style={{ cursor: 'pointer' }} onClick={() => handleProductType(undefined)}>Todos os Produtos</p>
      <p style={{ cursor: 'pointer' }} onClick={() => handleProductType("t-shirts")}>Camisetas</p>
      <p style={{ cursor: 'pointer' }} onClick={() => handleProductType("mugs")}>Canecas</p>
    </>
  )
}
