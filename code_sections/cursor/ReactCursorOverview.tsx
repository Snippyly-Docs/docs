
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactCursorOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 7]],
    3: [[7, 7]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Cursor Component',
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
      title: 'Add Cursor Component',
      active: step === 2,
      description: (
        <>
          <strong>Add it any page you want to see user cursors.</strong>
          <p>This component renders the cursors of users on the same document and location in your web app.</p>
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
          <p>When you open the same page in another incognito window or browser, you should see the cursor on the other window when moving your mouse around.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyCursor } from '@snippyly/react';

export default function App() {

  return (
    <>
      <SnippylyCursor />
      {/* ... */}
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}