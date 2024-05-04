"use client";
import Messages from "@/components/messages";
import Navbar from "@/components/navbar";
import SendMessage from "@/components/send-message";
import useQuery from "@/store/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const { messages, updateResponse, updateUserQuery } = useQuery();
  if (!isLoaded) {
    return <></>;
  }
  if (!isSignedIn) {
    router.push("/");
    return;
  }
  return (
    <>
      <Navbar />
      <div className="h-[95vh] bg-gray-100 rounded-lg px-4 max-w-4xl   mx-auto">
        <div className="h-[90%] ">
          <Messages />
        </div>
        <div className="h-[10%]">
          <SendMessage />
        </div>
      </div>
    </>
  );
}

export default Page;
