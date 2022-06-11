import commomStyles from '../../styles/common.module.scss';
import styles from './addNewRobot.module.scss';

import addRobotIcon from '../../assets/add-robot.svg';

export function AddNewRobot({ onOpenAddNewRobotModal }) {
  return (
    <section className={`${commomStyles.container} ${styles.addRobot}`}>
      <button type='button' aria-label='clique aqui para adicionar um robo' onClick={onOpenAddNewRobotModal}>
        <img src={addRobotIcon} alt="um robô" />
      </button>
      <div>
        <h2>Adicionar novo Robô</h2>
        <p>Você possui <span>02 Robôs</span> disponíveis</p>
      </div>
    </section>
  );
}

// Maybe change the div to a button later