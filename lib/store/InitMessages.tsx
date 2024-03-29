"use client";

import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";
import { useUser } from "./user";
import { Imessage, useMessage } from "./messages";

export default function InitMessages({ messages }: { messages: Imessage[] }) {
  const initState = useRef(false);


  useEffect(() => {
    if(!initState.current) {
      useMessage.setState({messages})
    }
    initState.current = true
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <> </>;
}
