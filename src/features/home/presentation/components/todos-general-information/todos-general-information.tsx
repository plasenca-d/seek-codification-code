import React from "react";
import { QuantityTodoByState } from "./quantity-todo-by-state";

import { DeleteAllCompletedTodosButton } from "./delete-all-completed-todos-button";
import { CreateTodoButton } from "./create-todo-button";

export const TodosGeneralInformation = () => {
  return (
    <aside
      data-testid="todos-general-information"
      className="bg-background flex justify-center md:justify-between items-center pt-4 pb-6"
    >
      <div className="hidden md:block">
        <CreateTodoButton />
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-lg md:text-2xl text-primary dark:text-primary-foreground font-bold">
          Mi Todos
        </p>
        <div className="flex flex-row gap-4">
          <QuantityTodoByState state="todo" />
          <QuantityTodoByState state="doing" />
          <QuantityTodoByState state="done" />
        </div>
      </div>
      <div className="hidden md:block">
        <DeleteAllCompletedTodosButton />
      </div>
    </aside>
  );
};
