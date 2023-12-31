"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { DetailsPage } from '@/components/views/DetailsPage'

export default function ProductDetail() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <DetailsPage />
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
