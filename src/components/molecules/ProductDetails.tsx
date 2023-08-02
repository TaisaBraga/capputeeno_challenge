import React from 'react'
import { CardImage } from '../atoms/CardImage'
import { useGetProductsContext } from '@/context/useGetProductsContext'

const ProductDetails = () => {
  const { GetProductDetail, formatMonetaryValue } = useGetProductsContext()
  return (
    <div>
      {GetProductDetail ? (
        <>
          <CardImage imageUrl={GetProductDetail?.Product.image_url} name={GetProductDetail?.Product.name} />
          <p>{GetProductDetail?.Product?.category}</p>
          <p>{GetProductDetail?.Product?.name}</p>
          <p>{formatMonetaryValue(GetProductDetail?.Product?.price_in_cents)}</p>
          <p>{GetProductDetail?.Product?.description}</p>
        </>
      ) : (
        null
      )}


    </div>
  )
}

export default ProductDetails