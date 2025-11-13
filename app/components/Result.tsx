import { useDispatch, useSelector } from "react-redux";
import { resetQuizState, type RootState } from "../store";
import { useRouter } from "next/navigation";

export default function Result() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { correct, incorrect, currentQueNo } = useSelector(
    (state: RootState) => state.quiz
  );
  const totalQuestions = currentQueNo - 1;
  const correctAns = correct.length;
  const incorrectAns = incorrect.length;
  const percentage = (correctAns * 100) / totalQuestions;

  return (
    <div className="p-5 bg-blue-50 rounded-2xl flex flex-col gap-5 shadow-md">
      <h4 className="text-center text-lg font-medium text-blue-950">Result</h4>
      <div className="flex flex-col gap-3 text-blue-900">
        <div className="flex justify-between gap-2">
          <p>Total questions: </p>
          <p>{totalQuestions}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Total questions attempted: </p>
          <p>{correctAns + incorrectAns}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Correct answers: </p>
          <p>{correctAns}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Incorrect answers: </p>
          <p>{incorrectAns}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Percentage score: </p>
          <p>{percentage}%</p>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <button
          onClick={() => dispatch(resetQuizState())}
          className="px-3 py-2 cursor-pointer text-blue-800 hover:text-blue-950 hover:bg-gray-100 border border-blue-50 hover:border-blue-950 rounded-xl font-bold"
        >
          Restart
        </button>
        <button
          onClick={() => {
            dispatch(resetQuizState());
            router.replace("/quiz");
          }}
          className="px-3 py-2 cursor-pointer bg-blue-900 hover:bg-blue-950 text-white rounded-xl "
        >
          Take another quiz
        </button>
      </div>
    </div>
  );
}
