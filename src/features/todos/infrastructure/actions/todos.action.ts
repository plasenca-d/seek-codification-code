"use client";

import { RandomNumberGenerator } from "@/utils/random";
import {
  CreateTodoLike,
  Todo,
} from "@/features/todos/domain/entities/todo.entity";
import { v4 as uuid } from "uuid";

const TODOS_KEY = "todos";

export const getTodosFromLocalStorage = (): Todo[] => {
  const todos = localStorage.getItem(TODOS_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

/**
 * Gets a list of todos
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @returns A list of todos
 */
export const getTodos = async (): Promise<Todo[]> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  return getTodosFromLocalStorage();
};

/**
 * Clears all todos from localStorage.
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @returns void
 */
export const clearAll = async (): Promise<void> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  saveTodosToLocalStorage([]);
};

/**
 * Clears all completed todos from localStorage.
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @returns void
 */
export const clearAllCompleted = async (): Promise<void> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  const todos = getTodosFromLocalStorage().filter(
    (todo) => todo.state !== "done"
  );
  saveTodosToLocalStorage(todos);
};

/**
 * Deletes a todo by given id from localStorage.
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @param id The id of the todo to delete
 * @returns void
 */
export const deleteTodo = async (id: string): Promise<void> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  const todos = getTodosFromLocalStorage().filter((todo) => todo.id !== id);
  saveTodosToLocalStorage(todos);
};

/**
 * Creates a new todo and adds it to localStorage.
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @param todo The todo to create
 * @returns The created todo
 */
export const createTodo = async (todoLike: CreateTodoLike): Promise<Todo> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  const todos = getTodosFromLocalStorage();
  const todo = {
    ...todoLike,
    id: uuid(),
  };

  todos.push(todo);

  saveTodosToLocalStorage(todos);

  return todo;
};

/**
 * Updates a todo by given id with the given todo object in localStorage.
 *
 * Simulates a delay using RandomNumberGenerator.randomSleep
 * before performing the operation.
 *
 * @param id The id of the todo to update
 * @param todo The todo object to update the todo with
 * @returns The updated todo
 */
export const updateTodo = async (id: string, todo: Todo): Promise<Todo> => {
  await RandomNumberGenerator.randomSleep(500, 1200);

  const todos = getTodosFromLocalStorage().map((t) => (t.id === id ? todo : t));
  saveTodosToLocalStorage(todos);

  return todo;
};
