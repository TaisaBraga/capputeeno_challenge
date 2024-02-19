import React, { useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useGetProductsContext } from '@/context/useGetProductsContext'
import ShopBag from '../../../public/shopping-bag.png'
import { useRouter, useSearchParams } from 'next/navigation'
import { DetailsInfo } from './DetailsInfo'
import { SpanButton } from '../atoms/SpanButton'
import BackArrow from '../../../public/backArrow.png'


const DetailsPage = styled.div`
  align-items: center;
  display: flex; 
  flex-direction: column;
  justify-content: center;
`

const DetailsCard = styled.div`
  @media (min-width: 821px) {
    display: flex;
    flex-direction: row;
    justify-content: center;  
  }
  @media (max-width: 820px) {
    background-color: blue;
    display: block;
    justify-content: center;  
  }
  
`

const ImageDiv = styled.div`
  border-radius: 5px;
  padding: 1em;
  height: 36.25;
  width: 40em;
`

const TextDiv = styled.div`
  padding: 2.5em;
  max-width: 600px;

`

const ButtonAdd = styled.button`
  align-items: center;
  background-color: #115D8C;
  border: none;
  border-radius: 5px;
  color: #F5F5FA;
  cursor: pointer;
  display: flex;
  font-size: 1em;
  height: 2.75em;
  justify-content: center;
  letter-spacing: 0.8px;
  padding: 0.4em;
  margin-top: 8em;
  width: 28em;
  font-family: inherit;
  
  & p {
    margin-left: 0.5em;
  }

`

const ProductDetails = () => {
  const { GetProductDetail, getProductDetail } = useGetProductsContext()
  const router = useRouter()
  const { get } = useSearchParams()
  const productId = get('ProductDetail')

  useEffect(() => {
    getProductDetail(productId || '')
  }, [])

  const handleGetProduct = () => {

  }

  return (
    <>
      <SpanButton
        handleFunction={() => router.back()}
        srcImage={BackArrow}
        altImage={'back-arrow-button'}
        textSpan={'Voltar'}
      />
      <DetailsPage>
        <DetailsCard>
          <ImageDiv>
            <Image
              src={GetProductDetail?.Product?.image_url || ''}
              alt={GetProductDetail?.Product?.name || ''}
              layout='responsive'
              width={0}
              height={0}
              style={{ borderRadius: '4px' }}
            />
          </ImageDiv>
          <TextDiv>
            <DetailsInfo
              category={GetProductDetail?.Product?.category}
              name={GetProductDetail?.Product?.name}
              price_in_cents={GetProductDetail?.Product?.price_in_cents}
              description={GetProductDetail?.Product?.description}
            />
            <ButtonAdd>
              <SpanButton
                handleFunction={() => handleGetProduct()}
                srcImage={ShopBag}
                altImage={'shopping-bag-icon'}
                textSpan={'Adicionar ao carrinho'}
              />
            </ButtonAdd>
          </TextDiv>
        </DetailsCard>
      </DetailsPage>
    </>
  )
}

export default ProductDetails