import { useMutation } from "@tanstack/react-query";
import { TodosDataSourceImpl } from "../../infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "../../infrastructure/repositories/todos.repository.impl";
import { Todo } from "../../domain/entities/todo.entity";
import { z } from "zod";
import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getQueryClient } from "@/lib/react-query";
import { UpdateTodoUseCaseImpl } from "../../application/use-cases/update-todo.use-case.impl";

const UpdateTodo = UpdateTodoUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export const UpdateTodoSchema = z.object({
  state: z.enum<TodoState, ["todo", "doing", "done"]>(
    ["todo", "doing", "done"],
    {
      errorMap: () => ({
        message: "Selecciona un estado",
      }),
    }
  ),
});

export const useUpdateTodo = (todo: Todo) => {
  const queryClient = getQueryClient();

  const form = useForm<z.infer<typeof UpdateTodoSchema>>({
    resolver: zodResolver(UpdateTodoSchema),
    defaultValues: {
      state: todo.state,
    },
  });

  const updateTodoMutation = useMutation({
    mutationKey: ["update-todo"],
    mutationFn: async (todo: Todo) => {
      return await UpdateTodo.execute(todo.id, todo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      form.reset();
    },
  });

  return { form, updateTodoMutation };
};
