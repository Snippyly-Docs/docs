import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[15, 15]],
    2: [[3, 3], [8, 8], [16, 18]]
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
          <p>When the leader of a flock navigates, we can use the React Router to update the follower's position.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyPresence, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const client = useSnippylyClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (client) {
      const presenceElement = client.getPresenceElement();
      presenceElement.enableFlockMode(
        {
          useHistoryAPI: true,
          onNavigate: (pageInfo) => {
            navigate(pageInfo.path);
          }
        }
      );
    }
  }, [client]);

  return (
    <div className="toolbar">
      <SnippylyPresence />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}