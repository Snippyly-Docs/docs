import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[2, 2], [6, 6], [12, 12]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Pass in a callback for navigation',
      active: step === 1,
      description: (
        <>
          <strong>Use a callback for custom navigation or side-effects.</strong>
          <p>When the leader of a flock navigates, we can use the React Router to update the follower's position.</p>
          <p>This replaces the default behavior of using <code>window.location.href</code> to navigate.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyPresence } from '@snippyly/react';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();

  return (
    <div className="toolbar">
      <SnippylyPresence 
        flockMode={true}
        navigate={(pageInfo) => navigate(pageInfo.path)}
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}