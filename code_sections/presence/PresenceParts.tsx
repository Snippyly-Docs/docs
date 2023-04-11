
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import PresenceDemo from '../../components/PresenceDemo/PresenceDemo';

export default function PresenceParts(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[2, 2], [4, 4]],
    2: [[3, 3]],
    3: [[3, 3]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Select the part you want to modify',
      active: step === 1,
      description: (
        <>
          <strong>We offer several parts which can be used like classes.</strong>
          <p>The Presence component is encapsulated in Shadow DOM, which is isolated from the normal DOM.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Apply your CSS rules',
      active: step === 2,
      description: (
        <>
          <strong>Set whatever CSS rules you want.</strong>
          <p>The part lets you target a specific element within a Shadow DOM.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Check out the table below',
      active: step === 3,
      description: (
        <>
          <strong>Reference the table below to see what parts we expose.</strong>
          <p>Alternatively, you can directly inspect the component HTML to see what parts are available.</p>
        </>
      )
    }
  ];

  const code = `

snippyly-presence::part(tooltip-text) {
  flex-direction: column-reverse;
}
    `;

  return <CodeSection 
  sectionId={props.sectionId}
  preview={ <PresenceDemo classString="bigText" naked={true} /> }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}