import type { GameStatus } from "../type/gamestatus.interface";

export interface State {
  score: number;
  gameState: GameStatus;
  currentQuestionIndex: number;
}

export interface Action {
  type:
    | "START-GAME"
    | "FINISH-GAME"
    | "GO-TO-NEXT-QUESTION"
    | "INCREMENT-SCORE";
}

export const initialState: State = {
  score: 0,
  gameState: "idle",
  currentQuestionIndex: 0,
};

export const gameReducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case "START-GAME": {
      return {
        ...initialState,
        gameState: "playing",
      };
    }
    case "FINISH-GAME": {
      return {
        ...state,
        gameState: "finished",
      };
    }
    case "GO-TO-NEXT-QUESTION": {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }
    case "INCREMENT-SCORE": {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    default:
      return state;
  }
};
