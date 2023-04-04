import styles from './Step.module.scss';

interface StepProps {
  title: string;
  step: number;
  description: React.ReactNode | string;
  handleClick: (step: number) => void;
  active: boolean;
}


export default function Step({title, description, step, handleClick, active}: StepProps) {

  return (
    <div className={styles.stepContainer}>
      <div className={styles.title}>
        <div className={styles.stepNumber}>{ step.toString() }</div>
        <h1 className={styles.titleText}>{ title }</h1>
      </div>
      <div className={`${styles.description} ${active ? styles.active : ''}`} onClick={() => handleClick(step)}>
        { description }
      </div>
    </div>
  );

}