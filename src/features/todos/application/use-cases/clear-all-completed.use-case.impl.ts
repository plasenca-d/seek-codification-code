import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
import { ClearAllCompletedUseCase } from "../../domain/use-cases/clear-all-completed.use-case";

export const ClearAllCompletedUseCaseImpl = (
  todosRepository: TodosRepository
): ClearAllCompletedUseCase => {
  return {
    execute: async () => {
      return await todosRepository.clearAllCompleted();
    },
  };
};
