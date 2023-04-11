
import { useState } from 'react';
import CodeSection from '../CodeSection';

export default function PresenceVariables(props) {

  const highlightRangeMap = {
    1: [[2, 2], [6, 6]],
    2: [[3, 3], [7, 7]],
    3: [[3, 3], [7, 7]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Select the Presence component',
      active: step === 1,
      description: (
        <>
          <strong>You can select all Presence components, or use a specific selector.</strong>
          <p>Our CSS variables are set at the component level.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Modify a CSS variable',
      active: step === 2,
      description: (
        <>
          <strong>Set the variable to anything you want.</strong>
          <p>We expose a set of variables so you can customize the component to better match your UI.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Check out the table below',
      active: step === 3,
      description: (
        <>
          <strong>Reference the table below to see what variables we expose.</strong>
          <p>Alternatively, you can directly inspect the component CSS to see what parts are available.</p>
        </>
      )
    }
  ];

  const code = `

snippyly-presence {
  --snippyly-presence-avatar-size: 1.5rem;
}

#specific-presence-id {
  --snippyly-presence-avatar-size: 1.5rem;
}
    `;

  return <CodeSection mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}