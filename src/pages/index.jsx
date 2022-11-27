import Head from 'next/head'
import Link from 'next/link'
import { getSortedSongs } from '../engine'
import Layout from '../comp/Layout'
// import DateFormatter from '../comp/DateFormatter'
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

        {/* <ul>
          {songs.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/songs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul> */}
      </Layout>
    </>
  )
}

export default Home
