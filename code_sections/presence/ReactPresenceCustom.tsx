import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactPresenceCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[9, 9]],
    3: [[10, 10]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set inactivity time',
      active: step === 1,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive in milliseconds.</strong>
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence to child documents',
      active: step === 2,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>Set the location attribute on the Presence element. When there are users at that location, their avatars will show in this Presence element.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set max users',
      active: step === 3,
      description: (
        <>
          <strong>Max users determines how many Presence avatars to display at a time.</strong>
          <p>You can set this via the maxUsers attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
  ];

  const code = `
import { SnippylyPresence } from '@snippyly/react';

export default function App() {

  return (
    <div className="toolbar">
      <SnippylyPresence
        inactivityTime={30000}
        location={{page: 1}}
        maxUsers={3}
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}