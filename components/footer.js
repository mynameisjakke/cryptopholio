import Link from 'next/link'

export default function Footer(params) {
  return (
    <div className="footer">
      <div className="footer-inner">
        <p>
          Created cuz I’m lazy - 
          <Link href="https://twitter.com/mynameisjakke">
            <a> @mynameisjakke</a>
          </Link>
          </p>
      </div>
    </div>
  )
};
