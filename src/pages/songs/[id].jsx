import Head from 'next/head'
import Layout from '../../comp/Layout'
// import Date from '../../comp/DateFormatter'
import { getIDs, getOneSong } from '../../engine'
import { siteTitle } from '../../wording'

export const getStaticPaths = async () => {
  const paths = await getIDs()
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const song = await getOneSong(params.id)
  return {
    props: {
      song,
    },
  }
}

const SongPage = ({ song }) => {
  return (
    <>
      <Head>
        <title>{`${song.title} | ${siteTitle}`}</title>
      </Head>

      <Layout>
        <h1>{song.title}</h1>
        {/* <Date dateString={song.date} /> */}
        <div className="prose prose-slate" dangerouslySetInnerHTML={{ __html: song.contentHTML }} />
      </Layout>
    </>
  )
}

export default SongPage
