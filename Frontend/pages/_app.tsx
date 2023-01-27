import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from '@/src/Context';

export default function App({ Component, pageProps }: AppProps) {
  return(
    //@ts-ignore
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  ) 
}
