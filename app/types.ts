export interface question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}
export interface category {
  category: string;
  questions: question[];
}
export interface quizData {
  quizdata: category[];
}

export interface quizState {
  currentQueNo: number;
  currentCategory: string | null;
  correct: question[];
  incorrect: question[];
}

export interface questionProps {
  question: question;
}
