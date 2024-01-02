import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from 'next';
import Head from 'next/head';

import Counter from '../components/Counter';
import styles from '../styles/Home.module.css';
import { remainingDaysTillBali2024 } from '../utils';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      remainingDays: remainingDaysTillBali2024(),
    },
  };
};

const Home: NextPage = ({
  remainingDays,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bali 2024</title>
        <meta name="description" content="Bali 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter remainingDays={remainingDays} />
      </main>
    </div>
  );
};

export default Home;
