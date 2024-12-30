import { TodoState } from "./todo-state.entity";

export interface Todo {
  id: string;
  title: string;
  description: string;
  state: TodoState;
}

export type CreateTodoLike = Omit<Todo, "id">;
