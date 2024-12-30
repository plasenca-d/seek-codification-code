import { todosMock } from "@/data/mocks/todos.mock";
import { saveTodosToLocalStorage } from "@/features/todos/infrastructure/actions/todos.action";
import { useEffect } from "react";

export const InitializationMockProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    saveTodosToLocalStorage(todosMock);
  }, []);

  return <>{children}</>;
};
