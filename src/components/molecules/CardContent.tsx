import React from 'react'
import { CardImage } from '../atoms/CardImage'
import { styled } from 'styled-components'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useGetProductsContext } from '@/context/useGetProductsContext'

export interface ICardContent {
  imageUrl: string | '',
  name: string | '',
  price: string | '',
  id: string | '',
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get(props?.id)
  const { setIsProductId, isProductId } = useGetProductsContext()

  const handleNavigate = () => {
    setIsProductId(productId || '')
    console.log('AQUIII', isProductId)
    router.push(`/ProductDetail/${isProductId}`)
  }

  return (
    <CardDiv onClick={handleNavigate} id={props?.id}>
      <CardImage imageUrl={props?.imageUrl} name={props?.name} />
      <p>{props?.name}</p>
      <Divider></Divider>
      <p style={{ fontWeight: 'bold' }}>{props?.price}</p>
    </CardDiv>
  )
}
