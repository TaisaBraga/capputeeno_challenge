import Image from 'next/image'
import React from 'react'
import LitterIcon from '../../../public/litterIcon.png'
import styled from 'styled-components'

interface IShopCardContent {
  imageUrl: string,
  imageAtl: string,
  productName?: string,
  productDescription?: string,
  totalValue?: number
}

const ShopCard = styled.div`
 background-color: white;
 border-radius: 8px;
`

export const ShopCardContent = ({
  imageUrl,
  imageAtl,
  productName,
  productDescription,
  totalValue }: IShopCardContent) => {
  return (
    <ShopCard>
      <Image src={imageUrl} alt={imageAtl} />
      <div>
        <p>{productName}</p>
        <Image src={LitterIcon} alt='litter Icon' />
      </div>
      <p>{productDescription}</p>
      <div>
        <p>{ }</p>
        <p>{totalValue}</p>
      </div>
    </ShopCard>
  )
}
