import s from './initialcard.module.css'
import react from '../../assets/react.svg'
import React from 'react';
import type { GameStatus } from '../../type/gamestatus.interface';

interface Props {
  title?: string;
  description?: string;
  questions: number;
  handleGameStatus: (status: GameStatus) => void;
}

export const InitialCard: React.FC<Props> = ({ title, description, questions, handleGameStatus }) => {
  return (
    <div className={s.card}>
      <figure className={s.card__figure}>
        <img src={react} alt="react logo" />
      </figure>
      <h1 className={s.card__title}>{title ?? 'Quiz de React'}</h1>
      <p className={s.card__description}>{description ?? 'Prueba tus conocimientos sobre React'}</p>
      <p className={s.card__questions}>{questions} Preguntas</p>
      <button
        onClick={() => handleGameStatus('playing')}
        className={s.cta}>
        Comenzar Quiz
      </button>
    </div>
  )
}
