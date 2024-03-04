import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatsProvider from "../chats/ChatsProvider";
import FileUploader from "./FileUploader";
import FileSearcher from "./FileSearcher";
import QuestionField from "./QuestionField";
import ChatHistory from "./ChatHistory";
import SubmitButton from "./SubmitButton";

const queryClient = new QueryClient();

const Chatbot = () => {
  const [fileName, setFileName] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <ChatsProvider>
        <div className="flex justify-center items-center mb-10 flex-col gap-4">
          <FileUploader />
          <FileSearcher setFileName={setFileName} />
          <QuestionField fileName={fileName} />
          <ChatHistory />
          <SubmitButton />
        </div>
      </ChatsProvider>
    </QueryClientProvider>
  );
};

export default Chatbot;
