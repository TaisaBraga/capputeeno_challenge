import { useGetProductsListContext } from '@/context/GetProductsListContext'
import React from 'react'
import { CardContent } from '../molecules/CardContent'

export const ProductsList = () => {
  const { GetAllProducts } = useGetProductsListContext()

  return (
    <div>
      {GetAllProducts?.allProducts?.map((item) => (
        <div key={item.id}>
          <CardContent imageUrl={item.image_url} name={item.name} price={item.price_in_cents} />
        </div>
      ))}
    </div>
  )
}
