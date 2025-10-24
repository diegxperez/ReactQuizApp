import s from './finalcard.module.css'
import react from '../../assets/react.svg'

interface Props {
  score: number;
  totalQuestions: number;
  onResetGame: () => void;
}

export const FinalCard: React.FC<Props> = ({ score, totalQuestions, onResetGame }) => {
  return (
    <div className={s.card}>
      <figure className={s.card__figure}>
        <img src={react} alt="react logo" />
      </figure>
      <h1 className={s.card__title}>¡Quiz Completado!</h1>
      <p className={s.card__description}>¡Excelente trabajo! Dominas React muy bien</p>
      <p className={s.card__points}>{score}/{totalQuestions}</p>
      <p className={s.card__califications}>{(score / totalQuestions) * 100}% Correctas</p>
      <button
        onClick={onResetGame}
        className={s.card__submit}
      >Intentar de Nuevo</button>
    </div>
  )
}
