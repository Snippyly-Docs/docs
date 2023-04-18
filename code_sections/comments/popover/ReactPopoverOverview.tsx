
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverOverview(props: CodeSectionVariant) {

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
          <strong>Import the comment component and the comment tool component.</strong>
          <p>We offer specific components for our users that use React.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component with Popover mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the comment component to the root of your app.</strong>
          <p>This component is required to render comments in your app. Popover mode means that comments can be attached to specific target elements.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Comment Tool component',
      active: step === 3,
      description: (
        <>
          <strong>The comment tool allows your to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode. In Popover mode, you must specify a target comment element ID which links the tool to that element.</p>
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
          <p>You should be able to leave a comment on the target element using the comment tool.</p>
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
    <SnippylyProvider apiKey="...">
      <SnippylyComments popoverMode={true} />

      <div className="toolbar">
        <SnippylyCommentTool targetCommentElementId="some-element" />
      </div>

      <div id="some-element">
        Attach a comment to this div!
      </div>
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}