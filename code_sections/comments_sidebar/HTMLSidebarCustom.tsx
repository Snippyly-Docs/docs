
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactSidebarCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[20, 25]],
    3: [[13, 13], [27, 30]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Customize navigation for non-URL based navigation',
      active: step === 1,
      description: (
        <>
          <strong>By default, we attempt to navigate the user to the comment location when a user clicks on one in the sidebar.</strong>
          <p>We provide an event where you can return additional context associated with that comment, for example: what current tab or page of a table the comment lives on.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Provide additional context for comment location',
      active: step === 2,
      description: (
        <>
          <strong>The event handler should return any context you want saved.</strong>
          <p>When we return the location data of the comment, you can access the context field that was saved when the comment was created.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Provide an event handler for when a comment is clicked',
      active: step === 3,
      description: (
        <>
          <strong>When a comment is clicked, the handler will be called with the location data of the comment.</strong>
          <p>Using this handler, you can fetch the context and make the necessary state changes to locate the comment correctly.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Comment Sidebar documentation</title>
  </head>
  <body>

    <snippyly-comments
      on-comment-added="onCommentAdded"
    ></snippyly-comments>

    <snippyly-comments-sidebar
      on-comment-click="onCommentClick"
    ></snippyly-comments-sidebar>

    <script>

    let tabIndex = 0;

    function onCommentAdded(_data) {
      // Add additional context to the comment as an object
      return {
        selectedTabIndex: tabIndex
      };
    }

    function onCommentClick(data) {
      const { selectedTabIndex } = comment.context;
      tabIndex = selectedTabIndex;
    }

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}