"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

import { CreateTodoDialog } from "@/features/todos/presentation/dialogs/create-todo.dialog";
import { useState } from "react";

export const CreateTodoButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <CreateTodoDialog
      open={open}
      onOpenChange={setOpen}
      render={() => (
        <Button variant={"default"}>
          <div className="flex items-center">
            <CirclePlus />
            <span className="ml-2">Agregar tarea</span>
          </div>
        </Button>
      )}
    />
  );
};
