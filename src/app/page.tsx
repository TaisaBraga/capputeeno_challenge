"use client"
import { GetProductsProvider } from '@/context/useGetProductsContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { HomePage } from '@/components/views/HomePage'

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <GetProductsProvider>
        <main className={styles.main}>
          <HomePage />
        </main>
      </GetProductsProvider>
    </ApolloProvider>
  )
}
