import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactPresenceCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[9, 9]],
    3: [[10, 10]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set inactivity time',
      active: step === 1,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive in milliseconds.</strong>
          <p>By default we mark a user as inactive if they do not take any action on the document within a 5 mins timeframe. <br />
            If they unfocus the tab, we mark them inactive immediately.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence to a Location',
      active: step === 2,
      description: (
        <>
          <strong>Show users' presence on a <code>Location</code>.</strong>
          <p>Set the <code>location</code> attribute on the Presence element.
          When there are users at that location, their avatars will show in this Presence element. <br /><br />
          Eg: For a Presentation tool, you can add <code>Presence</code> component at the main <code>document</code> level and
           add another <code>Presence</code> component on the slide thumbnails.
          This will render avatars at both presentation level & slide thumbnail level. For slide thumbnails, it will only show users active on that slide.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set max users',
      active: step === 3,
      description: (
        <>
          <strong>Set how many Presence avatars to display at a time.</strong>
          <p>You can set this via the maxUsers attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
  ];

  const code = `
import { SnippylyPresence } from '@snippyly/react';

export default function App() {

  return (
    <div className="toolbar">
      <SnippylyPresence
        inactivityTime={30000}
        location={{page: 1}}
        maxUsers={3}
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}