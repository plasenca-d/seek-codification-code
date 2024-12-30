import { TodosDataSource } from "@/features/todos/domain/datasources/todos.datasource";
import { CreateTodoLike, Todo } from "../../domain/entities/todo.entity";
import {
  clearAll,
  clearAllCompleted,
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../actions/todos.action";

export const TodosDataSourceImpl = (): TodosDataSource => {
  return {
    clearAll: async () => {
      return await clearAll();
    },
    clearAllCompleted: async () => {
      return await clearAllCompleted();
    },
    createTodo: async (todo: CreateTodoLike) => {
      return await createTodo(todo);
    },
    deleteTodo: async (id: string) => {
      return await deleteTodo(id);
    },
    getTodos: async () => {
      return await getTodos();
    },
    updateTodo: async (id: string, todo: Todo) => {
      return await updateTodo(id, todo);
    },
  };
};
