import Head from 'next/head'
import { getSortedSongs } from '../engine'
import Layout from '../comp/Layout'
import { siteTitle, siteDesc } from '../wording'
import SongsToDisplay from '@/comp/SongsToDisplay'

export const getStaticProps = async () => {
  const songs = getSortedSongs()

  return {
    props: {
      songs,
    },
  }
}

const Home = ({ songs }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
      </Head>

      <Layout home>
        <SongsToDisplay songs={songs} />
      </Layout>
    </>
  )
}

export default Home
