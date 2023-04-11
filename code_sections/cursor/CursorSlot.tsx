import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function CursorSlot(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[11, 13]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add a custom icon for the cursor',
      active: step === 1,
      description: (
        <>
          <strong>You can provide any HTML inside the Cursor element.</strong>
          <p>Just provide the correct slot attribute and the cursor icon that we use will be replaced.</p>
        </>
      )
    }
  ];

  const code = `

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cursors documentation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

    <snippyly-cursor>
      <img src="..." slot="cursor" />
    </snippyly-cursor>

    <!-- ... -->
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}