import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLInstallation(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[10, 10]],
    2: [[12, 17]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Install our script tag',
      active: step === 1,
      description: (
        <>
          <strong>Our <code>script</code> tag goes at the end of your <code>body</code> section.</strong>
          <p>You should hook the <code>onload</code> event in order to run some code when the script is loaded. Make sure to specify the SDK version you prefer (we recommend using the latest).</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set your API key',
      active: step === 2,
      description: (
        <>
          <strong>Use the <code>Snippyly.init</code> method to authenticate with our servers.</strong>
          <p>The example API key is invalid, make sure to replace it with your own!</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Installation documentation</title>
  </head>
  <body>

    <!-- Your content goes here -->

    <script type="module" src="https://cdn.jsdelivr.net/npm/@snippyly/sdk@x.x.xx/snippyly.js" onload="loadSnippyly()"></script>

    <script>
      function loadSnippyly() {
        // Your API key goes here!
        await window.snippyly.initConfig("UnHxCCFcclkô4bErBL1");
      }
    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}