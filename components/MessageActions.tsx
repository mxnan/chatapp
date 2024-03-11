import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMessage } from "@/lib/store/messages";
import { supabaseBrowser } from "@/lib/supabase/browser";

import { toast } from "sonner";

export function DeleteAlert() {
  const actionMessage = useMessage((state) => state.actionMessage);

  const handleDeleteMessage = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", actionMessage?.id || "");
    if (error) {
      toast.error(error.message);
    } else {;
      toast.success("Message Deleted");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button id="trigger-delete"></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
            {actionMessage?.id}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteMessage}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
