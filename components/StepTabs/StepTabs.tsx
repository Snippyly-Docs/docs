import GlobalContext from '../globalContext';
import styles from './StepTabs.module.scss';
import { createRef, useState, useEffect, useRef, forwardRef, useContext } from 'react';

interface StepTabsProps {
  optionsMap: { [key: string]: React.ReactNode };
}

export default function StepTabs(props: StepTabsProps) {

  const { frontendOption, setFrontendOption } = useContext(GlobalContext);

  const hostRef = useRef(null);

  return (
    <>
      {Object.values(props.optionsMap).length > 1 ?
        <div className={`${styles.flexContainer}`} ref={hostRef}>
          <div className={styles.spacer}></div>
          <div className={styles.stepTabs}>
            <h3>Frontend: </h3>
            {Object.entries(props.optionsMap).map(([key, _value], idx) => {
              return (
                <div key={idx} className={`${styles.tab} ${frontendOption === key ? styles.active : ''}`} onClick={() => setFrontendOption(key)}>
                  <p>{key}</p>
                </div>
              );
            })}
          </div>
        </div>
        : undefined}
      {frontendOption in props.optionsMap ? props.optionsMap[frontendOption] : Object.values(props.optionsMap)[0]}
    </>
  );
}