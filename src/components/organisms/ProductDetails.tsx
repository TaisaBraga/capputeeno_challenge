import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useGetProductsContext } from '@/context/useGetProductsContext'
import Group from '../../../public/Group.png'
import Link from 'next/link'


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
  font-size: 1em;
  letter-spacing: 0.8px;
  padding: 0.4em;
  width: 30em;
  font-family: inherit;

`

const ProductDetails = () => {
  const { GetProductDetail, formatMonetaryValue } = useGetProductsContext()
  return (
    <div>
      <Link href="/">Voltar</Link>
      <DetailsPage>
        {GetProductDetail ? (
          <>
            <DetailsCard>
              <ImageDiv>
                <Image
                  src={GetProductDetail?.Product?.image_url}
                  alt={GetProductDetail?.Product?.name}
                  layout='responsive'
                  width={0}
                  height={0}
                  style={{ borderRadius: '4px' }}
                />
              </ImageDiv>
              <TextDiv>
                <div>
                  <p style={{ color: "color: #41414D" }}>{GetProductDetail?.Product?.category}</p>
                  <p style={{ fontSize: '2em', color: "color: #41414D" }}>{GetProductDetail?.Product?.name}</p>
                  <p style={{ fontWeight: "bold", color: "color: #41414D" }}>{formatMonetaryValue(GetProductDetail?.Product?.price_in_cents)}</p>
                </div>
                <div>
                  <p style={{ color: "color: #41414D" }}>Descrição</p>
                  <p style={{ color: "color: #41414D", textAlign: 'justify' }}>{GetProductDetail?.Product?.description}</p>
                </div>

                <ButtonAdd>
                  <Image src={Group} alt='shopping-bag-icon' />
                  Adicionar ao carrinho
                </ButtonAdd>
              </TextDiv>

            </DetailsCard>

          </>
        ) : (
          null
        )}
      </DetailsPage>
    </div>
  )
}

export default ProductDetails