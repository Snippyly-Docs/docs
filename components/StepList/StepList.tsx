
import { Step } from '../Step/Step';
import React, { useRef, useEffect, useState } from 'react';

export interface StepListProps {
  steps: {
    step: number;
    title: string;
    active: boolean;
    description: React.ReactNode;
  }[],
  handleStepChanged: (step: number) => void;
}

export default function StepList(props: StepListProps) {

  const stepRefs = useRef(props.steps.map(() => React.createRef()));
  const [timeoutId, setTimeoutId] = useState(null);

  const handleScroll = () => {

    if (timeoutId !== null) return;

    setTimeoutId(setTimeout(() => {
      let closestStep = null;
      let minDistance = Number.MAX_VALUE;
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestStepMetadata = { stepBottom: null };

      stepRefs.current.forEach((step) => {
        if (!step.current) return;
        const rect = step.current.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - stepCenter);

        if (rect.top >= 0 && rect.bottom <= viewportHeight && viewportCenter >= rect.top && viewportCenter <= rect.bottom) {
          if (distance < minDistance) {
            closestStep = step;
            minDistance = distance;
            closestStepMetadata.stepBottom = rect.bottom;
          }
        }

      });

      if (closestStep) {

        const closestStepValue = parseInt(closestStep.current.dataset.step);

        // Add validation for the last step
        const isLastStep = closestStepValue === stepRefs.current.length;
        const pastStep = closestStepMetadata.stepBottom <= viewportCenter;
        if (isLastStep && pastStep) return;

        props.handleStepChanged(closestStepValue);


      } else {
        if (window.pageYOffset === 0) {
          props.handleStepChanged(null);
        }
      }

      setTimeoutId(null);

    }, 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stepRefs, timeoutId]);

  return (
    <>
      {props.steps.map((step, index) => {
        return <Step
          key={index}
          step={step.step}
          ref={stepRefs.current[index]}
          handleClick={() => props.handleStepChanged(step.step)}
          title={step.title}
          active={step.active}
          description={step.description}
        />
      })}
    </>
  );
}