import { useTodos } from "./useTodos";

export const useCountTodoByState = (state: string) => {
  const { todosQuery } = useTodos();

  return todosQuery.data?.filter((todo) => todo.state === state).length || 0;
};
