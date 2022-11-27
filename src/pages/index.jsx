import Head from 'next/head'
import { getSortedSongs } from '@/engine'
import { homePageTitle, homePageDesc } from '@/items/wording'
import Layout from '@/comp/C00Layout'
import SongsToDisplay from '@/comp/C02SongsToDisplay'

export const getStaticProps = async () => {
  const songs = getSortedSongs()
  return {
    props: {
      songs,
    },
  }
}

const HomePage = ({ songs }) => {
  return (
    <>
      <Head>
        <title>{homePageTitle}</title>
        <meta name="description" content={homePageDesc} />
      </Head>

      <Layout home>
        <SongsToDisplay songs={songs} />
      </Layout>
    </>
  )
}

export default HomePage
