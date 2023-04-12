import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLCursorCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[9, 9]],
    3: [[10, 10]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable avatar mode',
      active: step === 1,
      description: (
        <>
          <strong>Show the user's avatar floating next to their cursor.</strong>
          <p>Enabling this mode will allow you to show the user's avatar in context with the cursor.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set inactivity time',
      active: step === 2,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive in milliseconds.</strong>
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set allowed element IDs',
      active: step === 3,
      description: (
        <>
          <strong>Whitelist allowed elements</strong>
          <p>If you provide a list of element IDs, we will only show cursors that hover over those specific elements.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyCursor } from '@snippyly/react';

export default function App() {

  return (
    <>
      <SnippylyCursor
        avatarMode={true}
        inactivityTime={300000}
        allowedElementIds={['element-1', 'element-2']}
      />
      { /* ... */ }
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}