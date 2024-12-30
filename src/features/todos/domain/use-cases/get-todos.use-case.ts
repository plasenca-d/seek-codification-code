import { Todo } from "@/features/todos/domain/entities/todo.entity";

export interface GetTodosUseCase {
  execute: () => Promise<Todo[]>;
}
