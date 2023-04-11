import { useSnippylyClient } from "@snippyly/react";
import { useEffect, useRef, useState } from 'react';
import DemoContainer from "../DemoContainer/DemoContainer";
import styles from './CursorsDemo.module.scss';

interface CursorsDemoProps {}

export default function CursorsDemo(props: CursorsDemoProps) {

  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);
  const [demoInitialized, setDemoInitialized] = useState(false);

  const createIFrame = (el, src) => {

    const iframe = document.createElement('iframe');
    iframe.src = src;
    el.appendChild(iframe);
    
  };

  useEffect(() => {

    if (demoInitialized) return;

    const documentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    fetch('https://us-central1-snipply-sdk-staging.cloudfunctions.net/setCursorData', {
      method: 'POST',
      body: JSON.stringify({ documentId })
    }).then(data => {
      const src = `https://snippyly-demo-html-dev.web.app/cursor-docs-demo.html?documentId=${documentId}&userIndex=0`;
      const src2 = `https://snippyly-demo-html-dev.firebaseapp.com/cursor-docs-demo.html?documentId=${documentId}&userIndex=1`;
      
      createIFrame(iframe1Ref.current, src);
      createIFrame(iframe2Ref.current, src2);

      setDemoInitialized(true);

    }).catch(err => {
      console.log(err);
    });
        
  }, []);

  return (
    <DemoContainer>
      <div className={styles.iframeFlexContainer}>
        <div ref={iframe1Ref} className={styles.iframe}></div>
        <div ref={iframe2Ref} className={styles.iframe}></div>
      </div>
    </DemoContainer>
  );

}