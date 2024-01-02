"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import ProductDetails from '@/components/organisms/ProductDetails'

export default function ProductDetail() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <ProductDetails />
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
