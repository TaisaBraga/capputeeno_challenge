import React from 'react'
import { FilterProducts } from '../molecules/FilterProducts'
import { FilterByOrder } from '../molecules/FilterByOrder'
import { styled } from 'styled-components'
import { useGetProductsContext } from '@/context/useGetProductsContext'

const FilterContainer = styled.div`
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin: 0 5em 0 5em;

`

export const FilterBar = () => {

  return (
    <FilterContainer>
      <FilterProducts />
      <FilterByOrder />
    </FilterContainer>
  )
}
