
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 9], [18, 20]],
    2: [[22, 24]],
    3: [[10, 10]],
    4: [[11, 11]],
    5: [[12, 12]],
    6: [[13, 13]],
    7: [[14, 14]],
    8: [[15, 15]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Whitelist certain elements',
      active: step === 1,
      description: (
        <>
          <strong>You can pass allowed element IDs to our Comments component.</strong>
          <p>This does not impact Popover mode. Comments will be disabled for every other element that is not passed in the array.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Blacklist certain elements',
      active: step === 2,
      description: (
        <>
          <strong>Add a data attribute.</strong>
          <p>If you only want to disallow commenting on certain elements, add the <code>data-snippyly-comment-disabled</code> attribute to that element.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Enable moderator mode',
      active: step === 3,
      description: (
        <>
          <strong>Allow admins to approve comments.</strong>
          <p>This requires comments to first be approved by admins before they are visible.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Enable the sign-in button',
      active: step === 4,
      description: (
        <>
          <strong>This appears on the comment dialog.</strong>
          <p>We will provide a sign-in button for users that are not currently logged in.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Enable comment attachments',
      active: step === 5,
      description: (
        <>
          <strong>Toggle on/off comment attachments.</strong>
          <p>When this is on, users can attach webcam/screen/audio recordings, files, and images to their comments.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Enable device information',
      active: step === 6,
      description: (
        <>
          <strong>Show each commenter's device type.</strong>
          <p>When this is on, we show a small icon indicating what type of device the comment was created on.</p>
        </>
      )
    },
    {
      step: 7,
      title: 'Show comment index',
      active: step === 7,
      description: (
        <>
          <strong>This appears in the sidebar and on comment pin annotations.</strong>
          <p>When this is on, we show a small icon indicating the comment index in the order of creation date.</p>
        </>
      )
    },
    {
      step: 8,
      title: 'Enable priority',
      active: step === 8,
      description: (
        <>
          <strong>You can prioritize and filter comments.</strong>
          <p>By default, this feature is off. We also allow you to customize the list of priorities (shown below in the customize section).</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyComments } from '@snippyly/react';

export default function App() {

  return (
    <>

      <SnippylyComments
        allowedElementIds={['some-element']}
        moderatorMode={true}
        signInButton={true}
        allowAttachments={true}
        showDeviceInfo={true}
        showCommentIndex={true}
        showPriority={true}
      />

      <div id="some-element">
        // This element is can be commented on
      </div>

      <div data-snippyly-comment-disabled>
        // This element cannot be commented on
      </div>

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}