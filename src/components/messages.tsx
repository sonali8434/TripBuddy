import useQuery, { MessageType } from "@/store/store";
import { UserButton } from "@clerk/nextjs";
import { AlignEndHorizontal, Bot } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Messages() {
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    if (messagesEndRef?.current) {
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Call scrollToBottom whenever the component is updated
  useEffect(() => {
    scrollToBottom();
  });
  const { messages, generatingResponse } = useQuery();
  if (messages.length === 0) {
    return (
      <>
        <div className="h-[100%]">
          <div className="h-[80%] flex items-center flex-col justify-center ">
            <AlignEndHorizontal />
            <span className="text-xl font-bold">Ask Assistant</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="h-full overflow-y-auto no-scrollbar ">
      {messages.map((e: MessageType, index:number) => {
        if (e.sender === "user") {
          return (
            <div key={index} className="flex mt-6 mb-10 gap-2">
              <div>
                <UserButton />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">You</span>
                <p>{e.message}</p>
              </div>
            </div>
          );
        }
        return (
          <div key={index} className="flex mt-6 mb-10 gap-2">
            <div>
              <Bot className="" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Assistant</span>
              <Markdown className="text-sm" remarkPlugins={[remarkGfm]}>
                {e.message}
              </Markdown>
              {/* <p>{e.message}</p> */}
            </div>
          </div>
        );
      })}
      {generatingResponse && (
        <div className="flex mt-6 mb-10 gap-2">
          <Bot />
          <div className="flex flex-col">
            <span className="text-sm font-bold">You</span>
            <p className="w-[100px] py-1 rounded-lg animate-pulse bg-white"></p>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
