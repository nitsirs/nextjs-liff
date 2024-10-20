import { useEffect } from 'react';
import '../styles/globals.css'

const liffId = "2006477399-yokJlXXe"

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
    } catch (error) {
      console.error('liff init error', error.message)
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  })

  return <Component {...pageProps} />
}

export default MyApp
