import { TodosDataSource } from "@/features/todos/domain/datasources/todos.datasource";
import { GetTodosUseCase } from "@/features/todos/domain/use-cases/get-todos.use-case";

export const GetTodosUseCaseImpl = (
  todosRepository: TodosDataSource
): GetTodosUseCase => {
  return {
    execute: async () => await todosRepository.getTodos(),
  };
};
