import { useState } from 'react';
import SplitPane from '../components/SplitPane/SplitPane';
import StepList from '../components/StepList/StepList';
import CodeSampleWrapper from '../components/CodeSampleWrapper/CodeSampleWrapper';

interface CodeSectionProps {
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
}

export default function CodeSection(props: CodeSectionProps) {

  const [scrollLine, setScrollLine] = useState(undefined);
  const [highlightRanges, setHighlightRanges] = useState(props.highlightRangeMap[1]);

  const handleStepChanged = (step) => {
    setHighlightRanges(props.highlightRangeMap[step]);
    setScrollLine(props.highlightRangeMap[step][0][0]);
    props.setStep(step);
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