"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const dummyUsers: Record<string, string> = {
    bradpit: "brad123",
    johndoe: "john123",
    janedoe: "jane123",
  };

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(dummyUsers).includes(username)) {
      if (dummyUsers[username] === password) {
        Cookies.set("authToken", username, { expires: 1 });
        setPassword("");
        setUsername("");
        router.replace("/quiz");
      } else {
        alert("Incorrect Password!");
        setPassword("");
      }
    } else {
      alert("Invalid Username!");
    }
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen items-center px-5 pt-10 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Welcome to Quizier</h1>
        <p className="">LogIn to give a quiz.</p>
      </div>
      <div className="max-w-md w-full rounded-3xl shadow-md bg-blue-50 lg:p-10 p-5">
        <form
          onSubmit={handleAuthentication}
          className="flex flex-col gap-2 text-blue-950"
        >
          <label htmlFor="username" className="text-lg font-medium">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white px-3 py-1 rounded-2xl outline-none focus:shadow-green-900 focus:shadow-sm"
          />
          <label htmlFor="password" className="text-lg font-medium pt-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white px-3 py-1 rounded-2xl outline-none focus:shadow-green-900 focus:shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-900 px-3 py-2 mt-5 rounded-xl font-semibold text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
