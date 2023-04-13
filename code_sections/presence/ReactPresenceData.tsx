import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactPresenceData(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[2, 2], [8, 9], [17, 18]],
    3: [[11, 11], [13, 15]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Get the Snippyly client',
      active: step === 1,
      description: (
        <>
          <strong>Import the <code>useSnippylyClient</code> React hook.</strong>
          <p>You can use this hook within your component to fetch the Snippyly client.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Create a useEffect hook',
      active: step === 2,
      description: (
        <>
          <strong>Create an effect with the <code>client</code> as a dependency.</strong>
          <p>Make sure to check if the <code>client</code> is <code>null</code> or <code>undefined</code> before you use it.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Subscribe to presence users',
      active: step === 3,
      description: (
        <>
          <strong>Subscribe to constant user changes.</strong>
          <p>We will send you a new list of users everytime there is a change so you can build out your own user UI and logic.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyCursor, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

export default function App() {

  const client = useSnippylyClient();

  useEffect(() => {
    if (client) {

      const presenceElement = client.getPresenceElement();

      presenceElement.getOnlineUsersOnCurrentDocument().subscribe((users) => {
        // Do something with users list
      });

    }
  }, [client]);

  return (
    <>
      <SnippylyPresence />
      {/* ... */}
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}