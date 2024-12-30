"use client";

import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";
import { useCountTodoByState } from "@/features/todos/presentation/hooks/useCountTodoByState";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  state: TodoState;
}

export const QuantityTodoByState: React.FC<Props> = ({ state }) => {
  const length = useCountTodoByState(state);

  const textState = (): string => {
    if (state === "todo") return "Pendientes";
    if (state === "doing") return "En proceso";

    return "Completadas";
  };

  const colorState = (): string => {
    if (state === "todo") return "bg-[#57a7fc]";
    if (state === "doing") return "bg-[#e35e84]";
    return "bg-[#4cd97c]";
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <div className={cn("rounded-full  w-4 h-4", colorState())}></div>

      <span className="text-sm text-muted-foreground">
        {length} {textState()}
      </span>
    </div>
  );
};
