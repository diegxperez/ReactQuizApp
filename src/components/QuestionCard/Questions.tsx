// import type { Question } from '../../type/question.interface'
import { OptionsCar } from '../OptionsCards/OptionsCards'
import s from './questions.module.css'
import { mockQuestions as questions } from '../../mock-data/questions.mock'

interface Props {
  numberQuestion: number;
}


export const Questions: React.FC<Props> = ({ numberQuestion }) => {
  return (
    <div className={s.container}>
      <div className={s.progressbar}>
        <div className={s.progressbar__indicator}>
          <p>Pregunta 1 de 10</p>
          <p>10%</p>
        </div>

        <div className={s.progressbar__container}>
          <div className={s.progressbar__filler} />
        </div>
      </div>
      <OptionsCar numberQuestion={numberQuestion} questions={questions} />
    </div>

  )
}
