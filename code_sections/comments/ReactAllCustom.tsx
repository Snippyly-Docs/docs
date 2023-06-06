
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[12, 14]],
    2: [[16, 18], [21, 21]],
    3: [[22, 22]],
    4: [[23, 24], [5, 7]],
    5: [[25, 25]],
    6: [[25, 25]],
    7: [[26, 26]],
    8: [[27, 27]],
    9: [[28, 28]],
    10: [[29, 29]],
    11: [[30, 30]],
    12: [[31, 31]],
    13: [[32, 32]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Disable comments on certain elements',
      active: step === 1,
      description: (
        <>
          <strong>Add <code>data-snippyly-comment-disabled</code> attribute to elements to disable commenting on those elements.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Allow comments only on certain elements',
      active: step === 2,
      description: (
        <>
          <strong>Provide a list of element IDs where commenting should be allowed.</strong>
          <p>Comments will be disabled for all other elements that is not passed in the array.
            Note, this does not impact Popover mode.
          </p>
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
          <p>By default, when a user adds a comment it is visible to all authenticated users on the same <code>document</code>.
            Moderator mode makes visibility of all comments private to only <code>admin</code> users and the comment author.
            Admin users will see an <b>approve</b> button to approve the comment.
            <br /><br />
            You can set some users as <code>admin</code> by setting the <code>isAdmin</code> property in the <code>User</code> object, during the <code>identify()</code> call.
          </p>
        </>
      )
    },
    {
      step: 4,
      title: 'Show sign In button when user is anonymous or signed out',
      active: step === 4,
      description: (
        <>
          <strong>Show sign-in button on the comment dialog when the user is not logged in or is anonymous.</strong>
          <p>When the user clicks on the sign in button, we will publish an event called <code>signIn</code> so that you listen to it and hook it with your sign in method.
          </p>
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
          <p>When this is on, users can attach images files to their comments. Users can download or delete an attachment.
            Users can attach multiple files at once. <br /> <br />
            Currently we support <code>.png, .jpg, .gif (static & animated), .svg</code> file types upto 2MB per file.
          </p>
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
          <strong>This appears in the comment sidebar and on comment pin annotations.</strong>
          <p>When this is on, we show a small icon indicating the comment index in the order of creation date.
            This enables users to find and navigate to the desired comment quickly.
          </p>
        </>
      )
    },
    {
      step: 8,
      title: 'Enable priority',
      active: step === 8,
      description: (
        <>
          <strong>This adds a priority dropdown to the comments. </strong>
          <p>Users can add a priorty to each comment & filter comment by priorty in the sidebar. By default, this feature is off.
            You can customize the list of priorities (shown in the next section).
          </p>
        </>
      )
    },
    {
      step: 9,
      title: 'Enable or disable status dropdown',
      active: step === 9,
      description: (
        <>
          <strong>Enable or disable the default status dropdown & filter.</strong>
          <p>By default, this feature is on. You can programatically enable or disable this feature.
            You can customize the list of statuses (shown in the next section).</p>
        </>
      )
    },
    {
      step: 10,
      title: 'Enable auto-categorize',
      active: step === 10,
      description: (
        <>
          <strong>You can enable AI auto-categorization of comments.</strong>
          <p>Be default, this feature is off. We use AI to analyze your comment content and
            auto-categorize it so users can filter comments easily.
            You can customize the list of pre-defined categories (shown in the next section) and we will apply a category from that list.</p>
        </>
      )
    },
    {
      step: 11,
      title: 'Disable dialog on hover',
      active: step === 11,
      description: (
        <>
          <strong>Disables the comment dialog on hover over a comment pin or target element</strong>
          <p>By default, the comment dialog preview will open on hovering on a comment pin or a target element.</p>
        </>
      )
    },
    {
      step: 12,
      title: 'Disable dialog on target element click',
      active: step === 12,
      description: (
        <>
          <strong>Disables the comment dialog to open when popover target element is clicked. This is relevant only for Popover mode.</strong>
          <p>By default, clicking the popover target element opens the comment dialog.</p>
        </>
      )
    },
    {
      step: 13,
      title: 'Disable floating comments mode',
      active: step === 13,
      description: (
        <>
          <strong>By default, we show a floating comment dialog next to comment annotations.</strong>
          <p>You can disable this feature altogether, for example if you only want to use stream or inbox mode exclusively.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyComments } from '@snippyly/react';

export default function App() {

  const yourSignInMethod = async () => {    
    // Add your sign in logic here
  };

  return (
    <>

      <div data-snippyly-comment-disabled>
        // This element cannot be commented on
      </div>

      <div id="some-element">
        // This element is can be commented on
      </div>

      <SnippylyComments
        allowedElementIds={['some-element']}
        moderatorMode={true}
        signInButton={true}
        onSignIn={() => yourSignInMethod()}
        allowAttachments={true}
        showDeviceInfo={true}
        showCommentIndex={true}
        showPriority={true}
        showStatus={false}
        autoCategorize={true}
        disableDialogOnHover={true}
        disableDialogOnClick={true}
        floatingCommentsMode={false}
      />

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}