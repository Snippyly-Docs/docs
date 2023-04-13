import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[16, 16]],
    2: [[17, 19]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Use the History API to detect navigation',
      active: step === 1,
      description: (
        <>
          <strong>We listen to page load in order to determine if the leader of a flock navigates to a different page.</strong>
          <p>Enabling this option will force us to listen to the Web History API to listen to URL changes as well as the default behavior.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Pass in a callback for navigation',
      active: step === 2,
      description: (
        <>
          <strong>Use a callback for custom navigation or side-effects.</strong>
          <p>When the leader of a flock navigates, this callback will be called for the follower's client instead of our normal <code>window.location.href</code> change.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Flock mode documentation</title>
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence></snippyly-presence>
    </div>

    <script>
      const presenceElement = window.Snippyly.getPresenceElement();
      presenceElement.enableFlockMode(
        {
          useHistoryAPI: true,
          onNavigate: (pageInfo) => {
            // Do something with pageInfo
          }
        }
      );
    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}