import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../CommonSteps';

export default function ReactContactList(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[20, 20]],
    2: [[24, 33]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set a user group (optional)',
      active: step === 1,
      description: (
        <>
          <strong>Users in the same group can tag each other.</strong>
          <p>They can use the @tag in comments, or assign each other to tasks.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Manually set user contacts (optional)',
      active: step === 2,
      description: (
        <>
          <strong>An alternative to groups.</strong>
          <p>If user groups are not sufficient for your use-case, you can manually set user contacts to the user being identified.</p>
        </>
      )
    },
  ];

  const code = `
import { useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useSnippylyClient();

  useEffect(() => {
    if (client && yourAuthenticatedUser) {
      const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

      const user = {
        userId: uid,
        name: displayName,
        email: email,
        photoUrl: photoURL
      };

      // Use your own logic to determine the group the user belongs to
      user.groupId = 'some-group-id';

      // You can pass contacts as an array of UserContact objects.
      // These contacts will show up in various features (eg: comments) so that user can tag, @mention them. 
      const contacts = [
        {
          userId: 'd5558f1f-bdea-4eb5-9fd5-ed657e460307',
          name: 'John Doe',
          photoUrl: 'https://i.pravatar.cc/300',
          email: 'john.doe@snippyly.com',
          groupId: 'some-group-id'
        }
      ];
      user.contacts = contacts;

      client.identify(user);
    }
  }, [client, yourAuthenticatedUser]);

  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}