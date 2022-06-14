import { useRobot } from '../../hooks/useRobot';
import styles from './robotBox.module.scss';
import { RobotContent } from './RobotContent';
import { RobotFooter } from './RobotFooter';
import { RobotLabel } from './RobotLabel';
import { ClipLoader } from 'react-spinners';

export function RobotBox() {
  const { robots, addedRobots } = useRobot();  

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
      
            { robot?.last_paper ? (
              <RobotContent  
                position={robot.last_paper.position}
                paper={robot.last_paper.paper}
                type={robot.last_paper.type}
                paper_value={robot.last_paper.paper_value}
                profit={robot.last_paper.profit}
              />
            ) : (
              <RobotContent isEmptyData />
            ) }
      
            <RobotFooter daily_balance={robot.daily_balance} number_trades={robot.number_trades} />
          </div>
        ))   
        : (
        <>
          <ClipLoader size={25} color='#00B39D' /> <span>Carregando robôs...</span>
        </>
      )}
      
      { addedRobots && 
        addedRobots.map(robot => (
          <div key={robot.data.id} className={styles.robot_box}>
            <header>
              <h2>{ robot.data.title }</h2>
              <div>
                <div className={ robot.data.running === 1 ? `${styles.green}`: `${styles.red}`}></div>
                <span>{ robot.data.running === 1 ? 'Em execução' : 'Parado' }</span>
              </div>
            </header>
      
            <p>#{robot.data.id}</p>
      
            <div>
              <RobotLabel value={ robot.data.simulation === 0 ? 'Otimista' : 'Pessimista' } />
              <RobotLabel value={ robot.data.stock_codes } />
              <RobotLabel value={ robot.data.type } />
            </div>
      
            { robot.data?.last_paper ? (
              <RobotContent  
                position={robot.data.last_paper.position}
                paper={robot.data.last_paper.paper}
                type={robot.data.last_paper.type}
                paper_value={robot.data.last_paper.paper_value}
                profit={robot.data.last_paper.profit}
              />
            ) : (
              <RobotContent isEmptyData />
            ) }
      
            <RobotFooter daily_balance={robot.data.daily_balance} number_trades={robot.data.number_trades} />
          </div>
        ))}
    </>
  );
}