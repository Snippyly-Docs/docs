import { useState } from 'react';
import SplitPane from '../../components/SplitPane/SplitPane';
import StepList from '../../components/StepList/StepList';
import CodeSampleWrapper from '../../components/CodeSampleWrapper/CodeSampleWrapper';

export default function HTMLPresenceOverview() {
  const highlightRangeMap = {
    1: [2, 2],
    2: [8, 21],
    3: [12, 13],
    4: [15, 17]
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
      title: 'Import useSnippylyClient hook',
      active: step === 1,
      description: (
        <>
          <strong>Import the Snippyly client hook.</strong>
          <p>This hook provides the Snippyly client.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Create useEffect hook',
      active: step === 2,
      description: (
        <>
          <strong>Create a useEffect hook with the client as a dependency</strong>
          <p>Make sure to add the client as a dependency and check if the client is null.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Presence to child documents',
      active: step === 3,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>For example: specific tabs on a page, or which slide the user is currently working on.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Set inactivity time',
      active: step === 4,
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
          mode="jsx"
          scrollToLine={scrollLine}
          highlightRange={highlightRange}
          code={
`

import { SnippylyPresence, useSnippylyClient } from '@snippyly/react';

export default function App() {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (client) {
      
      // Set the current user's location to page 1
      client.setLocation({page: 1});

      // Set the inactivity time in milliseconds
      const presenceElement = client.getPresenceElement();
      presenceElement.setInactivityTime(3 * 60 * 1000);

    }

  }, [client]);

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