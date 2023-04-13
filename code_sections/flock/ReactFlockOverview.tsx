import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [7, 9]],
    2: [[1, 1], [7, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable Flock mode on Presence',
      active: step === 1,
      description: (
        <>
          <strong>Opt-in to Flock mode.</strong>
          <p>This feature relies on Presence in order to trigger Flock mode. You can click on a user's avatar to start following that user.</p>
          <p>This will enable Flock mode as an option for your users globally, wherever Presence is shown.</p>
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
          <p>When you open the same page in another incognito window or browser, you'll be able to test it out by clicking on a user avatar in Presence.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyPresence } from '@snippyly/react';

export default function App() {

  return (
    <div className="toolbar">
      <SnippylyPresence 
        flockMode={true} 
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}