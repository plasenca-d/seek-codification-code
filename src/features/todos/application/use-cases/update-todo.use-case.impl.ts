import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
import { UpdateTodoUseCase } from "../../domain/use-cases/update-todo.use-case";
import { Todo } from "@/features/todos/domain/entities/todo.entity";

export const UpdateTodoUseCaseImpl = (
  todosRepository: TodosRepository
): UpdateTodoUseCase => {
  return {
    execute: async (id: string, todo: Todo) =>
      await todosRepository.updateTodo(id, todo),
  };
};
