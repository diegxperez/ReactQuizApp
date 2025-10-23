// import type { Question } from '../../type/question.interface'
import { OptionsCard } from '../OptionsCards/OptionsCards'
import s from './questions.module.css'
import type { Question } from '../../type/question.interface';
import type { GameStatus } from '../../type/gamestatus.interface';

interface Props {
  currentQuestionNumber: number;
  questions: Question[]
  handleNextQuestion: () => void;
  handleGameState: (state: GameStatus) => void;
  handleCountScore: () => void;
}

export const Questions: React.FC<Props> = ({ currentQuestionNumber, questions, handleNextQuestion, handleGameState, handleCountScore }) => {
  const indexQuestion = currentQuestionNumber + 1;
  const progressPercentage = Math.round((indexQuestion / questions.length) * 100);

  return (
    <div className={s.container}>
      <div className={s.progressbar}>
        <div className={s.progressbar__indicator}>
          <p>Pregunta {indexQuestion} de {questions.length}</p>
          <p>{(indexQuestion / questions.length) * 100}%</p>
        </div>

        <div className={s.progressbar__container}>
          <div
            style={{ width: `${progressPercentage}%` }}
            className={s.progressbar__filler} />
        </div>
      </div>
      <OptionsCard
        numberQuestion={currentQuestionNumber}
        questions={questions}
        handleNextQuestion={handleNextQuestion}
        handleGameState={handleGameState}
        handleCountScore={handleCountScore} />
    </div>

  )
}
