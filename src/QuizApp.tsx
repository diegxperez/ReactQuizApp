import { useState } from "react";
import type { GameStatus } from "./type/gamestatus.interface";
import { InitialCard } from "./components/InitialCard/InitialCard"
import { Questions } from "./components/QuestionCard/Questions"
import { FinalCard } from "./components/FinalCard/FinalCard";

export const QuizApp = () => {
  const [gameState, setGameState] = useState<GameStatus>('idle');
  const [question, setQuestion] = useState<number>(4)

  const handleGameState = (state: GameStatus) => {
    setGameState(state);
  }

  return (
    <>
      {
        gameState === 'idle' ?
          <InitialCard questions={10} handleGameStatus={handleGameState} />
          : gameState === 'playing'
            ? <Questions numberQuestion={question} />
            : <FinalCard />
      }
    </>
  )
}
