
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactFreestyleOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 5]],
    2: [[11, 11]],
    3: [[14, 14]],
    4: [[14, 14]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comment components',
      active: step === 1,
      description: (
        <>
          <strong>Import the <code>SnippylyComments</code> component and the <code>SnippylyCommentTool</code> component.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>SnippylyComments</code> component to the root of your app.</strong>
          <p>This component is required to render comments in your app.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Comment Tool component',
      active: step === 3,
      description: (
        <>
          <strong>Add the <code>SnippylyCommentTool</code> component wherever you want to show the comment tool button.</strong>
          <p>Clicking on it initiates comment mode & changes your mouse cursor to a comment pin.
            Now you can click anywhere on the document to attach comments to any elements.
          </p>
        </>
      )
    },
    {
      step: 4,
      title: 'Test Integration',
      active: step === 4,
      description: (
        <>
          <strong>Test it out by adding a comment.</strong>
          <p>Click on the comment tool and click anywhere on the page to add a comment.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyComments, 
  SnippylyCommentTool 
} from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="API_KEY">
      <SnippylyComments />

      <div className="toolbar">
        <SnippylyCommentTool />
      </div>
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}