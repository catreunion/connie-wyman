import Link from 'next/link'

const Layout = ({ children, home }) => {
  return (
    <>
      <header>
        {home ? (
          <>
            <img src="/img/profile.jpg" />
          </>
        ) : (
          <>
            <Link href="/">
              <img src="/img/profile.jpg" />
            </Link>
          </>
        )}
      </header>

      <main>{children}</main>

      <footer>{!home && <Link href="/">← Back to home</Link>}</footer>
    </>
  )
}

export default Layout
