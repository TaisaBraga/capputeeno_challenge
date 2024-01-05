import React from 'react'
import { CardImage } from '../atoms/CardImage'
import { styled } from 'styled-components'
import { useRouter, useSearchParams } from 'next/navigation'
import { useGetProductsContext } from '@/context/useGetProductsContext'

export interface ICardContent {
  imageUrl: string | '',
  name: string | '',
  price: string | '',
  id: string | '',
  handleNavigate: () => void
}

const CardDiv = styled.div`
  cursor: pointer;
& p {
  text-indent: 5%
}
`
const Divider = styled.div`
  background-color: #DCE2E5;
  margin: 10px;
  padding: 0.8px;
`

export const CardContent = (props: ICardContent) => {

  return (
    <CardDiv onClick={() => props.handleNavigate()} id={props?.id}>
      <CardImage imageUrl={props?.imageUrl} name={props?.name} />
      <p>{props?.name}</p>
      <Divider></Divider>
      <p style={{ fontWeight: 'bold' }}>{props?.price}</p>
    </CardDiv>
  )
}
