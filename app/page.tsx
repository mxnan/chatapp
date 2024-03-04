import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";

import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = supabaseServer();

  const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-5xl mx-auto md:py-10 max-md:px-4 max-md:py-2 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          <ChatHeader user={data.session?.user} />
          <div className="flex-1 flex flex-col p-3 pt-5 h-full overflow-y-scroll">
            <div className="flex-1"></div>
            <div className="space-y-7">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (value) => {
                  return (
                    <div className="flex gap-2" key={value}>
                      <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex gap-2 justify-start items-center">
                          <h1 className="font-black">Manan</h1>
                          <h1 className="text-sm ">
                            {new Date().toDateString()}
                          </h1>
                        </div>
                        <p className="text-black">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt laudantium animi libero natus quam.
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}
