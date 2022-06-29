import 'tailwindcss/tailwind.css'
import '../styles/style2.css'
import Head from "next/head";
// import '../styles/normalize.css'
// import '../styles/webflow.css'
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
    <title>v256 Phunks</title>
    
   </Head>

  <Component {...pageProps} />
  </>
  );
}

export default MyApp
