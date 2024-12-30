"use client";

import { Loader } from "@/components/layouts/loader";
import { useTodos } from "@/features/todos/presentation/hooks/useTodos";
import { TodoListState } from "./todos-list-state";

export const TodosList = () => {
  const { todosQuery } = useTodos();

  if (todosQuery.isLoading) return <Loader />;

  return (
    <div className="flex flex-row gap-4 justify-between animate-fade">
      <TodoListState state="todo" />
      <TodoListState state="doing" />
      <TodoListState state="done" />
    </div>
  );
};
