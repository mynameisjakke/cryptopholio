import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(params) {
  return (
    <div className="nav-bar">
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <Link href="/">
              <a>Cryptopholio</a>
            </Link>
          </div>
          <div className="nav-center">
            <ul className="nav-list">
              <li className="nav-link">
                <Link href="#">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#">
                  <a>Valutor</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#">
                  <a>Nyheter</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-search">
              <form>
                <input className="form-control" type="text" placeholder="Sök efter valuta..." />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"/>
                  </svg>
                </button>
              </form>
            </div>
            <div className="nav-avatar">
              <div className="avatar-demo">Avatar</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};
