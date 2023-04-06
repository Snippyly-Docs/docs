import GlobalContext from '../globalContext';
import styles from './StepTabs.module.scss';
import{ createRef, useState, useEffect, useRef, forwardRef, useContext } from 'react';

interface StepTabsProps {
  optionsMap: {[key: string]: React.ReactNode};
}

export default function StepTabs(props: StepTabsProps) {

  const {frontendOption, setFrontendOption} = useContext(GlobalContext);
  // const [hide, setHide] = useState(false);

  // const optionRefs = useRef(
  //   Object.keys(props.optionsMap).reduce((acc, key) => {
  //     acc[key] = createRef();
  //     return acc;
  //   }, {})
  // );

  const hostRef = useRef(null);

  // const handleScroll = () => {
  //   const currentNode = optionRefs.current[frontendOption].current;

  //   if (!currentNode) return;
  //   if (currentNode.children.length === 0) return;
  //   if (currentNode.children[0].length < 2) return;
  //   if (currentNode.children[0].children[1].length < 1) return;

  //   const targetPane = currentNode.children[0].children[1].children[0];

  //   if (!hostRef.current || !targetPane) return;
  //   const hostRect = hostRef.current.getBoundingClientRect();
  //   const targetRect = targetPane.getBoundingClientRect();

  //   const isOccluded = hostRect.top > targetRect.top;

  //   requestAnimationFrame(() => {
  //     if (isOccluded && !hide) {
  //       setHide(true);
  //     } else if (!isOccluded && hide) {
  //       setHide(false);
  //     }
  //   });

  // }

  // const OptionComponent = forwardRef((_, ref) => (
  //   <div ref={ref}>{props.optionsMap[frontendOption]}</div>
  // ));

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [frontendOption, hide]);

  return (
    <>
      <div className={`${styles.flexContainer}`} ref={hostRef}>
        <div className={styles.spacer}></div>
        <div className={styles.stepTabs}>
          <h3>Frontend: </h3>
          { Object.entries(props.optionsMap).map(([key, _value], idx) => {
            return (
              <div key={idx} className={`${styles.tab} ${frontendOption === key ? styles.active : ''}`} onClick={() => setFrontendOption(key)}>
                <p>{ key }</p>
              </div>
            );
          }) }
        </div>
      </div>
      {/* <OptionComponent ref={optionRefs.current[frontendOption]} /> */}
      { props.optionsMap[frontendOption] }
    </>
  );
}