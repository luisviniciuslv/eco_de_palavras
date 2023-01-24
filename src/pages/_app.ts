import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
