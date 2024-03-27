import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";

import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = supabaseServer();

  const { data } = await supabase.auth.getSession();

  return (
    <>
      <main
        className="w-full h-full 
       bg-background text-foreground
      "
      >
        {" "}
        <div className=" max-w-6xl mx-auto  md:py-10 md:px-6 max-md:px-4 max-md:py-2 h-screen">
          <div className="h-full border    rounded-md flex flex-col">
            <ChatHeader user={data.session?.user} />
            <ChatMessages />
            <ChatInput />
          </div>
        </div>
        <InitUser user={data.session?.user} />
      </main>
    </>
  );
}


