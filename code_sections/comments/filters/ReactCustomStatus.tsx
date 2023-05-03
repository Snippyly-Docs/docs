import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactCustomStatus(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 34]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Define custom statuses',
      active: step === 1,
      description: (
        <>
          <strong>Provide custom statuses in the <code>custom-statuses</code> input attribute.</strong>
          <p>We will replace our custom status assignments and filtering functionality to use the values you pass in. The status type <code>default</code> will be the initial status of a new comment. The <code>terminal</code> status will act as the "resolved" state.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyComments
} from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="...">
      <SnippylyComments 

        customStatuses={[
          {
            "id": "open",
            "name": "Open",
            "color": "white",
            "type": "default",
            "icon": "../assets/images/open.png"
          },
          {
            "id": "in-progress",
            "name": "In Progress",
            "color": "#ffcc00",
            "type": "ongoing",
            "icon": "../assets/images/in-progress.png"
          },
          {
            "id": "accepted",
            "name": "Accepted",
            "color": "green",
            "type": "terminal",
            "icon": "../assets/images/accepted.png"
          }
        ]}
      
      />
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}