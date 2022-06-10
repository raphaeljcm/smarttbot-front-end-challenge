import commomStyles from '../styles/common.module.scss';
import '../styles/summary.scss';

export function Summary() {
  return (
    <section className={commomStyles.container}>
      <h2>Resumo geral operações</h2>

      <div>
        <div className="summary-header">
          <div>
            <h3>Resumo de Movimentação</h3>
            <span>-R$220,00</span>
          </div>
          <div>
            <h3>Total de transações realizadas</h3>
            <span>443</span>
          </div>
        </div>

        <div className="summary-content">
          <h3>Painéis negociados</h3>

          <div className="summary-content-box">
            <div className="summary-content-row">
              <div>WING20</div>
              ---------------------------------------
              <span>157</span>
              transações
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}