"use client"
import { GetProductsListProvider } from '@/context/GetProductsListContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'



export default function Home() {
  return (
    <ApolloProvider client={client}>
      <GetProductsListProvider>
        <main className={styles.main}>
        </main>
      </GetProductsListProvider>
    </ApolloProvider>
  )
}
