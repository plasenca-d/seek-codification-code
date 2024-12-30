"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { LoaderCircle } from "lucide-react";

import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useUpdateTodo, UpdateTodoSchema } from "../hooks/useUpdateTodo";
import { Todo } from "../../domain/entities/todo.entity";

interface Props {
  todo: Todo;
  render?: () => React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const UpdateTodoDialog: React.FC<Props> = ({
  todo,
  onOpenChange,
  open,
}) => {
  const { updateTodoMutation, form } = useUpdateTodo(todo);

  const handleCreate = (data: z.infer<typeof UpdateTodoSchema>) => {
    const updatedTodo = { ...todo, state: data.state };

    updateTodoMutation.mutate(updatedTodo, {
      onSuccess: () => {
        onOpenChange?.(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Tarea</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreate)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(["todo", "doing", "done"]).map(
                          (state) => (
                            <SelectItem key={state} value={state}>
                              {state === "todo"
                                ? "Pendiente"
                                : state === "doing"
                                ? "En proceso"
                                : "Completado"}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-4 h-12"
              disabled={updateTodoMutation.isPending}
            >
              {updateTodoMutation.isPending ? (
                <LoaderCircle className="mr-2 h-6 w-6 animate-spin" />
              ) : (
                "Actualizar"
              )}
            </Button>
          </form>
        </Form>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
};
