import React from 'react'
import { CardImage } from '../atoms/CardImage'
import { useGetProductsListContext } from '@/context/GetProductsListContext'
import { styled } from 'styled-components'

export interface ICardContent {
  imageUrl: string | '',
  name: string | '',
  price: string | ''
}

const CardDiv = styled.div`

& p {
  text-indent: 5%
}

`

const CardNameProduct = styled.p`
  color: #41414D,
  font-size: 16px,
`
const Divider = styled.div`
  background-color: #DCE2E5;
  margin: 10px;
  padding: 0.8px
`

export const CardContent = (props: ICardContent) => {

  return (
    <CardDiv>
      <CardImage imageUrl={props?.imageUrl} name={props?.name} />
      <p>{props?.name}</p>
      <Divider></Divider>
      <p style={{ fontWeight: 'bold' }}>{props?.price}</p>
    </CardDiv>
  )
}
