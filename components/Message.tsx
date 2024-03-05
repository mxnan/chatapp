import { Imessage } from "@/lib/store/messages";
import Image from "next/image";
import React from "react";

export default function Message({ message }: { message: Imessage }) {
  return (
    <div className="flex gap-2">
      <div>
        <Image
          src={message.users?.avatar_url!}
          alt={message.users?.display_name!}
          width={40}
          height={40}
          className="rounded-full ring-2"
        />
      </div>

      <div className="flex-1">
        <div className="flex gap-2 justify-start items-center">
          <h1 className="font-black">{message.users?.display_name}</h1>
          <h1 className="text-sm ">
            {new Date(message.created_at).toDateString()}
          </h1>
        </div>
        <p className="text-black">{message.text}</p>
      </div>
    </div>
  );
}
