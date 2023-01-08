import '../styles/globals.scss'
import '../styles/antd.scss'
import '../styles/icomoon.scss'
import 'react-phone-input-2/lib/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
