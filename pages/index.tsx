import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>KOREA CARS</title>
        <meta name="description" content="KOREA CARS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <span className="icon-car"/>
      </main>
    </>
  )
}
