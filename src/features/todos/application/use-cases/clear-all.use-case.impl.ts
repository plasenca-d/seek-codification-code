import { TodosRepository } from "@/features/todos/domain/repositories/todos.repository";
import { ClearAllUseCase } from "../../domain/use-cases/clear-all.use-case";
export const ClearAllUseCaseImpl = (
  todoRepository: TodosRepository
): ClearAllUseCase => {
  return {
    execute: async () => await todoRepository.clearAll(),
  };
};
