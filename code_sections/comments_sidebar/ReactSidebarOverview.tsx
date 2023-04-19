
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactFreestyleOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[3, 3]],
    2: [[17, 17]],
    3: [[17, 17]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comments Sidebar',
      active: step === 1,
      description: (
        <>
          <strong>Import the comments sidebar component.</strong>
          <p>We offer specific components for our users that use React.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comments Sidebar component',
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
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the sidebar.</strong>
          <p>You should be able to click the <code>All comments</code> link in a comment dialog box on the bottom.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyCommentsSidebar, 
  SnippylyCommentTool 
} from '@snippyly/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="...">
      <SnippylyComments />

      <div className="toolbar">
        <SnippylyCommentTool />
      </div>

      <SnippylyCommentsSidebar />
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}