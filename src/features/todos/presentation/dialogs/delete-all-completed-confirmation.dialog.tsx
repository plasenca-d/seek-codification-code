import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteAllCompleted } from "../hooks/useDeleteAllCompleted";

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const DeleteAllCompletedConfirmationDialog: React.FC<Props> = ({
  open,
  onOpenChange,
}) => {
  const { deleteAllCompletedMutation } = useDeleteAllCompleted();

  const handleDelete = () => {
    deleteAllCompletedMutation.mutate(undefined, {
      onSuccess: () => {
        onOpenChange?.(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            ¿Desea eliminar todas las tareas completadas?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant={"destructive"}
            onClick={handleDelete}
            disabled={deleteAllCompletedMutation.isPending}
          >
            {deleteAllCompletedMutation.isPending
              ? "Eliminando..."
              : "Eliminar"}
          </Button>
          <DialogClose asChild>
            <Button
              type="button"
              disabled={deleteAllCompletedMutation.isPending}
            >
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
