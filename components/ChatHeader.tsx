"use client";

import React from "react";
import { Button } from "./ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function ChatHeader({ user }: { user: User | undefined }) {
  //router for refreshing from next/navigation
  const router = useRouter();

  // for login with github
  const handleLoginwithGithub = () => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  // for logout
  const handleLogoutwithGithub = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
            <h1 className="text-sm">2 online</h1>
          </div>
        </div>
        <ModeToggle />
        {user ? (
          <Button variant={"outline"} onClick={handleLogoutwithGithub}>Logout</Button>
        ) : (
          <Button variant={"outline"} onClick={handleLoginwithGithub}>Login</Button>
        )}
      </div>
    </div>
  );
}
