import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface ISpanButton {
  handleFunction: () => void,
  srcImage: StaticImageData,
  altImage: string,
  textSpan: string,
}

const BackDiv = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1em;
  & span {
    margin-left: 0.3em;
  }
`

export const SpanButton = ({
  handleFunction,
  srcImage,
  altImage,
  textSpan, }: ISpanButton) => {

  return (
    <BackDiv onClick={() => handleFunction()}>
      <Image src={srcImage} alt={altImage} />
      <span>{textSpan}</span>
    </BackDiv>
  )
}
