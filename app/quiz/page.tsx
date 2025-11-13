"use client";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import Link from "next/link";

export default function Quiz() {
  const { username } = useSelector((state: RootState) => state.user);
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center px-5 pt-10 w-full">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold">
          Welcome to Quizier,{" "}
          <span className="italic text-xl text-blue-950">@{username}</span>
        </h1>
        <h3 className="text-lg text-blue-900 font-semibold">
          Choose the category
        </h3>
      </div>
      <ul className="flex flex-col lg:flex-row gap-5 text-white text-center font-medium">
        <li className="bg-blue-950 hover:bg-blue-900 rounded-lg min-w-28">
          <Link href={"/quiz/science"} className="block w-full px-3 py-2">
            Science
          </Link>
        </li>
        <li className=" bg-blue-950 hover:bg-blue-900 rounded-lg min-w-28">
          <Link href={"/quiz/history"} className="block w-ful px-3 py-2">
            History
          </Link>
        </li>
        <li className=" bg-blue-950 hover:bg-blue-900 rounded-lg min-w-28">
          <Link href={"/quiz/programming"} className="block w-full px-3 py-2">
            Programming
          </Link>
        </li>
      </ul>
    </div>
  );
}
