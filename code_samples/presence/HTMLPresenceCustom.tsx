import { useState } from 'react';
import SplitPane from '../../components/SplitPane/SplitPane';
import StepList from '../../components/StepList/StepList';
import CodeSampleWrapper from '../../components/CodeSampleWrapper/CodeSampleWrapper';

export default function HTMLPresenceOverview() {
  const highlightRangeMap = {
    1: [17, 19],
    2: [21, 22]
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
      title: 'Add Presence to child documents',
      active: step === 1,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>For example: specific tabs on a page, or which slide the user is currently working on.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set inactivity time',
      active: step === 2,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive.</strong>
          <p>By default this value is 5 minutes.</p>
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
          mode="html"
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

    <script>
    
    // Set time in ms
    const presenceElement = window.snippyly.getPresenceElement();
    presenceElement.setInactivityTime(3 * 60 * 1000);

    // Set the current user's location to page 1
    window.snippyly.setLocation({page: 1});

    </script>
    
  </body>
</html>
    `}
        />
      }
    />
  );
}