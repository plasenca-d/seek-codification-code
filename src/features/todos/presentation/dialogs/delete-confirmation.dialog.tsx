import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteTodo } from "../hooks/useDeleteTodo";

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id: string;
}

export const DeleteConfirmationDialog: React.FC<Props> = ({
  id,
  open,
  onOpenChange,
}) => {
  const { deleteTodoMutation } = useDeleteTodo(id);

  const handleDelete = () => {
    deleteTodoMutation.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>¿Desea eliminar la tarea?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant={"destructive"}
            onClick={handleDelete}
            disabled={deleteTodoMutation.isPending}
          >
            {deleteTodoMutation.isPending ? "Eliminando..." : "Eliminar"}
          </Button>
          <DialogClose asChild>
            <Button type="button" disabled={deleteTodoMutation.isPending}>
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
