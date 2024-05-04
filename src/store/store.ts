import { create } from "zustand";

export type MessageType = {
  sender: string;
  message: string;
  createdDate: Date;
};
type State = {
  messages: MessageType[];
  generatingResponse: boolean;
};

type Action = {
  updateUserQuery: (userQuery: MessageType) => void;
  updateResponse: (response: string) => void;
};

const useQuery = create<State & Action>((set) => ({
  messages: [],
  generatingResponse: false,
  updateUserQuery: (userQuery: MessageType) =>
    set((state) => {
      let arr: MessageType[] = state.messages;
      arr.push(userQuery);
      return {
        messages: arr,
        generatingResponse: true,
      };
    }),
  updateResponse: (response: string) =>
    set((state) => {
      let arr: MessageType[] = state.messages;
      let n = arr.length;
      arr[n] = {
        message: response,
        createdDate: new Date(),
        sender: "assistant",
      };
      return {
        messages: arr,
        generatingResponse: false,
      };
    }),
}));

export default useQuery;
