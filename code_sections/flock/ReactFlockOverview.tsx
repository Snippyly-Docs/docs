import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createUseEffectStep, createGetSnippylyStep } from '../CommonSteps';

export default function ReactFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [17, 17]],
    2: [[1, 1], [6, 6]],
    3: [[2, 2], [8, 9], [12, 13]],
    4: [[10, 11]],
    5: [[10, 11]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>This features relies on Presence.</strong>
          <p>Once you finish the steps, you can initialize a flock session by clicking on a user's avatar, to begin following that user.</p>
        </>
      )
    },
    createGetSnippylyStep(step, 2),
    createUseEffectStep(step, 3),
    {
      step: 4,
      title: 'Enable Flock mode',
      active: step === 4,
      description: (
        <>
          <strong>Opt-in to Flock mode globally.</strong>
          <p>This will enable Flock mode as an option for your users globally, wherever Presence is shown.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Test Integration',
      active: step === 5,
      description: (
        <>
          <strong>Test it out by opening the same page in another browser.</strong>
          <p>When you open the same page in another incognito window or browser, you'll be able to test it out by clicking on a user avatar in Presence.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyPresence, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

export default function App() {

  const client = useSnippylyClient();

  useEffect(() => {
    if (client) {
      const presenceElement = client.getPresenceElement();
      presenceElement.enableFlockMode();
    }
  }, [client]);

  return (
    <div className="toolbar">
      <SnippylyPresence />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}