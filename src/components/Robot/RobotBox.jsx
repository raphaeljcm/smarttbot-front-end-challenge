import styles from './robotBox.module.scss';
import { RobotContent } from './RobotContent';
import { RobotFooter } from './RobotFooter';
import { RobotLabel } from './RobotLabel';

export function RobotBox() {
  const test = true;

  return (
    <div className={styles.robot_box}>
      <header>
        <h2>Título do Robô</h2>
        <div>
          <div className={test ? `${styles.green}`: `${styles.red}`}></div>
          <span>Em execução</span>
        </div>
      </header>

      <p>#1722301</p>

      <div>
        <RobotLabel value='Pessimista' />
        <RobotLabel value='WIN%' />
        <RobotLabel value='Price action' />
      </div>

      <RobotContent />

      <RobotFooter />
    </div>
  );
}