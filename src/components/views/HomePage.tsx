import React from 'react'
import { ProductsList } from '../organisms/ProductsList'
import { FilterBar } from '../organisms/FilterBar'
import { Pagination } from '../molecules/Pagination'

export const HomePage = () => {
  return (
    <>
      <FilterBar />
      <Pagination />
      <ProductsList />
    </>
  )
}
