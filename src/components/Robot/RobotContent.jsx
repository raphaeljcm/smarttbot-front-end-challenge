import styles from './robotContent.module.scss';

export function RobotContent() {
  let currentStatus = false;

  return (
    <div className={styles.robot_content}>
      <span>
        30
      </span>

      <div>
        <p>WING20</p>
        <p>Compra</p>
      </div>

      <div>
        <p>114.083.33</p>
        <div className={currentStatus ? `${styles.positive}` : `${styles.negative}`}>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.242188 4.06049L3.91662 0L7.74065 3.93832L0.242188 4.06049Z" fill="#00B39D"/>
          </svg>
          <span>R$32,33</span>
        </div>
      </div>
    </div>
  );
}