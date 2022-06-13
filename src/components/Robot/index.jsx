import styles from './robot.module.scss';
import { RobotBox } from './RobotBox';

export function Robot() {
  return (
    <section className={styles.robot_container}>
      <RobotBox />
    </section>
  );
}