import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLCursorCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 12]],
    2: [[17, 17], [19, 20]],
    3: [[17, 17], [22, 23]],
    4: [[17, 17], [25, 28]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable avatar mode',
      active: step === 1,
      description: (
        <>
          <strong>Show the user's avatar floating next to their cursor.</strong>
          <p>Enabling this mode will allow you to show the user's avatar in context with the cursor.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set inactivity time',
      active: step === 2,
      description: (
        <>
          <strong>Set the time it takes for a cursor to disappear.</strong>
          <p>If a user leaves their mouse cursor, set the time it takes for that cursor to disappear on everyone else's screen. If they unfocus the tab, they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set allowed element IDs',
      active: step === 3,
      description: (
        <>
          <strong>Whitelist allowed elements</strong>
          <p>If you provide a list of element IDs, we will only show cursors that hover over those specific elements.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Get live cursor data',
      active: step === 4,
      description: (
        <>
          <strong>Subscribe to cursor changes</strong>
          <p>Get realtime updates on cursor positions. You can use this to build your own Cursors from scratch.</p>
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

    <snippyly-cursor
      avatar-mode="true"
    ></snippyly-cursor>

    <script>

    const cursorElement = window.snippyly.getCursorElement();

    // Set time in ms
    cursorElement.setInactivityTime(0.5 * 60 * 1000);

    // Set allowed elements
    cursorElement.setAllowedElementIds(['element-1', 'element-2']);

    // Subscribe cursor data while it changes
    cursorElement.getLiveCursorsOnCurrentDocument().subscribe((cursors) => {
      // Do something with cursors list
    });

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}