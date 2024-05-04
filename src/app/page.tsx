"use client";
import Navbar from "@/components/navbar";
import {
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  const router = useRouter();
  if (!isLoaded) {
    return <></>;
  }
  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-b from-gray-400 to-red-500 blur-[100px] -z-10 h-40"></div>
        <div className="max-w-4xl mx-auto   px-2 mt-10">
          <h1 className="text-5xl font-bold text-black text-center">
            Your AI Travel Planner
          </h1>

          <div className="my-10 flex lg:flex-row flex-col justify-center gap-5">
            <Link href="/sign-in">
              <button className="px-4 lg:w-auto w-full font-semibold text-white bg-black hover:bg-gray-800 py-3 text-sm rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
          <div className="p-3  bg-gray-100 rounded-lg">
            <img
              className="rounded-lg"
              src="https://www.newdelhiairport.in/media/2160/top-travel-destinations-to-visit-before-turning-40.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    );
  } else {
    router.push("/chat");
  }
  return <></>;
}
