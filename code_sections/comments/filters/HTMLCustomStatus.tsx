import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLCustomStatus(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 31]]
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
<!doctype html>
<html lang="en">
  <head>
    <title>Comment documentation</title>
  </head>
  <body>

    <snippyly-comments
      custom-statuses='[
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
      ]'
    ></snippyly-comments>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}