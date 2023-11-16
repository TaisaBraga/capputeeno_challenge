import { useGetProductsContext } from '@/context/useGetProductsContext'
import { FilterPriorityTypes } from '@/types/FilterTypes'
import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  background-color: #fff;
  border: none;
  border-radius: 1em;
  color: #5D5D6D;
  padding: 0.5em;
  position: absolute;
  text-align-last: left;
  z-index: 0;
  width: 12em;
  & li {
    cursor: pointer;
    list-style: none;
    padding: 0.6em;

    &:hover {
      background-color: #D3D3D3;
      border-radius: 1em;
    }
  }
`

export const ListItem = () => {
  const { handleGetProductsByFilter } = useGetProductsContext()

  return (
    <List>
      <li onClick={() => handleGetProductsByFilter(FilterPriorityTypes.NEWS)}>Novidades</li>
      <li onClick={() => handleGetProductsByFilter(FilterPriorityTypes.PRICE)}>Preço: Maior - menor</li>
      <li onClick={() => handleGetProductsByFilter(FilterPriorityTypes.PRICE_DESC)}>Preço: Menor - maior</li>
      <li onClick={() => handleGetProductsByFilter(FilterPriorityTypes.POPULARITY)}>Mais Vendidos</li>
    </List>
  )
}
