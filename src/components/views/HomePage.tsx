import React from 'react'
import { ProductsList } from '../organisms/ProductsList'
import { FilterBar } from '../organisms/FilterBar'
import { FilterProducts } from '../molecules/FilterProducts'

export const HomePage = () => {
  return (
    <>
      <FilterProducts />
      <FilterBar />
      <ProductsList />
    </>
  )
}
