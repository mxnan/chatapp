"use client";

import React from "react";
import { Input } from "./ui/input";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";

import { v4 as uuidv4 } from "uuid";
import { useUser } from "@/lib/store/user";
import { Imessage, useMessage } from "@/lib/store/messages";
import { Toaster } from "./ui/sonner";

export default function ChatInput() {
  const user = useUser((state) => state.user);
  const addMessage = useMessage((state) => state.addMessage);
  const setoptimisticIds = useMessage((state) => state.setoptimisticIds);
  const supabase = supabaseBrowser();
  const handleSendmessage = async (text: string) => {
    if (text.trim()) {
      const newMessage = {
        id: uuidv4(),
        text,
        send_by: user?.id,
        is_edit: false,
        created_at: new Date().toISOString(),
        users: {
          id: user?.id,
          avatar_url: user?.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          display_name: user?.user_metadata.user_name,
        },
      };

      addMessage(newMessage as Imessage);
      setoptimisticIds(newMessage.id);

      //error toast
      const { error } = await supabase.from("messages").insert({ text });
      if (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Message cannot be empty !!");
    }
  };
  return (
    <div className="px-3 py-4 border-t  ">
      <Input
        placeholder="send message"
        className="font-bold placeholder:capitalize "
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
