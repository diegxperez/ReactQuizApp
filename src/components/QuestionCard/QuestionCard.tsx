import s from './questions.module.css'
import type { Question } from '../../type/question.interface';
import { OptionsCard } from '../OptionsCard/OptionsCard';

interface Props {
  currentQuestionIndex: number;
  questions: Question[]
  onGoToNextQuestion: () => void;
  onFinishGame: () => void;
  onIncrementScore: () => void;
}

export const QuestionCard: React.FC<Props> = ({ currentQuestionIndex, questions, onGoToNextQuestion, onFinishGame, onIncrementScore }) => {
  const indexQuestion = currentQuestionIndex + 1;
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
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
        onGoToNextQuestion={onGoToNextQuestion}
        onFinishGame={onFinishGame}
        onIncrementScore={onIncrementScore} />
    </div>
  )
}
