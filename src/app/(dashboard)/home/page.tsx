import NavBar from "@/components/layouts/nav-bar/nav-bar";
import ChangeThemeFBA from "@/components/ui/change-theme-fba";
import { TodosList } from "@/features/home/presentation/components/todos-by-state/todo-list";
import { TodosGeneralInformation } from "@/features/home/presentation/components/todos-general-information/todos-general-information";

import { GetTodosUseCaseImpl } from "@/features/todos/application/use-cases/get-todos.use-case.impl";
import { TodosDataSourceImpl } from "@/features/todos/infrastructure/datasources/todos.datasource.impl";
import { TodosRepositoryImpl } from "@/features/todos/infrastructure/repositories/todos.repository.impl";
import { getQueryClient } from "@/lib/react-query";

const GetTodos = GetTodosUseCaseImpl(
  TodosRepositoryImpl(TodosDataSourceImpl())
);

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: GetTodos.execute,
    staleTime: 60 * 1000 * 5,
  });

  return (
    <div className="min-h-screen">
      <div className="shadow-md">
        <div className="container">
          <NavBar />
          <TodosGeneralInformation />
        </div>
      </div>

      <main className="container py-8">
        <TodosList />
      </main>
      <ChangeThemeFBA />
    </div>
  );
}
