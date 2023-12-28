import Image from 'next/image'
import React from 'react'
import DownArrow from '../../../public/DownArrow.png'
import { styled } from 'styled-components'
import { ListItem } from '../atoms/ListItem'
import { useGetProductsContext } from '@/context/useGetProductsContext'

const FilterContainer = styled.div`
  height: 50px;
  position: relative;
`
const FilterTitle = styled.div`
  color: #5f5f6b;
  cursor: pointer;
  & img {
    margin-left: 0.5em;
  }
`

const ContainerFilter = styled.div`
  display: 'block-flow';
`;


export const FilterByOrder = () => {
  const { isListVisible, setListVisible } = useGetProductsContext()

  const handleOpenDrawer = () => {
    setListVisible(!isListVisible)
  }

  return (
    <FilterContainer>
      <FilterTitle onClick={handleOpenDrawer}>
        Organizar por
        <Image src={DownArrow} alt='DownArrow' />
      </FilterTitle>
      {isListVisible ?
        (
          <ContainerFilter>
            <ListItem />
          </ContainerFilter>
        )
        : null
      }
    </FilterContainer>
  )
}
