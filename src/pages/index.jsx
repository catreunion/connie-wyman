import Head from 'next/head'
import { getSortedSongs } from '@/engine'
import { homePageTitle, homePageDesc } from '@/items/wording'
import Layout from '@/comp/Layout'
import SongsToDisplay from '@/comp/SongsToDisplay'

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
