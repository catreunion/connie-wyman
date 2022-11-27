import Link from 'next/link'
import HomePageHeader from '@/comp/HomePageHeader'
import SongPageHeader from '@/comp/SongPageHeader'
import Footer from '@/comp/Footer'

const Layout = ({ children, home }) => {
  return (
    <>
      <header>
        {home ? (
          <>
            <HomePageHeader />
          </>
        ) : (
          <Link href="/">
            <SongPageHeader />
          </Link>
        )}
      </header>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
