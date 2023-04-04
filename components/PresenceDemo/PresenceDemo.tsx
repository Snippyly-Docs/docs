import styles from './PresenceDemo.module.scss';
import { SnippylyPresence, SnippylyProvider, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';
import { generateUserData } from '../../components/user';
import { documentID } from '../../components/documentID';
import DemoContainer from '../DemoContainer/DemoContainer';

export default function PresenceDemo(props: any) {

  const { client } = useSnippylyClient();

  useEffect(() => {

    console.log(client)

    if (client) {

      const documentId = documentID('documentation');
      client.setDocumentId(documentId);

      const yourLoggedInUser = generateUserData();
      client
        .identify(yourLoggedInUser)
        .then((res) => {
          // User auth successful with Snippyly
          console.log(yourLoggedInUser);
        })
        .catch((err) => {
          console.log(err);
        });

    }

  }, [client]);

  return (
    <DemoContainer>
      <SnippylyPresence></SnippylyPresence>
    </DemoContainer>
  );
}