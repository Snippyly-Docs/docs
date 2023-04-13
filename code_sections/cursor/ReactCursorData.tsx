import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createUseEffectStep, createGetSnippylyStep } from '../CommonSteps';

export default function ReactCursorData(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[2, 2], [8, 9], [17, 18]],
    3: [[11, 11], [13, 15]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Subscribe to live cursors',
      active: step === 3,
      description: (
        <>
          <strong>Subscribe to constant cursor changes.</strong>
          <p>We will send you a new list of cursors everytime there is a change so you can build out your own cursor UI and logic.</p>
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

      const cursorElement = client.getCursorElement();

      cursorElement.getLiveCursorsOnDocument().subscribe((cursors) => {
        // Do something with cursors list
      });

    }
  }, [client]);

  return (
    <>
      <SnippylyCursor />
      {/* ... */}
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}