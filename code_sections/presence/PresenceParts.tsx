
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import PresenceDemo from '../../components/PresenceDemo/PresenceDemo';

export default function PresenceParts(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [11, 11]],
    2: [[2, 10]],
    3: [[2, 10]]
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
snippyly-presence::part(user-avatar)::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5));
  pointer-events: none;
}
`;

  return <CodeSection 
  sectionId={props.sectionId}
  preview={ <PresenceDemo classString="partsDemo" naked={true} /> }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}