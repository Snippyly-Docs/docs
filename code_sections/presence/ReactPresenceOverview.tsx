
import { useState } from 'react';
import CodeSection from '../CodeSection';

export default function ReactPresenceOverview(props) {

  const highlightRangeMap = {
    1: [2, 2],
    2: [7, 9],
    3: [7, 9]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>Import the component from our React library.</strong>
          <p>We offer a specific component for our users that use React.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence Component',
      active: step === 2,
      description: (
        <>
          <strong>Add it anywhere you want to see the user avatars.</strong>
          <p>This component renders the avatars of users on the same page in your web app.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the same page in another browser.</strong>
          <p>When you open the same page in another incognito window or browser, you should see the avatars of both users.</p>
        </>
      )
    }
  ];

  const code = `

import { SnippylyPresence } from '@snippyly/react';

export default function App() {

  return (
    <div className="toolbar">
      <SnippylyPresence />
    </div>
  );
}
    `;

  return <CodeSection mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}