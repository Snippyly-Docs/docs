import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLCursorCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[2, 2]],
    2: [[8, 10], [25, 27]],
    3: [[12, 12], [14, 15]],
    4: [[12, 12], [17, 18]],
    5: [[12, 12], [20, 23]],
    6: [[32, 32]]
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
      title: 'Set allowed element IDs',
      active: step === 4,
      description: (
        <>
          <strong>Whitelist allowed elements</strong>
          <p>If you provide a list of element IDs, we will only show cursors that hover over those specific elements.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Get live cursor data',
      active: step === 5,
      description: (
        <>
          <strong>Subscribe to cursor changes</strong>
          <p>Get realtime updates on cursor positions. You can use this to build your own Cursors from scratch.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Enable avatar mode',
      active: step === 6,
      description: (
        <>
          <strong>Show the user's avatar floating next to their cursor.</strong>
          <p>Enabling this mode will allow you to show the user's avatar in context with the cursor.</p>
        </>
      )
    },
  ];

  const code = `

import { SnippylyCursor, useSnippylyClient } from '@snippyly/react';

export default function App() {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (client) {

      const cursorElement = client.getCursorElement();

      // Set time in ms
      cursorElement.setInactivityTime(0.5 * 60 * 1000);

      // Set allowed elements
      cursorElement.allowedElementIds(['element-1', 'element-2']);

      // Subscribe to cursor data while it changes
      cursorElement.getLiveCursorsOnCurrentDocument().subscribe((cursors) => {
        // Do something with cursors list
      });

    }

  }, [client]);

  return (
    <>
      <SnippylyCursor
        avatarMode={true}
      />
      { /* ... */ }
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}