import React, { useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useGetProductsContext } from '@/context/useGetProductsContext'
import ShopBag from '../../../public/shop-bag.png'
import BackArrow from '../../../public/backArrow.png'
import { useRouter, useSearchParams } from 'next/navigation'


const BackDiv = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1em;
  & span {
    margin-left: 0.3em;
  }
`

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
  const { GetProductDetail, formatMonetaryValue, getProductDetail } = useGetProductsContext()
  const router = useRouter()
  const { get } = useSearchParams()
  const productId = get('ProductDetail')

  useEffect(() => {
    getProductDetail(productId || '')
  }, [])

  return (
    <>
      <BackDiv onClick={() => router.back()}>
        <Image src={BackArrow} alt='back-arrow-icon' />
        <span>Voltar</span>
      </BackDiv>
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
            <div>
              <p style={{ fontSize: '1em', color: "color: #41414D" }}>
                {GetProductDetail?.Product?.category}
              </p>
              <p style={{ fontSize: '2em', color: "color: #41414D" }}>
                {GetProductDetail?.Product?.name}
              </p>
              <p style={{ fontSize: '1.25em', fontWeight: "bold", color: "color: #41414D" }}>
                {formatMonetaryValue(GetProductDetail?.Product?.price_in_cents || '')}
              </p>
              <p style={{ fontSize: '0.75em', fontWeight: "light", color: "color: #57575c", paddingTop: '1em', paddingBottom: '4em' }}>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
              </p>
            </div>
            <div>
              <p style={{ color: "color: #41414D", paddingBottom: '0.75em' }}>Descrição</p>
              <p style={{ color: "color: #41414D", textAlign: 'justify' }}>
                {GetProductDetail?.Product?.description}
              </p>
            </div>

            <ButtonAdd>
              <Image src={ShopBag} alt='shopping-bag-icon' />
              <p>Adicionar ao carrinho</p>
            </ButtonAdd>
          </TextDiv>

        </DetailsCard>

      </DetailsPage>
    </>
  )
}

export default ProductDetails