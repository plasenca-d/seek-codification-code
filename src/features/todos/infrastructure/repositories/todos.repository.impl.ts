import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
import { TodosDataSource } from "@/features/todos/domain/datasources/todos.datasource";

export const TodosRepositoryImpl = (
  dataSource: TodosDataSource
): TodosRepository => {
  return {
    clearAll: dataSource.clearAll,
    clearAllCompleted: dataSource.clearAllCompleted,
    createTodo: dataSource.createTodo,
    deleteTodo: dataSource.deleteTodo,
    getTodos: dataSource.getTodos,
    updateTodo: dataSource.updateTodo,
  };
};
