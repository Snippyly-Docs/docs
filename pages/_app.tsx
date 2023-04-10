import '../global.scss';
import '../theme.scss';
import '../public/fonts/poppins.scss';
import { AppProps } from 'next/app';
import { SnippylyProvider } from '@snippyly/react';
import GlobalContext from '../components/globalContext';
import { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {

  const [frontendOption, setFrontendOption] = useState('React');

  const handleThemeChange = (e) => {

    const rootElement = document.documentElement;
    if (!rootElement) return;

    if (e.matches) {
      rootElement.setAttribute('dark', '');
    } else {
      rootElement.removeAttribute('dark');
    }

  };

  useEffect(() => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      handleThemeChange(query);
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    };
  });

  return (
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <GlobalContext.Provider value={{ frontendOption, setFrontendOption }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </SnippylyProvider>
  );
}

export default MyApp;