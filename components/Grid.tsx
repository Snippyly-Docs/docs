import styles from './Grid.module.css'

function Grid({children}) {

  return (
    <div className={styles.gridContainer}>
      {children}
    </div>
  );
}

export default Grid;