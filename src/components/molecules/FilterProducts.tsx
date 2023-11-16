import { useGetProductsContext } from '@/context/useGetProductsContext'
import { FilterByProducts } from '@/types/FilterTypes'
import React from 'react'
import { styled } from 'styled-components'



const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0.8em;

  & li {
    color: #737380;
    cursor: pointer;
    padding: 0.5em;
    &.active {
      color: #000;
      font-weight: bold;
      text-decoration-line: underline;
      text-decoration-color: #FFA585;
      text-decoration-thickness: 3px;
    }
  }
`

export const FilterProducts = () => {
  const { handleProductType, isProductType } = useGetProductsContext()

  return (
    <StyledList>
      <li onClick={() => handleProductType(undefined)} className={isProductType === undefined ? 'active' : ''}>Todos os Produtos</li>
      <li onClick={() => handleProductType(FilterByProducts.TSHIRTS)} className={isProductType === FilterByProducts.TSHIRTS ? 'active' : ''}>Camisetas</li>
      <li onClick={() => handleProductType(FilterByProducts.MUGS)} className={isProductType === FilterByProducts.MUGS ? 'active' : ''}> Canecas</li>
    </StyledList>
  )
}
