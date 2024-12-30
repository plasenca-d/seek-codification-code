export interface DeleteTodoUseCase {
  execute: (id: string) => Promise<void>;
}
