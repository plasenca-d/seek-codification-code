"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";

import { useTodosByState } from "@/features/todos/presentation/hooks/useTodosByState";
import { cn } from "@/lib/utils";
import { TodoComponent } from "./todo-component";
import { CreateTodoByState } from "./create-todo-by-state";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  state: TodoState;
}

export const TodoListState: React.FC<Props> = ({ state }) => {
  const todos = useTodosByState(state);

  const colorState = (): string => {
    if (state === "todo") return "bg-[#57a7fc]";
    if (state === "doing") return "bg-[#e35e84]";
    return "bg-[#4cd97c]";
  };

  const textState = (): string => {
    if (state === "todo") return "Pendientes";
    if (state === "doing") return "En proceso";
    return "Completadas";
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "h-10 w-45 md:w-60 p-4 flex items-center rounded-md justify-between",
          colorState()
        )}
      >
        <span className="font-bold">{textState()}</span>
        <CreateTodoByState state={state} />
      </div>
      <ScrollArea className="w-45 md:w-60 h-full">
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <TodoComponent key={todo.id} todo={todo} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
