import useQuery from "@/store/store";
import axios from "axios";
import { Send } from "lucide-react";
import React, { ReactEventHandler, useState } from "react";

function SendMessage() {
  const [message, setMessage] = useState("");
  const { updateUserQuery, updateResponse } = useQuery();

  const onSumbit = async () => {
    updateUserQuery({
      message: message,
      createdDate: new Date(),
      sender: "user",
    });
    let query = message;
    setMessage("");
    const response: any = await axios.post("/api/ask", {
      query: query,
    });
    updateResponse(response.data.message.content);
  };
  return (
    <div className="py-4 px-2 flex justify-center items-center h-auto gap-2">
      <input
        onChange={(e: any) => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            onSumbit();
            return;
          }
        }}
        autoFocus
        value={message}
        type="text"
        className="border h-12 px-4 rounded-2xl w-full"
      />
      <button onClick={onSumbit} disabled={message.length == 0} className="">
        <Send />
      </button>
    </div>
  );
}

export default SendMessage;
