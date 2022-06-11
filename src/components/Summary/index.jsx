import commomStyles from '../../styles/common.module.scss';
import styles from './summary.module.scss';
import { SummaryContent } from './SummaryContent';

export function Summary() {
  return (
    <section className={`${commomStyles.container} ${styles.summary}`}>
      <h2>Resumo geral operações</h2>

      <div className={styles.container}>
        <div>
          <div className={styles.movement}>
            <h3>Resumo de Movimentação</h3>
            <span>-R$220,00</span>
          </div>
          <div className={styles.total_transactions}>
            <h3>Total de transações realizadas</h3>
            <span>443</span>
          </div>
        </div>

        <hr />

        
      <div className={styles.content}>
        <h3>Painéis negociados</h3>

        <div>
          <div className={styles.box}>
            <SummaryContent />
            <SummaryContent />
            <SummaryContent /> 
          </div>
          <div className={styles.box}>
            <SummaryContent />
            <SummaryContent />
            <SummaryContent /> 
          </div>
        </div>
      </div>

      </div>
    </section>
  );  
}