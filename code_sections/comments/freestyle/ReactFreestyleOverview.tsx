
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactFreestyleOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 7]],
    3: [[10, 10]],
    4: [[10, 10]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comment components',
      active: step === 1,
      description: (
        <>
          <strong>Import the comment component and the comment tool component.</strong>
          <p>We offer specific components for our users that use React.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component',
      active: step === 2,
      description: (
        <>
          <strong>Add the comment component to the root of your app.</strong>
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
          <strong>The comment tool allows you to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode. In Freestyle mode, you can attach comments to any elements on the page.</p>
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
          <p>You should be able to leave comments using the comment tool.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyProvider, SnippylyComments, SnippylyCommentTool } from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="...">
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