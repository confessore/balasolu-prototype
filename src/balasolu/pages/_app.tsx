import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // move this to sendgrid.js
  let fs = require('fs');
  let key = fs.readFile(process.env.APPLICATION__SENDGRID__KEY);
  console.log(key);
  //
  return <Component {...pageProps} />
}

export default MyApp
