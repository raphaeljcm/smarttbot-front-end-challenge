import styles from './robotContent.module.scss';

export function RobotContent({ isRunning = false, position, paper, type, paper_value, profit }) {
  return (
    <div className={styles.robot_content}>
      { !isRunning ? (
        <>
          <span>
            {position}
          </span>

          <div>
            <p>{paper}</p>
            <p>{type === 0 ? 'Compra' : 'Venda'}</p>
          </div>

          <div>
            <p>{paper_value}</p>
            <div className={profit > 0 ? `${styles.positive}` : `${styles.negative}`}>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.242188 4.06049L3.91662 0L7.74065 3.93832L0.242188 4.06049Z" fill="#00B39D"/>
              </svg>
              <span>{profit.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}</span>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      ) }
    </div>
  );
}