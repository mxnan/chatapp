import React from "react";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <div className="h-20">
          <div className="p-5 border-b">
            <div>
              <h1 className="text-xl font-bold">Daily Chat</h1>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
                <h1 className="text-sm">2 online</h1>
              </div>
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
