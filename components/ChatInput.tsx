"use client";

import React from "react";
import { Input } from "./ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function ChatInput() {

  const supabase = supabaseBrowser();
  const handleSendmessage = (text: string) => {
    alert(text);
    // call to supabase
    // video 48:45
  };
  return (
    <div className="px-3 py-4 border-t  ">
      <Input
        placeholder="send message"
        className="font-bold placeholder:capitalize placeholder:text-black text-foreground"
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






