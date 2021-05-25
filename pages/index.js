import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Card from '../components/card'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cryptopholio</title>
      </Head>
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Footer />
    </Layout>
  )
}
