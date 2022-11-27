import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../comp/Layout'
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
        <div className="mx-auto max-w-md">
          <Link href="/">
            <h1 className="pb-12 pt-6 text-center text-5xl font-bold tracking-wide sm:text-6xl">
              {song.title}
            </h1>
          </Link>

          <div className="prose prose-slate mx-auto" dangerouslySetInnerHTML={{ __html: song.contentHTML }} />
        </div>
      </Layout>
    </>
  )
}

export default SongPage
