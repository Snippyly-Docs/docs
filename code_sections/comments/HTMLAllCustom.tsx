
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 9], [12, 14]],
    2: [[16, 18]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Whitelist certain elements',
      active: step === 1,
      description: (
        <>
          <strong>You can pass allowed element IDs to our Comments component.</strong>
          <p>This does not impact Popover mode. Comments will be disabled for every other element that is not passed in the array.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Blacklist certain elements',
      active: step === 2,
      description: (
        <>
          <strong>Add a data attribute.</strong>
          <p>If you only want to disallow commenting on certain elements, add the <code>data-snippyly-comment-disabled</code> attribute to that element.</p>
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
      allowed-element-ids='["some-element"]'
    ></snippyly-comments>

    <div id="some-element">
      <!-- This element is can be commented on -->
    </div>

    <div data-snippyly-comment-disabled>
      <!-- This element cannot be commented on -->
    </div>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}