import React from 'react'
import Image from 'next/image'
import shoppingBag from '../../../public/shopping-bag.png'
import searchLoupe from '../../../public/searchLoupe.png'
import styled from 'styled-components'

interface inputProps {
  inputValue?: string,
  inputChange: any
}

const SearchBar = styled.div`
  align-items: center;
  display: flex;
  input {
 background-color: #F3F5F6;
 box-shadow: none;
}
`

export const SearchInput = ({ inputChange, inputValue }: inputProps) => {
  return (
    <SearchBar>
      <input type="text"
        placeholder='Procurando por algo específico?'
        onChange={inputChange}
        value={inputValue}
      />
      <Image src={searchLoupe}
        alt='search-loupe-icon'
        style={{ cursor: 'pointer' }}
      />
      <Image src={shoppingBag}
        alt='shopping-bag-icon'
        style={{ marginLeft: '25px', cursor: 'pointer' }}
      />
    </SearchBar>
  )
}
