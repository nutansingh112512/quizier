"use client";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { resetQuizState, type RootState, updateLogin } from "../store";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector((state: RootState) => state.user);

  const handelogout = () => {
    Cookies.remove("authToken");
    dispatch(updateLogin(""));
    dispatch(resetQuizState());
    router.replace("/login");
  };

  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <header className="flex justify-end items-center gap-5 px-5 py-3">
      <h4 className="italic text-blue-950 font-bold">@{username}</h4>
      <button
        onClick={handelogout}
        className="cursor-pointer px-3 py-2 text-blue-950 font-semibold bg-blue-50 hover:bg-blue-200 rounded-xl"
      >
        Log Out
      </button>
    </header>
  );
}
