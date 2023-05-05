import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetSnippylyStep } from '../CommonSteps';

export default function ReactUsers(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[8, 9]],
    3: [[11, 24]],
    4: [[26, 27]],
    5: [[29, 30]],
    6: [[32, 43]],
    7: [[45, 45]],
    8: [[49, 58]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    {
      step: 2,
      title: 'Identify your users',
      active: step === 2,
      description: (
        <>
          <strong>For our SDK to work correctly, we need to identify your users.</strong>
          <p>You should identify users in the same function where you perform user authentication (login).</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Fetch relevant user info',
      active: step === 3,
      description: (
        <>
          <strong>Keep any relevant user info from whatever authentication provider you use.</strong>
          <p>Things like the user name, avatar, and ID can be re-used to identify your users. Create a Snippyly User object, which will be passed to the SDK.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Set a user plan (optional)',
      active: step === 4,
      description: (
        <>
          <strong>We cross-reference this field with the whitelisted user plans in your SDK configuration.</strong>
          <p>You can use this, for example, to restrict our collaboration features only for paid users, admins, etc.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Set a user group (optional)',
      active: step === 5,
      description: (
        <>
          <strong>Users in the same group can tag eachother.</strong>
          <p>They can use the @tag in comments, or assign eachother to tasks.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Manually set user contacts (optional)',
      active: step === 6,
      description: (
        <>
          <strong>An alternative to groups.</strong>
          <p>If user groups are not sufficient for your use-case, you can manually set user contacts to the user being identified.</p>
        </>
      )
    },
    {
      step: 7,
      title: 'Pass the user object to the SDK',
      active: step === 7,
      description: (
        <>
          <strong>Call the <code>identify</code> function.</strong>
          <p>Use the Snippyly client object to pass the user information to our servers.</p>
        </>
      )
    },
    {
      step: 8,
      title: 'Logout the user',
      active: step === 8,
      description: (
        <>
          <strong>Identify when the user logs out.</strong>
          <p>We will remove our UI features from the user's client.</p>
        </>
      )
    }
  ];

  const code = `
import { useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useSnippylyClient();

  // Example login function
  const loginHandler = async () => {
        
    // In this example, we use some auth provider to sign in and get the user's credentials
    const credentials = await authProvider.signInWithGoogle();

    // Fetch the relevant user info by destructuring the credentials
    const { userInfo } = credentials;
    const { uid, displayName, email, photoURL } = userInfo;

    // Create the Snippyly user object
    const user = {
      userId: uid,
      name: displayName,
      email: email,
      photoUrl: photoURL
    };

    // Use your own logic to determine the user's plan
    user.plan = 'premium';

    // Use your own logic to determine the group the user belongs to
    user.groupId = 'developers';

    // You can pass contacts as an array of UserContact objects
    // These contacts will show up in comment tagging and assignment 
    const contacts = [
      {
        userId: 'd5558f1f-bdea-4eb5-9fd5-ed657e460307',
        name: 'John Doe',
        photoUrl: '<some avatar url>',
        email: 'john.doe@snippyly.com',
        groupId: 'developers'
      }
    ];
    user.contacts = contacts;

    client.identify(user);

  };

  // Example logout function
  const logout = async () => {

    // Logout with your auth provider
    await authProvider.signOut();

    // Clear the Snippyly user object
    client.signOutUser();

  };

  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}