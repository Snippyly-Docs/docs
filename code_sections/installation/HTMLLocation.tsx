import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLConfig(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[34, 34]],
    2: [[35, 35]],
    3: [[23, 29]],
    4: [[14, 14]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set a document ID',
      active: step === 1,
      description: (
        <>
          <strong>A document is like a virtual building.</strong>
          <p>Users in the same <i>virtual building</i> can see and interact with eachother using our pre-built components.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set a location (optional)',
      active: step === 2,
      description: (
        <>
          <strong>A location is like a room in the virtual building.</strong>
          <p>Locations are useful if one level of distinction is not enough for your application's use-case.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Read from nested locations (optional)',
      active: step === 3,
      description: (
        <>
          <strong>You can dynamically add conditional locations as they render on the screen.</strong>
          <p>In our example, we have a popup where we only want to load annotations for it when it renders on the screen. For most use cases, this is not necessary.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Set the nested location in the DOM',
      active: step === 4,
      description: (
        <>
          <strong>If you use the <code>addLocation</code> function, you need to set the corresponding location to your DOM.</strong>
          <p>In our example, we will set the same nested location object to our popup container.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Location documentation</title>
  </head>
  <body>

    <!-- Your content goes here -->

    <div 
      class="popup" 
      style="display: none" 
      id="popup" 
      data-snippyly-location='{"page": "/collaboration", "popup": "true"}'
    >
      This is a popup!
    </div>

    <script type="module" src="https://cdn.jsdelivr.net/npm/@snippyly/sdk@x.x.xx/snippyly.js" onload="loadSnippyly()"></script>

    <script>

      function showPopup() {

        const popupEl = document.getElementById('popup');
        popupEl.style.display = 'block';

        window.snippyly.addLocation({page: '/collaboration', popup: true});
      }

      function loadSnippyly() {
        await window.snippyly.init("UnHxCCFcclkô4bErBL1");

        window.snippyly.setDocumentID('my-collaboration-app');
        window.snippyly.setLocation({page: 'index'});
        
      }
    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}