import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../CommonSteps';

export default function ReactInstallation(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[8, 9], [12, 13]],
    3: [[10, 10]],
    4: [[11, 11]],
    5: [[15, 21]],
    6: [[27, 33]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Set a document ID',
      active: step === 3,
      description: (
        <>
          <strong>A document is like a virtual building.</strong>
          <p>Users in the same <i>virtual building</i> can see and interact with eachother using our pre-built components.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Set a location (optional)',
      active: step === 4,
      description: (
        <>
          <strong>A location is like a room in the virtual building.</strong>
          <p>Locations are useful if one level of distinction is not enough for your application's use-case.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Read from nested locations (optional)',
      active: step === 5,
      description: (
        <>
          <strong>You can dynamically add conditional locations as they render on the screen.</strong>
          <p>In our example, we have a popup where we only want to load annotations for it when it renders on the screen. For most use cases, this is not necessary.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Set the nested location in the DOM',
      active: step === 6,
      description: (
        <>
          <strong>If you use the <code>addLocation</code> function, you need to set the corresponding location to your DOM.</strong>
          <p>In our example, we will set the same nested location object to our popup container.</p>
        </>
      )
    }
  ];

  const code = `
import { useSnippylyClient } from '@snippyly/react';
import { useEffect, useState } from 'react';

export default function Collaboration() {

  const { client } = useSnippylyClient();

  useEffect(() => {
    if (client) {
      client.setDocumentID('my-collaboration-app');
      client.setLocation({page: 'collaboration'});
    }
  }, [client]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup && client) {
      client.addLocation({page: 'collaboration', popup: true});
    }
  }, [client, showPopup]);

  // Example component template
  return (
    <div>
      // ...
      {
        showPopup ? (
          <div className="popup" data-snippyly-location={{page: 'collaboration', popup: true}}>
            This is a popup!
          </div>
        ) : null
      }
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}