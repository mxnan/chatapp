import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { supabaseBrowser } from "../supabase/browser";
import { toast } from "sonner";

export type Imessage = {
  created_at: string;
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
  users: {
    avatar_url: string;
    created_at: string;
    display_name: string;
    id: string;
  } | null;
};
interface MessageState {
  messages: Imessage[];
  actionMessage: Imessage | undefined;
  optimisticIds: string[];
  addMessage: (message: Imessage) => void;
  setActionMessage: (message: Imessage | undefined) => void;
  optimisticDeleteMessage: (messageId: string) => void;
  optimisticUpdateMessage: (messageId: Imessage) => void;
  setoptimisticIds: (id: string) => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  optimisticIds: [],
  actionMessage: undefined,

  setoptimisticIds: (id: string) =>
    set((state) => ({ optimisticIds: [...state.optimisticIds, id] })),
  addMessage: (newMessages) =>
    set((state) => ({
      messages: [...state.messages, newMessages],
    })),
  setActionMessage: (message) =>
    set(() => ({
      actionMessage: message,
    })),
  optimisticDeleteMessage: (messageId) =>
    set((state) => {
      return {
        messages: state.messages.filter((message) => message.id !== messageId),
      };
    }),
  optimisticUpdateMessage: (updatedMessage) => {
    const updateMessageWithUser = async () => {
      const supabase = supabaseBrowser();

      const { error, data } = await supabase
        .from("users")
        .select("*")
        .eq("id", updatedMessage.send_by)
        .single();

      if (error) {
        toast.error(error.message);
      } else {
        const messageWithUpdatedUser = {
          ...updatedMessage,
          users: data,
        };

        set((state) => ({
          messages: state.messages.map((message) =>
            message.id === updatedMessage.id ? messageWithUpdatedUser : message
          ),
        }));
      }
    };

    updateMessageWithUser();
  },
}));
