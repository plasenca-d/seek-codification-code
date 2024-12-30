import { Todo } from "@/features/todos/domain/entities/todo.entity";
export interface UpdateTodoUseCase {
  execute: (id: string, todo: Todo) => Promise<Todo>;
}
