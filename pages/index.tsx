import type { InferGetServerSidePropsType, NextPage } from 'next'

import Counter from '../components/Counter'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'
import { remainingDaysUntilMendoza } from '../utils'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      remainingDays: remainingDaysUntilMendoza(),
    },
  }
}

const Home: NextPage = ({
  remainingDays,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mendoza 2025</title>
        <meta name="description" content="Mendoza 2025 - Despedida Agus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter remainingDays={remainingDays} />
      </main>
    </div>
  )
}

export default Home
