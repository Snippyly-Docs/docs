
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 5]],
    2: [[11, 11]],
    3: [[14, 16]],
    4: [[20, 22]],
    5: [[20, 22]]
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
      title: 'Add the Comment Bubble component',
      active: step === 4,
      description: (
        <>
          <strong>The comment bubble shows the total number of threads, and allows users to open the comment associated with a given target element.</strong>
          <p>It acts as an indicator -- your users can see how many comments were left on an element at first glance. Like the Comment Tool, you must specify a target comment element ID.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Test Integration',
      active: step === 5,
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
    <SnippylyProvider apiKey="API_KEY">
      <SnippylyComments popoverMode={true} />

      <div className="toolbar">
        <SnippylyCommentTool 
          targetCommentElementId="some-element" 
        />
      </div>

      <div id="some-element">
        <SnippylyCommentBubble 
          targetCommentElementId="some-element" 
        />
        Attach a comment to this div!
      </div>
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}