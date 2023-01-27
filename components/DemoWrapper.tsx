// Example from https://beta.reactjs.org/learn

// import { useState } from 'react'
import styles from './DemoWrapper.module.css';

function DemoWrapper({children}) {

  return (
    <div className={styles.demoWrapper}>
      {children}
    </div>
  )
}

export default DemoWrapper;