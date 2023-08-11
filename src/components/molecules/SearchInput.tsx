import React from 'react'
import Image from 'next/image'
import shoppingBag from '../../../public/shopping-bag.png'
import searchLoupe from '../../../public/searchLoupe.png'
import { useGetProductsContext } from '@/context/useGetProductsContext'

interface inputProps {
  value: string,
  onchange: () => {}
}

export const SearchInput = (props: inputProps) => {
  return (
    <>
      {/* <input type="text"
        placeholder='Procurando por algo específico?'
        onChange={onchange}
        {...props}
      />
      <Image src={searchLoupe}
        alt='search-loupe-icon'
        style={{ cursor: 'pointer' }}
      />
      <Image src={shoppingBag}
        alt='shopping-bag-icon'
        style={{ marginLeft: '25px', cursor: 'pointer' }}
      /> */}
    </>
  )
}
