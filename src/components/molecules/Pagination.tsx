import Image from 'next/image'
import React from 'react'
import RightArrow from '../../../public/RightArrow.png'
import LeftArrow from '../../../public/LeftArrow.png'
import { css, styled } from 'styled-components'
import { useGetProductsContext } from '@/context/useGetProductsContext'

const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5em;
`

const RightArrowDiv = styled.button`
  align-items: center;
  background-color: #E9E9F0;
  border-radius: 0.3em;
  box-shadow: 3px 3px 10px -7px rgba(102,94,102,1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 2em;
  margin: 0.3em;
  width: 2em;
`

const LeftArrowDiv = styled.button`
  align-items: center;
  background-color: #E9E9F0;
  border-radius: 0.3em;
  border: 0.8px solid rgba(102,94,102,1);;
  box-shadow: 3px 3px 10px -7px rgba(102,94,102,1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 2em;
  margin: 0.3em;
  width: 2em;
`

export const Pagination = () => {
  const {
    handlePreviousPage,
    handleNextPageClick,
    isPrevPageDisable,
    isNextPageDisable
  } = useGetProductsContext();

  return (
    <PaginationDiv>
      <RightArrowDiv onClick={handlePreviousPage} disabled={isPrevPageDisable}>
        <Image src={RightArrow} alt='Right Arrow' />
      </RightArrowDiv>
      <LeftArrowDiv onClick={handleNextPageClick} disabled={isNextPageDisable}>
        <Image src={LeftArrow} alt='Left Arrow' />
      </LeftArrowDiv>
    </PaginationDiv >
  )
}
