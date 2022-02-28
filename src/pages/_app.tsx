import {AppProps} from 'next/app';
import '../styles/global.scss';
import Header from '../components/Header';
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar";

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color='#eba417'/>
      <Header/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
