// Example from https://beta.reactjs.org/learn

// import { useState } from 'react'
import styles from './SplitPane.module.css';

function SplitPane({children}) {

  return (
    <div className={styles.demoWrapper}>
      {children}
    </div>
  )
}

export default SplitPane;