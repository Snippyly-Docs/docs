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
      if (step in props.highlightRangeMap) {
        setHighlightRanges(props.highlightRangeMap[step]);
        // Take the first value of the first range, and the last value of the last range
        // Set the scroll line to the middle of the range

        const firstRange = props.highlightRangeMap[step][0];
        const lastRange = props.highlightRangeMap[step][props.highlightRangeMap[step].length - 1];
        const firstLine = firstRange[0];
        const lastLine = lastRange[1];
        const middleLine = Math.floor((firstLine + lastLine) / 2);
        setScrollLine(middleLine);
      }

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