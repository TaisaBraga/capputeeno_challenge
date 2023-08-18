import Image from 'next/image'
import React, { useState } from 'react'
import DownArrow from '../../../public/DownArrow.png'
import { styled, css } from 'styled-components'
import { ListItem } from '../atoms/ListItem'

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

const Filters = styled.button`
  ${({ disabled }) => (disabled ? css`display: block-flow` : css`display: none`)};
`

export const FilterByOrder = () => {
  const [isListVisible, setListVisible] = useState<boolean>(false)

  const handleOpen = () => {
    setListVisible(!isListVisible)
  }

  return (
    <FilterContainer>
      <FilterTitle onClick={handleOpen}>
        Organizar por
        <Image src={DownArrow} alt='DownArrow' />
      </FilterTitle>
      <Filters disabled={isListVisible}>
        <ListItem />
      </Filters>
    </FilterContainer>
  )
}
