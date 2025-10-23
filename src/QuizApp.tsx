import { useState } from "react";
import type { GameStatus } from "./type/gamestatus.interface";
import { InitialCard } from "./components/InitialCard/InitialCard"
import { Questions } from "./components/QuestionCard/Questions"

import { mockQuestions as questions } from './mock-data/questions.mock'
import { FinalCard } from "./components/FinalCard/FinalCard";
import s from './quizapp.module.css';

export const QuizApp = () => {
  const [gameState, setGameState] = useState<GameStatus>('idle');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0)
  const [score, setScore] = useState<number>(0);

  const handleGameState = (state: GameStatus) => {
    setGameState(state);
  }

  const handleNextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  }

  const handleCountScore = () => {
    setScore(score + 1);
  }

  const handleResetGame = () => {
    setGameState('playing');
    setCurrentQuestionNumber(0);
  }

  return (
    <>
      <div className={s.quiz__container}>
        {
          gameState === 'idle' ?
            <InitialCard questions={questions.length} handleGameStatus={handleGameState} />
            : gameState === 'playing'
              ? <Questions
                currentQuestionNumber={currentQuestionNumber}
                questions={questions}
                handleNextQuestion={handleNextQuestion}
                handleGameState={handleGameState}
                handleCountScore={handleCountScore} />
              : <FinalCard
                score={score}
                totalQuestions={questions.length}
                handleResetGame={handleResetGame}
              />
        }
      </div>
    </>
  )
}
