import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

export interface ICardImage {
  imageUrl: string | '',
  name: string | ''
}

export const CardImage = (props: ICardImage) => {
  return (
    <>
      <Image
        src={props?.imageUrl}
        alt={props?.name}
        layout='responsive'
        width={0}
        height={0}
        style={{ borderRadius: '8px 8px 0px 0px' }}
      />
    </>
  )
}
