import Link from 'next/link'
import HomeHeader from '@/comp/HomeHeader'
import SongPageHeader from '@/comp/SongPageHeader'
import Footer from '@/comp/Footer'

const Layout = ({ children, home }) => {
  return (
    <>
      <header>
        {home ? (
          <>
            <HomeHeader />
          </>
        ) : (
          <>
            <Link href="/">
              <SongPageHeader />
            </Link>
          </>
        )}
      </header>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
