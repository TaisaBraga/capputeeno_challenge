"use client"
import { GetProductsListProvider } from '@/context/GetProductsListContext'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { CardContent } from '@/components/molecules/CardContent'




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
