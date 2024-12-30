import { useMutation } from "@tanstack/react-query";
import { DeleteTodoUseCaseImpl } from "../../application/use-cases/delete-todo.use-case.impl";
import { TodosDataSourceImpl } from "../../infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "../../infrastructure/repositories/todos.repository.impl";
import { getQueryClient } from "@/lib/react-query";

const DeleteTodo = DeleteTodoUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export const useDeleteTodo = (id: string) => {
  const queryClient = getQueryClient();

  const deleteTodoMutation = useMutation({
    mutationKey: ["delete-todo", id],
    mutationFn: async () => await DeleteTodo.execute(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { deleteTodoMutation };
};
