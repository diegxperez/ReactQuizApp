export interface Question {
  id: number,
  question: string,
  answers: Answer[]
}

export interface Answer {
  answer: string,
  isCorrect: boolean,
}