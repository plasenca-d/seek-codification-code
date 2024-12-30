import { useMutation } from "@tanstack/react-query";

import { TodosDataSourceImpl } from "../../infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "../../infrastructure/repositories/todos.repository.impl";
import { getQueryClient } from "@/lib/react-query";
import { ClearAllCompletedUseCaseImpl } from "../../application/use-cases/clear-all-completed.use-case.impl";

const ClearAllCompleted = ClearAllCompletedUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export const useDeleteAllCompleted = () => {
  const queryClient = getQueryClient();

  const deleteAllCompletedMutation = useMutation({
    mutationKey: ["clear-all-todos-completed"],
    mutationFn: async () => await ClearAllCompleted.execute(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { deleteAllCompletedMutation };
};
