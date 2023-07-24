import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

export interface ICardImage {
  imageUrl: string | '',
  name: string | ''
}

const DivCard = styled.div`
height: 300px,
width: 256px,
`

export const CardImage = (props: ICardImage) => {
  return (
    <DivCard>
      <Image
        src={props?.imageUrl}
        alt={props?.name}
        layout='responsive'
        width={50}
        height={50}
      />
    </DivCard>
  )
}
