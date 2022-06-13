import arrowDown from '../../assets/arrow-down.svg';
import styles from './robotFooter.module.scss';

export function RobotFooter({ daily_balance, number_trades }) {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <p>Saldo diário</p>
          <img src={arrowDown} alt="arrow down" />
        </div>
        <p className={daily_balance > 0 ? `${styles.positive}` : `${styles.negative}`}>
          { daily_balance.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
      </div>

      <div>
        <p>Trades do dia</p>
        <p>{number_trades}</p>
      </div>
    </footer>
  );
}