import styles from './DemoContainer.module.scss';

export default function DemoContainer(props) {
  return (
    <div className={styles.demoContainer}>
      {props.children}
    </div>
  );
}