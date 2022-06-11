import commomStyles from '../../styles/common.module.scss';
import styles from './addNewRobot.module.scss';

import addRobotIcon from '../../assets/add-robot.svg';

export function AddNewRobot() {
  return (
    <section className={`${commomStyles.container} ${styles.addRobot}`}>
      <div aria-label='clique aqui para adicionar um robo'>
        <img src={addRobotIcon} alt="um robô" />
      </div>
      <div>
        <h2>Adicionar novo Robô</h2>
        <p>Você possui <span>02 Robôs</span> disponíveis</p>
      </div>
    </section>
  );
}