import styles from './PresenceDemo.module.scss';
import { SnippylyPresence, SnippylyProvider, useSnippylyClient } from '@snippyly/react';
import { useEffect } from 'react';
import { generateUserData } from '../../components/user';
import { documentID } from '../../components/documentID';
import DemoContainer from '../DemoContainer/DemoContainer';

interface PresenceDemoProps {
  naked?: boolean;
}

export default function PresenceDemo(props: PresenceDemoProps) {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (client) {
      client.setDocumentId('presence-docs');

      const yourLoggedInUser = generateUserData();
      client
        .identify(yourLoggedInUser)
        .then((res) => {
          // User auth successful with Snippyly
          // console.log(client.getPresenceElement().presenceService.presenceUsers$.value);
        }) 
        .catch((err) => {
          console.log(err); 
        });
    }

  }, [client]);

  if (props.naked) {
    return <SnippylyPresence></SnippylyPresence>
  }

  return (
    <DemoContainer>
      <SnippylyPresence></SnippylyPresence>
    </DemoContainer>
  );
}