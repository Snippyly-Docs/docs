import '../global.scss';
import '../public/fonts/poppins.scss';
import { AppProps } from 'next/app';
import { SnippylyProvider } from '@snippyly/react';
import GlobalContext from '../components/globalContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {

  const [frontendOption, setFrontendOption] = useState('React');

  return (
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <GlobalContext.Provider value={{ frontendOption, setFrontendOption }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </SnippylyProvider>
  );
}

export default MyApp;