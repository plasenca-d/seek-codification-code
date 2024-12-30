import {
  CreateTodoLike,
  Todo,
} from "@/features/todos/domain/entities/todo.entity";

export interface CreateTodoUseCase {
  execute: (todo: CreateTodoLike) => Promise<Todo>;
}
