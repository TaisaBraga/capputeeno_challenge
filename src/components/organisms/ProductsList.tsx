import { useGetProductsContext } from '@/context/useGetProductsContext'
import React from 'react'
import { CardContent } from '../molecules/CardContent'
import styled from 'styled-components'

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const CardContentDiv = styled.div`
  background-color: #fff;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  max-height: 378px;
  max-width: 256px;
  
`


export const ProductsList = () => {
  const { GetAllProducts, formatMonetaryValue, isReversedList } = useGetProductsContext()

  return (
    <>
      {isReversedList ? (
        <CardDiv>
          {GetAllProducts?.allProducts?.map((item, index) => (
            <CardContentDiv key={index}>
              <CardContent imageUrl={item?.image_url} name={item?.name} price={formatMonetaryValue(item?.price_in_cents)} />
            </CardContentDiv>
          )).reverse()}
        </CardDiv>
      ) : (
        <CardDiv>
          {GetAllProducts?.allProducts?.map((item, index) => (
            <CardContentDiv key={index}>
              <CardContent imageUrl={item?.image_url} name={item?.name} price={formatMonetaryValue(item?.price_in_cents)} />
            </CardContentDiv>
          ))}
        </CardDiv>
      )}
    </>

  )
}
