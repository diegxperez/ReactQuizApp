import { useState } from "react";
import type { GameStatus } from "./type/gamestatus.interface";
import { mockQuestions as questions } from "./mock-data/questions.mock";

import { InitialCard } from "./components/InitialCard/InitialCard";
import { Questions } from "./components/QuestionCard/Questions";
import { FinalCard } from "./components/FinalCard/FinalCard";
import s from "./quizapp.module.css";

export const QuizApp = () => {
  const [score, setScore] = useState<number>(0);
  const [gameState, setGameState] = useState<GameStatus>("idle");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const startGame = () => {
    setGameState("playing");
  };

  const resetGame = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const finishGame = () => {
    setGameState("finished");
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <div className={s.quiz__container}>
        {gameState === "idle" ? (
          <InitialCard questions={questions.length} onStartGame={startGame} />
        ) : gameState === "playing" ? (
          <Questions
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
            onResetGame={resetGame}
          />
        )}
      </div>
    </>
  );
};
