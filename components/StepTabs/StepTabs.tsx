import GlobalContext from '../globalContext';
import styles from './StepTabs.module.scss';
import { useRef, useContext } from 'react';

interface StepTabsProps {
  frontendOptions: [{title: string, value: React.ReactNode}];
}

export default function StepTabs(props: StepTabsProps) {

  const { frontendOption, setFrontendOption } = useContext(GlobalContext);

  const hostRef = useRef(null);

  return (
    <>
      {props.frontendOptions.length > 1 ?
        <div className={`${styles.flexContainer}`} ref={hostRef}>
          <div className={styles.spacer}></div>
          <div className={styles.stepTabs}>
            <h3>Frontend: </h3>
            {
              props.frontendOptions.map((option, idx) => {
                return (
                  <div key={idx} className={`${styles.tab} ${idx === frontendOption ? styles.active : ''}`} onClick={() => setFrontendOption(idx)}>
                    <p>{option.title}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
        : undefined}
      {frontendOption in props.frontendOptions ? props.frontendOptions[frontendOption].value : props.frontendOptions[0].value}
    </>
  );
}