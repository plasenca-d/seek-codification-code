import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";
import { CreateTodoDialog } from "@/features/todos/presentation/dialogs/create-todo.dialog";
import { useState } from "react";

interface Props {
  state: TodoState;
}

export const CreateTodoByState: React.FC<Props> = ({ state }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CreateTodoDialog open={isOpen} onOpenChange={setIsOpen} state={state} />
  );
};
