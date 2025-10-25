import { useReducer } from "react";
// import type { GameStatus } from "./type/gamestatus.interface";
import { mockQuestions as questions } from "./mock-data/questions.mock";

import { InitialCard } from "./components/InitialCard/InitialCard";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";
import { FinalCard } from "./components/FinalCard/FinalCard";
import s from "./QuizApp.module.css";
import { gameReducer, initialState } from "./reducer/gameReducer";

export const QuizApp = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const { currentQuestionIndex, gameState, score } = state;
  const startGame = () => {
    dispatch({ type: "START-GAME" });
  };

  const finishGame = () => {
    dispatch({ type: "FINISH-GAME" });
  };

  const goToNextQuestion = () => {
    dispatch({ type: "GO-TO-NEXT-QUESTION" });
  };

  const incrementScore = () => {
    dispatch({ type: "INCREMENT-SCORE" });
  };

  return (
    <>
      <div className={s.quiz__container}>
        {gameState === "idle" ? (
          <InitialCard questions={questions.length} onStartGame={startGame} />
        ) : gameState === "playing" ? (
          <QuestionCard
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
            onGoToNextQuestion={goToNextQuestion}
            onFinishGame={finishGame}
            onIncrementScore={incrementScore}
          />
        ) : (
          <FinalCard
            score={score}
            totalQuestions={questions.length}
            onResetGame={startGame}
          />
        )}
      </div>
    </>
  );
};
