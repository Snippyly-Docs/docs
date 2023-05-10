import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactConfig(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[15, 15], [5, 10]],
    2: [[6, 6]],
    3: [[7, 7]],
    4: [[8, 8]],
    5: [[9, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set extra configuration options',
      active: step === 1,
      description: (
        <>
          <strong>The <code>SnippylyProvider</code> component takes a <code>config</code> property.</strong>
          <p>You can pass in a configuration object that affects the SDK at a global level across your application.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set a URL whitelist',
      active: step === 2,
      description: (
        <>
          <strong>You can restrict our features to specific pages using partial URL strings.</strong>
          <p>By default if you don't provide this configuration, our features will be enabled across your application.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set a feature whitelist',
      active: step === 3,
      description: (
        <>
          <strong>You can allow only a certain subset of features to be enabled.</strong>
          <p>By default, all of our core features are enabled. You can view available feature types in the table below. Certain core features will have additional customizations that you can opt-in to.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Restrict the SDK to certain user plans',
      active: step === 4,
      description: (
        <>
          <strong>You can provide a list of user plans that enables our features only for users with those plans.</strong>
          <p>When you identify/login your user, you can provide an array of plans associated with that user.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Restrict the SDK to certain users',
      active: step === 5,
      description: (
        <>
          <strong>You can also provide a list of user IDs</strong>
          <p>We will reference the identified user's ID and check it against the list provided.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyProvider } from '@snippyly/react';

export default function App() {

  const config = {
    urlAllowList: ['/about', '/contact-us'],
    featureAllowList: ['comments', 'presence'],
    userPlanAllowList: ['pro', 'enterprise', 'admin', 'moderator'],
    userIdAllowList: ['d5558f1f-bdea-4eb5-9fd5-ed657e460307'],
  };

  return (
    <SnippylyProvider 
      apiKey="UnHxCCFcclkô4bErBL1" 
      config={config}
    >
      // Your app goes here
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}