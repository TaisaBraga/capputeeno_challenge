import React, { useEffect } from 'react'
import { SpanButton } from '../atoms/SpanButton'
import { useRouter, useSearchParams } from 'next/navigation'
import BackArrow from '../../../public/backArrow.png'
import styled from 'styled-components'
import { ShopCardContent } from '../molecules/ShopCardContent'
import { useGetProductsContext } from '@/context/useGetProductsContext'

const DetailsPage = styled.div`
 
`

export const ShoppingInfo = () => {
  const { GetProductDetail, getProductDetail } = useGetProductsContext()
  const { get } = useSearchParams()
  const productId = get('ProductDetail')
  const router = useRouter()

  useEffect(() => {
    getProductDetail(productId || '')
  }, [])

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
        <p>Total {`${1} produtos ${1}`}</p>
      </div>
      <ShopCardContent
        imageUrl={GetProductDetail?.Product?.name || ''}
        imageAtl={GetProductDetail?.Product?.name || ''}
        productName={GetProductDetail?.Product?.name}
        productDescription={GetProductDetail?.Product?.description}
        totalValue={0}
      />
    </>
  )
}
