import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import CodeSnippet from '../../components/CodeSnippet/CodeSnippet';

export default function ReactInstallation(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[1, 1]],
    3: [[6, 8]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Install our React package',
      active: step === 1,
      description: (
        <>
          <strong>You can use your preferred package manager.</strong>
          <p>Here's an example using the Node package manager:</p>
          <CodeSnippet>
            $ npm install @snippyly/react
          </CodeSnippet>
        </>
      )
    },
    {
      step: 2,
      title: 'Install our types (optional)',
      active: step === 2,
      description: (
        <>
          <strong>If you're using TypeScript, you can install our types.</strong>
          <p>Install our types via npm or your preferred package manager:</p>
          <CodeSnippet>
            $ npm install --save-dev @snippyly/types
          </CodeSnippet>
        </>
      )
    },
    {
      step: 3,
      title: 'Add the SnippylyProvider component',
      active: step === 3,
      description: (
        <>
          <strong>The provider component goes in the root of your app.</strong>
          <p>You will have to initialize the SDK provider using your Snippyly API key.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyProvider } from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="YOUR_API_KEY">
      // Your app goes here
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}