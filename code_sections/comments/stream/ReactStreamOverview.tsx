
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 8], [10, 10]],
    3: [[9, 9]],
    4: [[17, 17]],
    5: [[17, 17]]
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
      title: 'Add Comment component with Stream mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the comment component to your template.</strong>
          <p>This component is required to render comments in your app. Stream mode renders a stream view of comments in a column.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add the Stream View container ID (optional)',
      active: step === 3,
      description: (
        <>
          <strong>Pass the container ID of the scrolling element to help us position the stream of comments.</strong>
          <p>Alternatively, you can move the Comment component tag to inside whatever scrolling element to help position the comment stream correctly.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Add Comment Tool component',
      active: step === 4,
      description: (
        <>
          <strong>The comment tool allows your to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode. In Popover mode, you must specify a target comment element ID which links the tool to that element.</p>
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
import { SnippylyComments, SnippylyCommentTool } from '@snippyly/react';

export default function App() {

  return (
    <>
      <SnippylyComments
        streamMode={true}
        streamViewContainerId="scrolling-comment-stream"
      />

      <div id="scrolling-comment-stream">
        <!-- This element is scrollable -->
      </div>

      <div class="toolbar">
        <SnippylyCommentTool />
      </div>
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}