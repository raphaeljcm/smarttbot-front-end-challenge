import { useState } from "react";
import ReactModal from "react-modal";
import closeModal from '../../assets/close.svg';

import styles from './modal.module.scss';

export function AddNewRobotModal({ isOpen, onRequestClose }) {
  const [type, setType] = useState('tangram');

  function handleCreateRobot(event) {
    event.preventDefault();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <p>Adicionar novo Robô</p>
      <button 
        type="button" 
        onClick={onRequestClose} 
        className='react-modal-close'
      >
        <img src={closeModal} alt="fechar modal" />
      </button>

      <form className={styles.modal_form} onSubmit={handleCreateRobot}>
        <h1>Vamos criar seu robô</h1>
        <p>Preencha as informações abaixo:</p>

        <label htmlFor="product-name">Nome do produto</label>
        <input type="text" id="product-name" placeholder="Nome do produto" />
        <label htmlFor="initial-capital">Capital inicial do robô</label>
        <input type="number" id="initial-capital" placeholder="R$" />

        <h2>Selecione uma das estratégias abaixo</h2>
        
        <div>
          <button
            type="button"
            className={type === 'tangram' ? `${styles.active}` : ''}
            onClick={() => setType('tangram')}
          >
            Tangram
          </button>

          <button
            type="button"
            className={type === 'price_action' ? `${styles.active}` : ''}
            onClick={() => setType('price_action')}
          >
            Price Action
          </button>
        </div>

        <div>
          <button 
            type="button" 
            onClick={onRequestClose}
            className={styles.cancelar}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className={styles.submit}
          >
            Criar robô
          </button>
        </div>
      </form>

    </ReactModal>
  );
}