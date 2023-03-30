//@ts-ignore
import type { NextraThemeLayoutProps } from 'nextra';
import { useEffect } from 'react';
import styles from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout(props: NextraThemeLayoutProps) {

  const { children, pageOpts, pageProps } = props;
  const { pageMap, headings } = pageOpts;

  useEffect(() => {
    // console.log('props: ', props);
  }, [props]);

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.navBar}></div>
      <div className={styles.mainWindow}>

        <div className={styles.sidebarContainer}>
          <Sidebar pageOpts={pageOpts} />
        </div>
        <div className={styles.pageContainer}>
          { props.children }
        </div>

      </div>
    </div>
  );
}