import type { Question } from '../../type/question.interface'
import s from './optionscard.module.css'

interface Props {
  questions: Question[];
  numberQuestion: number;
}

export const OptionsCar: React.FC<Props> = ({ questions, numberQuestion }) => {
  return (
    <div className={s.card}>
      <p className={s.card__questionCount}>Pregunta {numberQuestion}</p>
      <h2 className={s.card__questionText}>{questions[numberQuestion].question}</h2>
      <div className={s.card__options}>
        {
          questions[numberQuestion].answers.map((question, index) => (
            <button key={index} className={s.card__optionButton}>{question.answer}</button>
          ))
        }
      </div>
    </div>
  )
}
