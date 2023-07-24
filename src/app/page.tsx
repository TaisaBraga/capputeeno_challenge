import { GetProductsListProvider } from '@/context/GetProductsListContext'
import styles from './page.module.css'

export default function Home() {
  return (
    <GetProductsListProvider>
      <main className={styles.main}>
      </main>
    </GetProductsListProvider>
  )
}
