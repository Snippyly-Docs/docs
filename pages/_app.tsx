import '../global.scss';
import '../public/fonts/poppins.scss';
import { AppProps } from 'next/app';
import { SnippylyProvider, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <Component {...pageProps} />
    </SnippylyProvider>
  );
}

export default MyApp;