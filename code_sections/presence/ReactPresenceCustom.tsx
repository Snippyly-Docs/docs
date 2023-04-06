import { useState } from 'react';
import CodeSection from '../CodeSection';

export default function HTMLPresenceOverview() {
  const highlightRangeMap = {
    1: [2, 2],
    2: [8, 21],
    3: [12, 13],
    4: [15, 17]
  };
  
  const [step, setStep] = useState(1);

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
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    }
  ];

  const code = `

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
    `;

  return <CodeSection mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}