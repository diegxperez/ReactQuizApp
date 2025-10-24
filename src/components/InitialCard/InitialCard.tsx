import s from './initialcard.module.css'
import react from '../../assets/react.svg'
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  questions: number;
  onStartGame: () => void;
}

export const InitialCard: React.FC<Props> = ({ title, description, questions, onStartGame }) => {
  return (
    <div className={s.card}>
      <figure className={s.card__figure}>
        <img src={react} alt="react logo" />
      </figure>
      <h1 className={s.card__title}>{title ?? 'Quiz de React'}</h1>
      <p className={s.card__description}>{description ?? 'Prueba tus conocimientos sobre React'}</p>
      <p className={s.card__questions}>{questions} Preguntas</p>
      <button
        onClick={onStartGame}
        className={s.cta}>
        Comenzar Quiz
      </button>
    </div>
  )
}
