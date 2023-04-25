import GlobalContext from '../globalContext';
import styles from './StepTabsVariants.module.scss';
import React, { useRef, useContext, useState, useMemo } from 'react';

interface StepTabsVariantsProps {
  frontendOptions: [{title: string}];
  variants: [{title: string}];
  options: Array<Array<React.ReactNode>>
}

export default function StepTabsVariants(props: StepTabsVariantsProps) {

  const { frontendOption, setFrontendOption } = useContext(GlobalContext);
  const [featureVariant, setFeatureVariant] = useState(0);
  // const [activeOption, setActiveOption] = useState(props.options[0][0]);

  const hostRef = useRef(null);

  const renderOptions = (title: string, optionsArr: Array<{title: string}>, currentOptionIndex: number, setOption: Function) => {
    return (
      <>
        <h3>{title}: </h3>
        {
          optionsArr.map((option, idx) => {
            return (
              <div key={idx} className={`${styles.tab} ${idx === currentOptionIndex ? styles.active : ''}`} onClick={() => setOption(idx)}>
                <p>{option.title}</p>
              </div>
            )
          })
        }
      </>
    );
  }

  // const getActiveOption = () => {

  //   console.log(featureVariant);

  //   if (featureVariant in props.options && frontendOption in props.options[featureVariant]) {
  //     return props.options[featureVariant][frontendOption];
  //   }

  //   if (featureVariant in props.options) {
  //     return props.options[featureVariant][0];
  //   }

  //   if (frontendOption in props.options[0]) {
  //     return props.options[0][frontendOption];
  //   }

  // }

  // useEffect(() => {
  //   setActiveOption(getActiveOption());
  // }, [featureVariant, frontendOption]);

  const activeOption = useMemo(() => {
    if (featureVariant in props.options && frontendOption in props.options[featureVariant]) {
      return props.options[featureVariant][frontendOption];
    }

    if (featureVariant in props.options) {
      return props.options[featureVariant][0];
    }

    if (frontendOption in props.options[0]) {
      return props.options[0][frontendOption];
    }
  }, [featureVariant, frontendOption, props.options]);


  return (
    <>
      {props.frontendOptions.length > 1 || props.variants.length > 1 ?
        <div className={`${styles.flexContainer}`} ref={hostRef}>
          <div className={styles.spacer}></div>
          <div className={styles.stepTabs}>
            <div>
              {
                props.variants.length > 1 ?
                  renderOptions('Type', props.variants, featureVariant, setFeatureVariant)
                  : null
              }
            </div>
            <div>
              {
                props.frontendOptions.length > 1 ?
                  renderOptions('Frontend', props.frontendOptions, frontendOption, setFrontendOption)
                  : null
              }
            </div>
          </div>
        </div>
        : undefined}
      {activeOption && React.cloneElement(activeOption, { key: `${featureVariant}-${frontendOption}` })}
    </>
  );
}