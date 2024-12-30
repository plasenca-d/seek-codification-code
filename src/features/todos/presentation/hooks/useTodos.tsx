import { useQuery } from "@tanstack/react-query";
import { GetTodosUseCaseImpl } from "@/features/todos/application/use-cases/get-todos.use-case.impl";
import { TodosDataSourceImpl } from "@/features/todos/infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "@/features/todos/infrastructure/repositories/todos.repository.impl";

const GetTodos = GetTodosUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export const useTodos = () => {
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: async () => await GetTodos.execute(),
    staleTime: 60 * 1000 * 5,
  });

  return { todosQuery };
};
