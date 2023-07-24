"use client"

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Saira_Stencil_One } from 'next/font/google'
import shoppingBag from '../../../../public/shopping-bag.png'

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

export const NavegateBar = () => {
  return (
    <Header>
      <div>
        <h1 className={fontTitle.className}>capputeeno</h1>
      </div>
      <NavegateMenu>
        <input type="text" placeholder='Procurando por algo específico?' />
        <Image src={shoppingBag} alt='shopping-bag-icon' style={{ marginLeft: '25px', cursor: 'pointer' }} />
      </NavegateMenu>
    </Header>
  )
}