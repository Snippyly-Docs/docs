import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../CommonSteps';

export default function ReactAuthLogoutUser(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 12]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Logout the user',
      active: step === 1,
      description: (
        <>
          <strong>Whenever your user logs out, call this method to clean up the session.</strong>
          <p>We will remove our UI components from the user's DOM.</p>
        </>
      )
    },
  ];

  const code = `
import { useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

export default function App() {
  // Example logout function
  const logout = async () => {

    // Logout with your auth provider.
    await authProvider.signOut();

    // Clear the Snippyly user object. Ensure that client is not null or undefined.
    client.signOutUser();

  };
  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}