import styles from './robotLabel.module.scss';

export function RobotLabel(props) {
  return (
    <div className={styles.robot_label}>{props.value}</div>
  );
}