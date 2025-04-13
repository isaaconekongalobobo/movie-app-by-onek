import Image from "next/image";
import { LoginForm } from "./components/login-form";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-[#FF0800] ">
      <main className="flex flex-col gap-5">
        <h1 className=" text-2xl sm:text-3xl font-semibold text-white">The Movie app <mark className="font-sans px-8 bg-[#010B13] rounded text-white ">by Onek</mark> </h1>
        <LoginForm/>
      </main>
    </div>
  );
}
