import { CreateTodoLike } from "@/features/todos/domain/entities/todo.entity";
import { CreateTodoUseCase } from "../../domain/use-cases/create-todo.use-case";
import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
export const CreateTodoUseCaseImpl = (
  todosRepository: TodosRepository
): CreateTodoUseCase => {
  return {
    execute: async (todo: CreateTodoLike) =>
      await todosRepository.createTodo(todo),
  };
};
