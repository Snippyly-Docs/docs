import React, { useState } from 'react';
import styles from './SplitPane.module.scss';

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}


export default function SplitPane(props: SplitPaneProps) {

  return (
    <div className={styles.splitPane}>
      <div className={styles.left}>{props.left}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  );
}
