import { createSlice } from "@reduxjs/toolkit";
import type { quizState } from "@/app/types";

const initialState: quizState = {
  currentQueNo: 1,
  currentCategory: null,
  correct: [],
  incorrect: [],
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    resetQuizState() {
      return initialState;
    },
    updateCurrentCategory(state, action) {
      return { ...state, currentCategory: action.payload };
    },
    updateCurrentQueNo(state) {
      return { ...state, currentQueNo: state.currentQueNo + 1 };
    },
    updateCorrect(state, action): quizState {
      const newCorrect = [...state.correct, action.payload];
      return { ...state, correct: newCorrect };
    },
    updateIncorrect(state, action) {
      const newIncorrect = [...state.incorrect, action.payload];
      return { ...state, incorrect: newIncorrect };
    },
  },
});

export const {
  updateCorrect,
  updateIncorrect,
  updateCurrentQueNo,
  resetQuizState,
  updateCurrentCategory,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
