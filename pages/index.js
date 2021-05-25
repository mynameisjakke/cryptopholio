import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cryptopholio</title>
      </Head>
      <Navbar />
    </Layout>
  )
}
