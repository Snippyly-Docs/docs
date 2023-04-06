import { useState } from 'react';
import CodeSection from '../CodeSection';

export default function HTMLPresenceOverview() {
  const highlightRangeMap = {
    1: [2, 2],
    2: [8, 18],
    3: [12, 14],
    4: [23, 23],
    5: [24, 24]
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
      title: 'Set inactivity time',
      active: step === 3,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive.</strong>
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Add Presence to child documents',
      active: step === 4,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>Set the location attribute on the Presence element. When there are users at that location, their avatars will show in this Presence element.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Set max users',
      active: step === 5,
      description: (
        <>
          <strong>Max users determines how many Presence avatars to display at a time.</strong>
          <p>You can set this via the maxUsers attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
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

      // Set the inactivity time in milliseconds
      const presenceElement = client.getPresenceElement();
      presenceElement.setInactivityTime(3 * 60 * 1000);

    }

  }, [client]);

  return (
    <div className="toolbar">
      <SnippylyPresence
        location={{page: 1}}
        maxUsers={3}
      />
    </div>
  );
}
    `;

  return <CodeSection mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}