"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { ProductsList } from '@/components/organisms/ProductsList'
import ProductDetails from '@/components/molecules/ProductDetails'




export default function Home() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <ProductsList />
          {/* <ProductDetails /> */}
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
