
import { useState } from 'react';
import SplitPane from '../../components/SplitPane/SplitPane';
import StepList from '../../components/StepList/StepList';
import CodeSampleWrapper from '../../components/CodeSampleWrapper/CodeSampleWrapper';

export default function ReactPresenceOverview(props) {

  const highlightRangeMap = {
    1: [2, 2],
    2: [7, 9],
    3: [7, 9]
  };
  
  const [step, setStep] = useState(1);
  const [scrollLine, setScrollLine] = useState(undefined);
  const [highlightRange, setHighlightRange] = useState(highlightRangeMap[1]);

  const handleStepChanged = (step) => {
    setScrollLine(highlightRangeMap[step][0]);
    setHighlightRange(highlightRangeMap[step]);
    setStep(step);
  }

  const steps = [
    {
      step: 1,
      title: 'Import Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>Import the component from our React library.</strong>
          <p>We offer a specific component for our users that use React.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence Component',
      active: step === 2,
      description: (
        <>
          <strong>Add it anywhere you want to see the user avatars.</strong>
          <p>This component renders the avatars of users on the same page in your web app.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the same page in another browser.</strong>
          <p>When you open the same page in another incognito window or browser, you should see the avatars of both users.</p>
        </>
      )
    }
  ];

  return (
    <SplitPane
      left={
        <StepList steps={steps} handleStepChanged={handleStepChanged} />
      }
      right={
        <CodeSampleWrapper
          scrollToLine={scrollLine}
          highlightRange={highlightRange}
          code={
`

import { SnippylyPresence } from '@snippyly/react';

export default function App() {

  return (
    <div className="toolbar">
      <SnippylyPresence />
    </div>
  );
}
    `}
        />
      }
    />
  );
}