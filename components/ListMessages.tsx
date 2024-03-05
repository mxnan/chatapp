"use client";

import React from "react";

export default function ListMessages() {
  return (
    <div className="mostly-customized-scrollbar flex-1 flex flex-col p-3 pt-5 h-full overflow-y-scroll">
      <div className="flex-1"></div>
      <div className="space-y-7">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => {
          return (
            <div className="flex gap-2" key={value}>
              <div className="h-10 w-10 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-black">Manan</h1>
                  <h1 className="text-sm ">{new Date().toDateString()}</h1>
                </div>
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptatibus iste quos corporis totam itaque nam
                  excepturi atque quae sed ex consequuntur ut, voluptatem
                  architecto a repudiandae eligendi minus velit?
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
