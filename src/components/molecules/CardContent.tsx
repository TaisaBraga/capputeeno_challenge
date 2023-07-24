import React from 'react'
import { CardImage } from '../atoms/CardImage'
import { useGetProductsListContext } from '@/context/GetProductsListContext'
import { styled } from 'styled-components'

export interface ICardContent {
  imageUrl: string | '',
  name: string | '',
  price: string | ''
}

const CardContentDiv = styled.div`
  width: 256px,
  height: 378px,
  top: 224px,
  left: 1024px,
  border-radius: 8px, 8px, 0px, 0px
`

const CardNameProduct = styled.p`
  color: #41414D,
  font-size: 16px
`

export const CardContent = (props: ICardContent) => {

  return (
    <CardContentDiv>
      <CardImage imageUrl={props?.imageUrl} name={props?.name} />
      <p>{props?.name}</p>
      <p>{props?.price}</p>
    </CardContentDiv>
  )
}
