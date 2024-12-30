import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
import { DeleteTodoUseCase } from "../../domain/use-cases/delete-todo.use-case";
export const DeleteTodoUseCaseImpl = (
  todosRepository: TodosRepository
): DeleteTodoUseCase => {
  return {
    execute: async (id: string) => await todosRepository.deleteTodo(id),
  };
};
