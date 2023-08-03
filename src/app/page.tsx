"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import ProductDetails from '@/components/molecules/ProductDetails'
import { HomePage } from '@/components/views/HomePage'




export default function Home() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <HomePage />
          {/* <ProductDetails /> */}
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
