import { useState } from 'react';
import SplitPane from '../../components/SplitPane/SplitPane';
import StepList from '../../components/StepList/StepList';
import CodeSampleWrapper from '../../components/CodeSampleWrapper/CodeSampleWrapper';

export default function HTMLPresenceOverview() {
  const highlightRangeMap = {
    1: [11, 13],
    2: [11, 13]
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
      title: 'Add Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>Add it anywhere you want to see the user avatars.</strong>
          <p>This component renders the avatars of users on the same page in your web app.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Test Integration',
      active: step === 2,
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

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Presence documentation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence></snippyly-presence>
    </div>
    
  </body>
</html>
    `}
        />
      }
    />
  );
}