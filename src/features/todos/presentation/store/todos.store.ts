import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { Todo } from "@/features/todos/domain/entities/todo.entity";
import { todosMock } from "@/data/mocks/todos.mock";

interface TodosState {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  createTodo: (todo: Todo) => void;
  updateTodo: (id: string, todo: Todo) => void;
  clearAll: () => void;
  clearAllCompleted: () => void;
}

const todosStore: StateCreator<TodosState> = (set, get) => ({
  todos: todosMock,
  clearAll: () => set({ todos: [] }),
  clearAllCompleted: () => {
    const todos = get().todos.filter((todo) => todo.state !== "done");
    set({ todos });
  },
  deleteTodo: (id) => {
    const todos = get().todos.filter((todo) => todo.id !== id);
    set({ todos });
  },
  createTodo: (todo) => set({ todos: [...get().todos, todo] }),
  updateTodo: (id, todo) => {
    const todos = get().todos.map((t) => (t.id === id ? todo : t));
    set({ todos });
  },
});

export const useTodosStore = create<TodosState>()(
  devtools(persist(todosStore, { name: "todos" }))
);
