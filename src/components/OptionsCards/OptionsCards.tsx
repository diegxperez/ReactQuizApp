import type { Question } from '../../type/question.interface'
import s from './optionscard.module.css'
import { cn } from '../../util/classNames';
import { useState } from 'react';
import type { GameStatus } from '../../type/gamestatus.interface';
import { toast } from 'sonner';

interface Props {
  questions: Question[];
  numberQuestion: number;
  handleNextQuestion: () => void;
  handleGameState: (state: GameStatus) => void;
  handleCountScore: () => void;
}

export const OptionsCard: React.FC<Props> = ({ questions, numberQuestion, handleNextQuestion, handleGameState, handleCountScore }) => {
  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [confirmResponse, setConfirmResponse] = useState<boolean>(false)

  const handleOptionSelected = (index: number) => {
    setOptionSelected(index);
  }

  return (
    <div className={s.card}>
      <p className={s.card__questionCount}>Pregunta {numberQuestion + 1}</p>
      <h2 className={s.card__questionText}>{questions[numberQuestion].question}</h2>
      <div className={s.card__options}>
        {
          questions[numberQuestion].answers.map((question, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelected(index)}
              style={{ cursor: confirmResponse ? 'not-allowed' : 'pointer' }}
              className={
                cn(
                  s.card__optionButton,
                  optionSelected === index && s['card__option--selected'],
                  confirmResponse && s[
                  question.isCorrect
                    ? 'card__option--correct'
                    : 'card__option--incorrect'
                  ])
              }
            >{question.answer}</button>
          ))
        }
      </div>
      <button
        onClick={() => {
          const selectedAnswer = questions[numberQuestion].answers[optionSelected!];

          if (numberQuestion === questions.length - 1) {
            handleGameState('finished')
          }
          if (optionSelected !== null && confirmResponse) {
            handleNextQuestion()
            setOptionSelected(null);
            setConfirmResponse(false);
            return;
          }
          if (selectedAnswer?.isCorrect) {
            handleCountScore();
          }
          setConfirmResponse(true);
          toast(selectedAnswer?.isCorrect
            ? 'Respuesta correcta'
            : 'Respuesta Incorrecta')
        }}
        className={s.card__submit}
        disabled={optionSelected === null}>
        {confirmResponse ? 'Siguiente Pregunta' : 'Confirmar respuesta'}
      </button>
    </div>
  )
}
