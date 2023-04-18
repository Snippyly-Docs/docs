
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[10, 10]],
    2: [[11, 11]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Disable dialog on hover',
      active: step === 1,
      description: (
        <>
          <strong>In Popover mode, the comment dialog will open on hover.</strong>
          <p>If the target element has a comment annotation, hovering on that target element will open the comment dialog by default. You can disable this with the <code>disableDialogOnHover</code> input attribute.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Disable dialog on click',
      active: step === 2,
      description: (
        <>
          <strong>In Popover mode, the comment dialog will open on click.</strong>
          <p>If the target element has a comment annotation, click on that target element will open the comment dialog by default. You can disable this with the <code>disableDialogOnClick</code> input attribute.</p>
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
      popover-mode="true"
      disable-dialog-on-hover="true"
      disable-dialog-on-click="true"
    ></snippyly-comments>

    <!-- ... -->

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}