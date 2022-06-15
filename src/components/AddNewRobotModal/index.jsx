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
  initial_capital: yup.number().positive('O número precisa ser positivo').required('Capital inicial obrigatório')
});

export function AddNewRobotModal({ isOpen, onRequestClose }) {
  const [type, setType] = useState('tangram');
  const { register, handleSubmit, resetField } = useForm({ resolver: yupResolver(createRobotFromSchema) });
  const { setAddedRobots } = useRobot();

  async function handleCreateRobot(data) {
    try {
      const result = await api.post('/', {
        ...data,
        strategy_id: type === 'raptor' ? 1 : 2,
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

  function handleError(errors) {
    if(errors) {
      if(errors.title) {
        toast.error(errors.title.message);
      }
  
      if(errors.initial_capital) {
        toast.error(errors.initial_capital.message);
      }
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

      <form className={styles.modal_form} onSubmit={handleSubmit(handleCreateRobot, handleError)}>
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

        <label htmlFor="initial-capital">Capital inicial do robô</label>
        <input 
          type="number" 
          id="initial-capital" 
          placeholder="R$" 
          step={10} 
          name="initial_capital"
          {...register('initial_capital')}
        />

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
            className={type === 'raptor' ? `${styles.active}` : ''}
            onClick={() => setType('raptor')}
          >
            Raptor
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