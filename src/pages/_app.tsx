import '../styles/global.scss'

import { DarkModeProvider } from '../contexts/DarkModeContext'


function MyApp({ Component, pageProps }) { 
  return (
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
  )
}

export default MyApp

