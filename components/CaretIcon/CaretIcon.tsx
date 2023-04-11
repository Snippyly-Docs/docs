import styles from './CaretIcon.module.scss';

interface CaretProps {
  open: boolean;
}

export default function CaretIcon({ open = false }: CaretProps) {
  if (open) {
    return (
      <svg className={styles.icon} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.49445 0.308022C8.55256 0.249912 8.62154 0.203817 8.69747 0.172368C8.77339 0.140919 8.85477 0.124733 8.93695 0.124733C9.01913 0.124733 9.1005 0.140919 9.17643 0.172368C9.25235 0.203817 9.32134 0.249912 9.37945 0.308022C9.43756 0.366132 9.48365 0.435119 9.5151 0.511043C9.54655 0.586967 9.56274 0.668342 9.56274 0.750522C9.56274 0.832702 9.54655 0.914077 9.5151 0.990001C9.48365 1.06593 9.43756 1.13491 9.37945 1.19302L5.44195 5.13052C5.32474 5.24769 5.1658 5.31351 5.00007 5.31351C4.83435 5.31351 4.6754 5.24769 4.5582 5.13052L0.620698 1.19302C0.50334 1.07558 0.437441 0.91633 0.4375 0.750301C0.437559 0.584273 0.503569 0.425068 0.62101 0.30771C0.738452 0.190351 0.897703 0.124453 1.06373 0.124512C1.22976 0.12457 1.38896 0.190581 1.50632 0.308022L5.00007 3.8024L8.49445 0.308022Z" fill="#687385" />
      </svg>
    );
  }
  return (
    <svg className={styles.icon} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.308198 1.69302C0.19084 1.57558 0.124941 1.41633 0.125 1.2503C0.125059 1.08427 0.191069 0.925068 0.308511 0.80771C0.425952 0.690351 0.585203 0.624453 0.751231 0.624512C0.91726 0.62457 1.07646 0.690581 1.19382 0.808022L5.13132 4.74552C5.24849 4.86273 5.31431 5.02167 5.31431 5.1874C5.31431 5.35313 5.24849 5.51207 5.13132 5.62927L1.19382 9.56677C1.07646 9.68413 0.917293 9.75006 0.751323 9.75006C0.585353 9.75006 0.426181 9.68413 0.308823 9.56677C0.191465 9.44941 0.125534 9.29024 0.125534 9.12427C0.125533 8.9583 0.191465 8.79913 0.308823 8.68177L3.80257 5.1874L0.308198 1.69302Z" fill="#687385" />
    </svg>
  );
}