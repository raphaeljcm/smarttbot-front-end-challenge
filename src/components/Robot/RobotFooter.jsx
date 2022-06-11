import arrowDown from '../../assets/arrow-down.svg';
import styles from './robotFooter.module.scss';

export function RobotFooter() {
  let currentBalance = true;

  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <p>Saldo diário</p>
          <img src={arrowDown} alt="arrow down" />
        </div>
        <p className={currentBalance ? `${styles.positive}` : `${styles.negative}`}>R$120,00</p>
      </div>

      <div>
        <p>Trades do dia</p>
        <p>4</p>
      </div>
    </footer>
  );
}