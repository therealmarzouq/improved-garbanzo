import '../styles/globals.css'
import { Layout } from '../components/common'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head /> */}
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
