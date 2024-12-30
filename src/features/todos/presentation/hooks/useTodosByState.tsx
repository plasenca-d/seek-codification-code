import { useTodos } from "./useTodos";

export const useTodosByState = (state: string) => {
  const { todosQuery } = useTodos();

  return todosQuery.data?.filter((todo) => todo.state === state) || [];
};
