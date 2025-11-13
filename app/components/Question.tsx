"use client";
import { FormEvent, SetStateAction, useState } from "react";
import type { questionProps, question } from "@/app/types";
import { useDispatch } from "react-redux";
import { updateCorrect, updateCurrentQueNo, updateIncorrect } from "../store";

export default function Question({ question }: questionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleAnswer = (e: FormEvent) => {
    e.preventDefault();
    if (selected === question.answer) {
      dispatch(updateCorrect(question));
    } else dispatch(updateIncorrect(question));
    dispatch(updateCurrentQueNo());
    setSelected(null);
  };
  return (
    <div className="flex flex-col gap-5">
      <p className="lg:text-2xl text-lg font-semibold text-blue-900">
        {question.question}
      </p>
      <form
        onSubmit={
          selected
            ? handleAnswer
            : (e: FormEvent) => {
                e.preventDefault();
              }
        }
        className="flex flex-col gap-3 lg:text-lg text-base font-medium text-blue-900"
      >
        {question.options.map((opt) => (
          <label
            key={opt}
            className={`${
              selected === opt ? "bg-blue-200" : "bg-blue-50"
            }  hover:bg-blue-200 w-full lg:px-5 px-3 py-2 rounded-2xl `}
          >
            <input
              type="Radio"
              name="question"
              value={opt}
              onChange={() => setSelected(opt)}
              className="hidden"
            />
            {opt}
          </label>
        ))}
        <div className="self-end flex gap-3">
          <button
            type="button"
            onClick={() => {
              dispatch(updateCurrentQueNo());
              setSelected(null);
            }}
            className={`cursor-pointer bg-blue-50 hover:bg-blue-100 lg:px-10 px-5 py-2 rounded-lg`}
          >
            Skip
          </button>
          <button
            type="submit"
            className={`${
              selected
                ? "bg-blue-900 hover:bg-blue-950 cursor-pointer"
                : "bg-gray-200"
            }  text-white lg:px-10 px-5 py-2 rounded-lg`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
