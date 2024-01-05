"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { ShopPage } from '@/components/views/ShopPage'

export default function ShoppingPage() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <ShopPage />
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
