import { useState } from "react";
import { toast } from "sonner";
import type { Question } from "../../type/question.interface";
import s from "./OptionsCard.module.css";
import { cn } from "../../util/classNames";

interface Props {
  questions: Question[];
  currentQuestionIndex: number;
  onGoToNextQuestion: () => void;
  onFinishGame: () => void;
  onIncrementScore: () => void;
}

export const OptionsCard: React.FC<Props> = ({
  questions,
  currentQuestionIndex,
  onGoToNextQuestion,
  onFinishGame,
  onIncrementScore,
}) => {
  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [confirmResponse, setConfirmResponse] = useState<boolean>(false);

  const handleOptionSelected = (index: number) => {
    setOptionSelected(index);
  };

  return (
    <div className={s.card}>
      <p className={s.card__questionCount}>
        Pregunta {currentQuestionIndex + 1}
      </p>
      <h2 className={s.card__questionText}>
        {questions[currentQuestionIndex].question}
      </h2>
      <div className={s.card__options}>
        {questions[currentQuestionIndex].answers.map((question, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelected(index)}
            style={{ cursor: confirmResponse ? "not-allowed" : "pointer" }}
            className={cn(
              s.card__optionButton,
              optionSelected === index && s["card__option--selected"],
              confirmResponse &&
                s[
                  question.isCorrect
                    ? "card__option--correct"
                    : "card__option--incorrect"
                ],
            )}
          >
            {question.answer}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          // Select answer
          const selectedAnswer =
            questions[currentQuestionIndex].answers[optionSelected!];

          // Si es la ultima pregunta pasar a pantalla final
          if (currentQuestionIndex === questions.length - 1) {
            onFinishGame();
          }

          // La opcion selecionada es correcta? Entonces incrementa el Score
          if (selectedAnswer?.isCorrect) {
            onIncrementScore();
          }

          // Si existe una opcion selecionada y se envio
          if (optionSelected !== null && confirmResponse) {
            onGoToNextQuestion();
            // Deseleciona la opcion
            setOptionSelected(null);
            // No hay una opcion selecionada
            setConfirmResponse(false);
            return;
          }

          // Enviar respuesta
          setConfirmResponse(true);
          toast(
            selectedAnswer?.isCorrect
              ? "Respuesta correcta"
              : "Respuesta Incorrecta",
          );
        }}
        className={s.card__submit}
        disabled={optionSelected === null}
      >
        {confirmResponse ? "Siguiente Pregunta" : "Confirmar respuesta"}
      </button>
    </div>
  );
};
