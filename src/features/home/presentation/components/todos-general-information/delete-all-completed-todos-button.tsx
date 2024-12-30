"use client";

import { Button } from "@/components/ui/button";
import { DeleteAllCompletedConfirmationDialog } from "@/features/todos/presentation/dialogs/delete-all-completed-confirmation.dialog";
import { useTodos } from "@/features/todos/presentation/hooks/useTodos";
import { useState } from "react";

export const DeleteAllCompletedTodosButton = () => {
  const { todosQuery } = useTodos();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const hasCompletedTodos =
    todosQuery.data?.some((todo) => todo.state === "done") || false;

  return (
    <>
      <DeleteAllCompletedConfirmationDialog
        onOpenChange={setOpenDeleteDialog}
        open={openDeleteDialog}
      />
      <Button
        variant={"destructive"}
        onClick={() => setOpenDeleteDialog(true)}
        disabled={todosQuery.isLoading || !hasCompletedTodos}
      >
        Borrar completadas
      </Button>
    </>
  );
};
