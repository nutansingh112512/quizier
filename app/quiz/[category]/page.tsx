"use client";

import {
  resetQuizState,
  updateCurrentCategory,
  type RootState,
} from "@/app/store";
import { quizData } from "../../store/questionData.json";
import Question from "@/app/components/Question";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Result from "@/app/components/Result";
import { useEffect } from "react";

export default function Category() {
  const dispatch = useDispatch();
  const { currentQueNo, currentCategory } = useSelector(
    (state: RootState) => state.quiz
  );
  const pathnameArray = usePathname().split("/");

  const category = pathnameArray[pathnameArray.length - 1];
  const questions = quizData.find(
    (data) => data.category === category
  )?.questions;

  useEffect(() => {
    if (currentCategory) {
      currentCategory !== category && dispatch(resetQuizState());
    } else {
      dispatch(updateCurrentCategory(category));
    }
  }, [currentCategory, category, dispatch]);
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center px-5 pt-10 w-full">
      <div className="flex flex-col gap-10 max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center">
          {category.toUpperCase()}
        </h2>
        {questions && currentQueNo <= questions.length ? (
          <div className="flex flex-col gap-3">
            <h4 className="lg:text-2xl text-lg font-semibold">
              Question <span className="text-blue-900">{currentQueNo}</span> of{" "}
              <span className="text-blue-900">{questions.length}</span>
            </h4>
            <Question question={questions[currentQueNo - 1]} />
          </div>
        ) : (
          <div className="self-center">
            <Result />
          </div>
        )}
      </div>
    </div>
  );
}
