import shape from '../../assets/combined-shape.svg';

import styles from "./header.module.scss";
import commomStyles from '../../styles/common.module.scss';

export function Header() {
  return (
    <header className={`${commomStyles.container} ${styles.header}`}>
      <img src={shape} alt="shape" />
      <h1>Análise Geral <span>/</span> <span>Principal</span></h1>     
    </header>
  );
}