
import { Step } from '../Step/Step';
import React, { useRef, useEffect } from 'react';

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

  const handleScroll = () => {
    let closestStep = null;
    let minDistance = Number.MAX_VALUE;

    stepRefs.current.forEach((step) => {
      const viewportHeight = window.innerHeight;
      if (!step.current) return;
      const rect = step.current.getBoundingClientRect();
      const stepCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = Math.abs(viewportCenter - stepCenter);

      if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        if (distance < minDistance) {
          closestStep = step;
          minDistance = distance;
        }
      }
    });

    if (closestStep) {
      const closestStepValue = parseInt(closestStep.current.dataset.step);
      props.handleStepChanged(closestStepValue);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stepRefs]);

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