import Link from 'next/link'
import HomePageHeader from '@/comp/C01HomePageHeader'
import SongPageHeader from '@/comp/C01SongPageHeader'
import Footer from '@/comp/C09Footer'

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

      {!home && (
        <Link href="/">
          <p className="py-6 text-center text-gray-500">← Back to home</p>
        </Link>
      )}
      <Footer />
    </>
  )
}

export default Layout
