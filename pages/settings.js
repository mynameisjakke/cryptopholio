import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Title from '../components/title'
import SettingsComp from '../components/settingsComp'


export default function Settings(params) {
  return (
    <Layout>
      <Head>
        <title>Cryptopholio - Settings</title>
      </Head>
      <Navbar />
      <Title />
      <SettingsComp />
      <Footer />
    </Layout>
  )
};
