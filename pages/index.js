import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Card from '../components/card'
import Title from '../components/title'
import CoinList from '../components/coinList'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cryptopholio</title>
      </Head>
      <Navbar />
      <Title />
      <Card />
      <Card />
      <Card />
      <CoinList />
      <Footer />
    </Layout>
  )
}
