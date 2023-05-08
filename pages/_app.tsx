import '../global.scss';
import '../theme.scss';
import '../components/PresenceDemo/PresenceDemo.scss';
import '../public/fonts/poppins.scss';
import '../public/fonts/firacode.scss';
import { AppProps } from 'next/app';
import { SnippylyProvider } from '@snippyly/react';
import GlobalContext from '../components/globalContext';
import { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';


function MyApp({ Component, pageProps }: AppProps) {

  const [frontendOption, setFrontendOption] = useState(0);
  const [activeHeader, setActiveHeader] = useState(undefined);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (e) => {

    if (e.matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (!rootElement) return;

    if (darkMode) {
      rootElement.setAttribute('dark', '');
    } else {
      rootElement.removeAttribute('dark');
    }

  }, [darkMode]);

  useEffect(() => {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      setDarkMode(query.matches);
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <GlobalContext.Provider value={{ setDarkMode, darkMode, frontendOption, setFrontendOption, activeHeader, setActiveHeader }}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </GlobalContext.Provider>
    </SnippylyProvider>
  );
}

export default MyApp;