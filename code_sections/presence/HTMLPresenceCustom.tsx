import { useState } from 'react';
import CodeSection from '../CodeSection';

export default function HTMLPresenceCustom() {
  const highlightRangeMap = {
    1: [13, 13],
    2: [14, 14],
    3: [20, 22]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Presence to child documents',
      active: step === 1,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>Set the location attribute on the Presence element. When there are users at that location, their avatars will show in this Presence element.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set max users',
      active: step === 2,
      description: (
        <>
          <strong>Max users determines how many Presence avatars to display at a time.</strong>
          <p>You can set this via the max-users attribute. Any avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set inactivity time',
      active: step === 3,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive.</strong>
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    }
  ];

  const code = `

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Presence documentation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence
        location='{"page": 1}'
        max-users='3'
      ></snippyly-presence>
    </div>

    <script>
    
    // Set time in ms
    const presenceElement = window.snippyly.getPresenceElement();
    presenceElement.setInactivityTime(3 * 60 * 1000);

    </script>
    
  </body>
</html>
    `;

  return <CodeSection mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}