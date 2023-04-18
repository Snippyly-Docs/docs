
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[13, 13]],
    2: [[14, 14]]
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
import { 
  SnippylyProvider, 
  SnippylyComments
} from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="...">

      <SnippylyComments 
        popoverMode={true} 
        disableDialogOnHover={true}
        disableDialogOnClick={true}
      />

      {/* ... */}

    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}