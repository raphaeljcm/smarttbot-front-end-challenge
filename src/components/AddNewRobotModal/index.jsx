import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import closeModal from '../../assets/close.svg';
import { api } from '../../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";

import styles from './modal.module.scss';
import { useRobot } from "../../hooks/useRobot";

const createRobotFromSchema = yup.object().shape({
  title: yup.string().required('Nome do produto obrigatório'),
  initial_capital: yup.number().required('Capital inicial obrigatório')
});

export function AddNewRobotModal({ isOpen, onRequestClose }) {
  const [type, setType] = useState('tangram');
  const { register, handleSubmit, formState, resetField } = useForm({ resolver: yupResolver(createRobotFromSchema) });
  const { errors } = formState;
  const { setAddedRobots } = useRobot();

  async function handleCreateRobot(data) {
    try {
      const result = await api.post('/', {
        ...data,
        strategy_id: type === 'tangram' ? 2 : 1,
        simulation: 0,
        broker_id: 1,
        mode: 0
      });

      setAddedRobots(previous => [...previous, result.data]);

      toast.success('Robô adicionado com sucesso!');
      resetField('title');
      resetField('initial_capital');
      onRequestClose();
    } catch(err) {
      toast.error(err.message);
    }
  }

  function handleError(errorName) {
    switch (errorName) {
      case 'title':
        toast.error(errors.title.message);
        break;
      case 'capital':
        toast.error(errors.initial_capital.message);
        break;
      default:
        break;
    }
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

      <form className={styles.modal_form} onSubmit={handleSubmit(handleCreateRobot)}>
        <h1>Vamos criar seu robô</h1>
        <p>Preencha as informações abaixo:</p>

        <label htmlFor="product-name">Nome do produto</label>
        <input 
          type="text" 
          id="product-name" 
          placeholder="Nome do produto" 
          name="title" 
          {...register('title')}
        />
        { errors.title && handleError('title') }

        <label htmlFor="initial-capital">Capital inicial do robô</label>
        <input 
          type="number" 
          id="initial-capital" 
          placeholder="R$" 
          step={10} 
          name="initial_capital"
          {...register('initial_capital')}
        />
        { errors.initial_capital && handleError('capital') }

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