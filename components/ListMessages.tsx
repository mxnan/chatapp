"use client";

import { useMessage } from "@/lib/store/messages";
import React from "react";
import Message from "./Message";

export default function ListMessages() {
  const messages = useMessage((state) => state.messages);
  return (
    <div className="mostly-customized-scrollbar flex-1 flex flex-col p-3 pt-5 h-full overflow-y-scroll">
      <div className="flex-1"></div>
      <div className="space-y-7">
        {messages.map((value,index) => {
          return (
            <Message key={index} message={value} />
          );
        })}
      </div>
    </div>
  );
}
