import { useGetProductsContext } from '@/context/useGetProductsContext'
import React from 'react'

interface IDetailsInfo {
  category: string | undefined,
  name: string | undefined,
  price_in_cents: number | undefined,
  description: string | undefined,
}

export const DetailsInfo = ({
  category,
  name,
  price_in_cents,
  description }: IDetailsInfo) => {
  const { formatMonetaryValue } = useGetProductsContext()
  return (
    <div>
      <p style={{ fontSize: '1em', color: "color: #41414D" }}>
        {category}
      </p>
      <p style={{ fontSize: '2em', color: "color: #41414D" }}>
        {name}
      </p>
      <p style={{ fontSize: '1.25em', fontWeight: "bold", color: "color: #41414D" }}>
        {formatMonetaryValue(price_in_cents || '')}
      </p>
      <p style={{ fontSize: '0.75em', fontWeight: "light", color: "color: #57575c", paddingTop: '1em', paddingBottom: '4em' }}>
        *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
      </p>

      <p style={{ color: "color: #41414D", paddingBottom: '0.75em' }}>Descrição</p>
      <p style={{ color: "color: #41414D", textAlign: 'justify' }}>
        {description}
      </p>
    </div>
  )
}
