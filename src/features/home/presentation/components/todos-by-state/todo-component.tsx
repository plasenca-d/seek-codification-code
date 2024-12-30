import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Todo } from "@/features/todos/domain/entities/todo.entity";
import { DeleteConfirmationDialog } from "@/features/todos/presentation/dialogs/delete-confirmation.dialog";
import { UpdateTodoDialog } from "@/features/todos/presentation/dialogs/update-todo-dialog";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  todo: Todo;
}

export const TodoComponent: React.FC<Props> = ({ todo }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openUpdatedDialog, setOpenUpdatedDialog] = useState(false);

  return (
    <div key={todo.id}>
      <DeleteConfirmationDialog
        id={todo.id}
        onOpenChange={setOpenDeleteDialog}
        open={openDeleteDialog}
      />
      <UpdateTodoDialog
        todo={todo}
        onOpenChange={setOpenUpdatedDialog}
        open={openUpdatedDialog}
      />
      <Card key={todo.id}>
        <CardHeader>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-lg">{todo.title}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <ChevronDown className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setOpenUpdatedDialog(true)}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpenDeleteDialog(true)}>
                  <span className="flex items-center">Eliminar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>{todo.description}</CardContent>
      </Card>
    </div>
  );
};
