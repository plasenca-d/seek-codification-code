import { useMutation } from "@tanstack/react-query";
import { CreateTodoUseCaseImpl } from "../../application/use-cases/create-todo.use-case.impl";
import { TodosDataSourceImpl } from "../../infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "../../infrastructure/repositories/todos.repository.impl";
import { CreateTodoLike } from "../../domain/entities/todo.entity";
import { z } from "zod";
import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getQueryClient } from "@/lib/react-query";

const CreateTodo = CreateTodoUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export const CreateTodoSchema = z.object({
  title: z.string().min(1, {
    message: "Agrega un título",
  }),
  description: z.string().min(1, {
    message: "Agrega una descripción",
  }),
  state: z.enum<TodoState, ["todo", "doing", "done"]>(
    ["todo", "doing", "done"],
    {
      errorMap: () => ({
        message: "Selecciona un estado",
      }),
    }
  ),
});

export const useCreateTodo = (state?: TodoState) => {
  const queryClient = getQueryClient();

  const form = useForm<z.infer<typeof CreateTodoSchema>>({
    resolver: zodResolver(CreateTodoSchema),
    defaultValues: {
      title: "",
      description: "",
      state: state || "todo",
    },
  });

  const createTodoMutation = useMutation({
    mutationKey: ["create-todo"],
    mutationFn: async (likeTodo: CreateTodoLike) => {
      return await CreateTodo.execute(likeTodo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      form.reset();
    },
  });

  return { form, createTodoMutation };
};
