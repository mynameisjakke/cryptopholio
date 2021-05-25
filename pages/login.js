import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Login(params) {
  return (
    <Layout>
      <Head>
        <title>Cryptopholio - Logga in</title>
      </Head>
      <div className="login">
        <div className="login-inner">
          <div className="login-logo logo">
            <h1>Cryptopholio</h1>
          </div>
          <div className="login-form">
            <h3>Logga in</h3>
            <form>
              <div className="form-control">
                <input type="text" placeholder="Användarnamn" />
              </div>
              <div className="form-control">
                <input type="password" placeholder="Lösenord" />
              </div>
              <div className="form-control">
                <button type="submit">Logga in</button>
              </div>
              <Link href="/">
                <a>Glömt lösenordet?</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
};
