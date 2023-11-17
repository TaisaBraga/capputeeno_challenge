import Image from 'next/image'
import React from 'react'
import DownArrow from '../../../public/DownArrow.png'
import { styled, css } from 'styled-components'
import { ListItem } from '../atoms/ListItem'
import { useGetProductsContext } from '@/context/useGetProductsContext'
import { FilterPriorityTypes } from '@/types/FilterTypes'

const FilterContainer = styled.div`
  height: 50px;
  position: relative;
`
const FilterTitle = styled.div`
  color: #5D5D6D;
  cursor: pointer;
  & img {
    margin-left: 0.5em;
  }
  
`
const Filters = styled.div<{ isDisabled: boolean }>`
  ${({ isDisabled }) => (isDisabled ? css`display: block-flow` : css`display: none`)};
`;

export const FilterByOrder: React.FC<{ isDisabled: boolean }> = ({ isDisabled }) => {
  const { isListVisible, setListVisible, isFilter, } = useGetProductsContext()

  const handleOpenDrawer = () => {
    setListVisible(!isListVisible)
  }

  return (
    <FilterContainer>
      {isFilter === FilterPriorityTypes.NEWS ?
        <FilterTitle>
          Novidades
          <Image src={DownArrow} alt='DownArrow' onClick={handleOpenDrawer} />
        </FilterTitle>
        : isFilter === FilterPriorityTypes.POPULARITY ?
          <FilterTitle >
            Mais Vendidos
            <Image src={DownArrow} alt='DownArrow' onClick={handleOpenDrawer} />
          </FilterTitle>
          : isFilter === FilterPriorityTypes.PRICE ?
            <FilterTitle>
              Maior Preço
              <Image src={DownArrow} alt='DownArrow' onClick={handleOpenDrawer} />
            </FilterTitle>
            : isFilter === FilterPriorityTypes.PRICE_DESC ?
              <FilterTitle >
                Menor Preço
                <Image src={DownArrow} alt='DownArrow' onClick={handleOpenDrawer} />
              </FilterTitle> :
              <FilterTitle onClick={handleOpenDrawer} >
                Organizar por
                <Image src={DownArrow} alt='DownArrow' />
              </FilterTitle>
      }

      <Filters isDisabled={isDisabled}>
        <ListItem />
      </Filters>
    </FilterContainer>
  )
}
