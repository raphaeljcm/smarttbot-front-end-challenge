import commomStyles from '../../styles/common.module.scss';
import styles from './addNewRobot.module.scss';

import addRobotIcon from '../../assets/add-robot.svg';
import { useRobot } from '../../hooks/useRobot';

export function AddNewRobot({ onOpenAddNewRobotModal }) {
  const { addedRobots } = useRobot();
  const totalRobotsRemaining = 3 - addedRobots.length;

  return (
    <section className={`${commomStyles.container} ${styles.addRobot}`}>
      <button 
        type='button' 
        aria-label='clique aqui para adicionar um robo' 
        onClick={onOpenAddNewRobotModal}
        disabled={totalRobotsRemaining === 0 ? true : false}
      >
        <img src={addRobotIcon} alt="um robô" />
      </button>
      <div>
        <h2>Adicionar novo Robô</h2>
        <p>Você possui <span>{ totalRobotsRemaining } {totalRobotsRemaining === 1 ? 'Robô ' : 'Robôs '}</span> 
          { totalRobotsRemaining === 1 ? 'disponível' : 'disponíveis' }
        </p>
      </div>
    </section>
  );
}

// Maybe change the div to a button later