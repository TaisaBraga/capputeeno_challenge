import React from 'react'
import { FilterProducts } from '../molecules/FilterProducts'
import { FilterByOrder } from '../molecules/FilterByOrder'
import { styled } from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`

export const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterProducts />
      <FilterByOrder />
    </FilterContainer>
  )
}
