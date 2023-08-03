import React from 'react'
import { ProductsList } from '../organisms/ProductsList'
import { FilterBar } from '../organisms/FilterBar'

export const HomePage = () => {
  return (
    <>
      <FilterBar />
      <ProductsList />
    </>
  )
}
