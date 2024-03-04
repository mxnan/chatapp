"use client";

import React from "react";
import { Input } from "./ui/input";

export default function ChatInput() {
  const handleSendmessage = (text: string) => {
    alert(text);
    // call to supabase
  };
  return (
    <div className="px-3 py-6 border-t  ">
      <Input
        placeholder="send message"
        className="font-bold"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendmessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}
