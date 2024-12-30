import { CreateTodoLike, Todo } from "../entities/todo.entity";

export interface TodosDataSource {
  getTodos(): Promise<Todo[]>;
  createTodo(todo: CreateTodoLike): Promise<Todo>;
  updateTodo(id: string, todo: Todo): Promise<Todo>;
  deleteTodo(id: string): Promise<void>;
  clearAll(): Promise<void>;
  clearAllCompleted(): Promise<void>;
}
