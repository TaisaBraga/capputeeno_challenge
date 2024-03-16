import React, { useEffect } from 'react'
import { SpanButton } from '../atoms/SpanButton'
import { useRouter, useSearchParams } from 'next/navigation'
import BackArrow from '../../../public/backArrow.png'
import styled from 'styled-components'
import { ShopCardContent } from '../molecules/ShopCardContent'
import { useGetProductsContext } from '@/context/useGetProductsContext'
import { useLocalStorage } from '@/context/useLocalStorage'
import { IProduct } from '@/hook/useGetProductsDetails'

const DetailsPage = styled.div`
 
`

export const ShoppingInfo = () => {
  const { value } = useLocalStorage<IProduct[]>('cart-items', [])
  const router = useRouter()

  // value?.map(item => console.log(item))


  return (
    <>
      <SpanButton
        handleFunction={() => router.back()}
        srcImage={BackArrow}
        altImage={'back-arrow-button'}
        textSpan={'Voltar'}
      />
      <div>
        <p>Seu Carrinho</p>
        <p>{value?.length === 1 ? (
          `Total (${value?.length} produto)  R$ 1,00`
        ) : (
          `Total (${value?.length} produtos)  R$ 1,00`
        )}</p>
      </div>
      <>
        {/*o componente abaixo está retornando como undefined*/}
        {value.length && value.map((item, index) => (
          <ShopCardContent
            key={index}
            product={item}
          />
        ))}

      </>

    </>
  )
}
