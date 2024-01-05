import React from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingInfo } from '../organisms/ShoppingInfo'

export const ShopPage = () => {
  const router = useRouter()

  return (
    <>
      <ShoppingInfo />
    </>
  )
}
