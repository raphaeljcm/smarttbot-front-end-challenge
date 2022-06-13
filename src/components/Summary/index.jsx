import { useEffect, useState } from 'react';
import commomStyles from '../../styles/common.module.scss';
import styles from './summary.module.scss';
import { SummaryContent } from './SummaryContent';
import { api } from "../../services/api";

export function Summary() {
  const [summary, setSummary] = useState();

  useEffect(() => {
    (async function() {
      try {
        await api.get('/overview').then(response => setSummary(response.data.data));
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

  return (
    <section className={`${commomStyles.container} ${styles.summary}`}>
      { summary ? (
        <>
          <h2>Resumo geral operações</h2>

          <div className={styles.container}>
            <div>
              <div className={styles.movement}>
                <h3>Resumo de Movimentação</h3>
                <span>{summary.moviment_summary.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}</span>
              </div>
              <div className={styles.total_transactions}>
                <h3>Total de transações realizadas</h3>
                <span>{summary.transactions}</span>
              </div>
            </div>

            <hr />

            
            <div className={styles.content}>
              <h3>Painéis negociados</h3>

              <div>
                <div className={styles.box}>
                  { summary.papers.slice(0, 3).map(each => (
                    <SummaryContent key={each.name} name={each.name} transactions={each.trasactions} />
                  ))}
                </div>
                <div className={styles.box}>
                  { summary.papers.slice(3).map(each => (
                    <SummaryContent key={each.name} name={each.name} transactions={each.trasactions} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>Carregando dados...</h2>
      )}
    </section>
  );  
}