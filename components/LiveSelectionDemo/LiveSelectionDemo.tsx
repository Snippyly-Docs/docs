import { useEffect, useRef, useState } from 'react';
import DemoContainer from "../DemoContainer/DemoContainer";
import styles from './LiveSelectionDemo.module.scss';

interface LiveSelectionDemoProps {
  noBorderRadius?: boolean;
  avatarMode?: boolean;
  replaceCursor?: boolean;
}

export default function LiveSelectionDemo(props: LiveSelectionDemoProps) {

  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);
  const [demoInitialized, setDemoInitialized] = useState(false);

  const createIFrame = (el, src) => {

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    el.appendChild(iframe);
    
  };

  useEffect(() => {

    if (demoInitialized) return;

    const documentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    // fetch('https://us-central1-snippyly-sdk-prod.cloudfunctions.net/setHuddleData', {
    //   method: 'POST',
    //   body: JSON.stringify({ documentId })
    // }).then(data => {

        
    // }).catch(err => {
    //     console.log(err);
    // });

    const src = `https://snippyly-docs-demo.web.app/live-selection?documentId=${documentId}&userIndex=0`;
    const src2 = `https://snippyly-docs-demo.firebaseapp.com/live-selection?documentId=${documentId}&userIndex=1`;
    
    createIFrame(iframe1Ref.current, src);
    createIFrame(iframe2Ref.current, src2);

    setDemoInitialized(true);
        
  }, []);

  if (props.noBorderRadius || props.avatarMode || props.replaceCursor) {
    return (
      <div ref={iframe1Ref} className={styles.iframe}></div>
    );
  }

  return (
    <DemoContainer height="450px">
      <div className={styles.iframeFlexContainer}>
        <div ref={iframe1Ref} className={styles.iframe}></div>
        <div ref={iframe2Ref} className={styles.iframe}></div>
      </div>
    </DemoContainer>
  );

}