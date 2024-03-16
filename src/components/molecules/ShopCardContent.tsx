import Image from 'next/image'
import React from 'react'
import litterIcon from '../../../public/litterIcon.png'
import styled from 'styled-components'
import { IProduct } from '@/hook/useGetProductsDetails'
import { IGetProducts } from '@/hook/useGetAllProductsList'

interface IShopCardContent {
  product: IProduct
}

const ShopCard = styled.div`
 background-color: white;
 border-radius: 8px;
`

export const ShopCardContent = ({ product }: IShopCardContent) => {
  if (!product) {

    return null; // ou qualquer outro comportamento desejado quando product não estiver disponível
  }
  console.log('!!!!', product)
  return (
    <ShopCard>
      <Image
        src={product?.image_url}
        alt={product?.name}
        width={100}
        height={100}
      />
      <div>
        <p>{product?.name}</p>
        <Image src={litterIcon} alt='litter Icon' />
      </div>
      <p>{product?.description}</p>
      <div>
        <p>{ }</p>
        <p>lalala</p>
      </div>
    </ShopCard>
  )
}
