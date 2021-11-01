/* eslint-disable @next/next/no-img-element */
import  { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';
import Head from 'next/head';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}
export default function Home({product}: HomeProps) {
  return (
  <>
    <Head>
      <title>Inicio | ig.news</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
         <span> 👏 Hey, welcome</span>
         <h1>News about the <span>React</span> world.</h1>
         <p>Get access to all the publications <br />
          <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
      </section>
      <img  src="/images/avatar.svg" alt="girl-coding" />
    </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JpPjFE01f5CuOEr051yPaXi')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return{
    props:{
      product,
    },
    revalidate: 60 * 60 * 24, 
  }
}