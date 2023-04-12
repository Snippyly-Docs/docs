import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLPresenceOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 9], [15, 17]],
    3: [[11, 13]],
    4: [[12, 12], [15, 18]],
    5: [[27, 27]],
    6: [[28, 28]]
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
      title: 'Fetch Presence users',
      active: step === 4,
      description: (
        <>
          <strong>Subscribe to changes to Presence users.</strong>
          <p>You can use this to build your own Presence UI from scratch.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Add Presence to child documents',
      active: step === 5,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>Set the location attribute on the Presence element. When there are users at that location, their avatars will show in this Presence element.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Set max users',
      active: step === 6,
      description: (
        <>
          <strong>Max users determines how many Presence avatars to display at a time.</strong>
          <p>You can set this via the maxUsers attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
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

      // Subscribe to changes to Presence users
      presenceElement.getOnlineUsersOnCurrentDocument().subscribe((users) => {
        // Do something with users list
      });

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

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}