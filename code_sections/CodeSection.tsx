import { useState, useContext } from 'react';
import SplitPane from '../components/SplitPane/SplitPane';
import StepList from '../components/StepList/StepList';
import CodeSampleWrapper from '../components/CodeSampleWrapper/CodeSampleWrapper';
import GlobalContext from '../components/globalContext';

export interface CodeSectionVariant {
  sectionId: string;
}

export interface CodeSectionProps {
  highlightRangeMap: {[key: number]: number[][]},
  steps: {
    step: number;
    title: string;
    active: boolean;
    description: React.ReactNode;
  }[];
  mode: string;
  code: string;
  setStep: (step: number) => void;
  preview?: React.ReactNode;
  sectionId: string;
}

export default function CodeSection(props: CodeSectionProps) {

  const [scrollLine, setScrollLine] = useState(undefined);
  const [highlightRanges, setHighlightRanges] = useState(props.highlightRangeMap[1]);
  const { setActiveHeader } = useContext(GlobalContext);

  const handleStepChanged = (step) => {
    if (step !== null) {
      setActiveHeader(props.sectionId);
      if (window.location.hash !== `#${props.sectionId}`) {
        window.history.pushState(null, '', `#${props.sectionId}`);
      }
      setHighlightRanges(props.highlightRangeMap[step]);
      setScrollLine(props.highlightRangeMap[step][0][0]);
      props.setStep(step);
    } else {
      setActiveHeader(null);
      if (window.location.hash !== '') {
        window.history.pushState(null, '', ' ');
      }
    }
  }
  return (
    <SplitPane
      left={
        <StepList steps={props.steps} handleStepChanged={handleStepChanged} />
      }
      right={
        <CodeSampleWrapper
          mode={props.mode}
          scrollToLine={scrollLine}
          highlightRanges={highlightRanges}
          code={props.code}
          preview={props.preview}
        />
      }
    />
  );
}