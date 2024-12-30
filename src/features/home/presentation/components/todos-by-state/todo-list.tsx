"use client";

import { Loader } from "@/components/layouts/loader";
import { useTodos } from "@/features/todos/presentation/hooks/useTodos";
import { TodoListState } from "./todos-list-state";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const TodosList = () => {
  const { todosQuery } = useTodos();

  if (todosQuery.isLoading) return <Loader />;

  return (
    <ScrollArea className="h-[calc(100dvh-260px)]  whitespace-nowrap ">
      <div className="w-max md:w-full flex flex-row gap-4 justify-between animate-fade py-4 md:px-6">
        <TodoListState state="todo" />
        <TodoListState state="doing" />
        <TodoListState state="done" />
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
};
