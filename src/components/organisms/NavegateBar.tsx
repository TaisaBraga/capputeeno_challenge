"use client"

import React, { useState } from 'react'
import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import { useGetProductsContext } from '@/context/useGetProductsContext';
import ShopBag from '../../../public/shop-bag.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@/context/useLocalStorage';

const fontTitle = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
});

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  height: 80px;
  padding: 20px;
  width: 100%;
  h1 {
    color: #5D5D6D
  }
`;

const NavegateMenu = styled.div`
input {
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 3px #B5B5B5;
  height: 35px;
  padding: 10px;
  outline: 0;
  width: 352px;
}
`

const CartCounter = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: red;
    color: white;

    margin-left: -10px;
`

export const NavegateBar = () => {
  const router = useRouter()
  const { value } = useLocalStorage('cart-items', [])
  // const [isSearchFilter, setIsSearchFilter] = useState<string>('')
  // const [searchResults, setSearchResults] = useState([]);
  // const { GetAllProducts } = useGetProductsContext()

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsSearchFilter(event.target.value)
  // }
  // console.log(isSearchFilter)


  return (
    <Header>
      <div>
        <h1
          className={fontTitle.className}
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >capputeeno</h1>
      </div>
      <NavegateMenu>
        {/* <SearchInput inputValue={isSearchFilter} inputChange={handleInputChange} /> */}

        <div>
          <Image
            src={ShopBag}
            alt='Shop-Bag-Icon'
            onClick={() => router.push('/ShoppingPage')}
            style={{ cursor: 'pointer' }}
          />
          {value.length > 0 && <CartCounter>{value.length}</CartCounter>}
        </div>
      </NavegateMenu>
    </Header>
  )
}
