import {AppProps} from 'next/app';
import '../styles/global.scss';
import Header from '../components/Header';
import { SessionProvider } from "next-auth/react"

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Header/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
