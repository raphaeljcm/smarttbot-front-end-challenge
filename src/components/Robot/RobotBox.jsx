import { useRobot } from '../../hooks/useRobot';
import styles from './robotBox.module.scss';
import { RobotContent } from './RobotContent';
import { RobotFooter } from './RobotFooter';
import { RobotLabel } from './RobotLabel';

export function RobotBox() {
  const { robots } = useRobot();  
  console.log(robots.data)

  return (
    <>
      { robots.data ? 
        robots.data.map(robot => (
          <div key={robot.id} className={styles.robot_box}>
            <header>
              <h2>{ robot.title }</h2>
              <div>
                <div className={ robot.running === 1 ? `${styles.green}`: `${styles.red}`}></div>
                <span>{ robot.running === 1 ? 'Em execução' : 'Parado' }</span>
              </div>
            </header>
      
            <p>#{robot.id}</p>
      
            <div>
              <RobotLabel value={ robot.simulation === 0 ? 'Otimista' : 'Pessimista' } />
              <RobotLabel value={ robot.stock_codes } />
              <RobotLabel value={ robot.type } />
            </div>
      
            { robot.running === 0 ? (
              <RobotContent  
                position={robot.last_paper.position}
                paper={robot.last_paper.paper}
                type={robot.last_paper.type}
                paper_value={robot.last_paper.paper_value}
                profit={robot.last_paper.profit}
              />
            ) : (
              <RobotContent isRunning />
            ) }
      
            <RobotFooter daily_balance={robot.daily_balance} number_trades={robot.number_trades} />
          </div>
        ))
      : (
        <h2>Loading...</h2>
      )}
    </>
  );
}