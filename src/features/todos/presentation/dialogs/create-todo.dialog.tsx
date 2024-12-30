"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TodoState } from "@/features/todos/domain/entities/todo-state.entity";
import { CirclePlus, LoaderCircle } from "lucide-react";
import { CreateTodoSchema, useCreateTodo } from "../hooks/useCreateTodo";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Props {
  state?: TodoState;
  render?: () => React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const CreateTodoDialog: React.FC<Props> = ({
  state,
  render,
  onOpenChange,
  open,
}) => {
  const { createTodoMutation, form } = useCreateTodo(state);

  const handleCreate = (data: z.infer<typeof CreateTodoSchema>) => {
    createTodoMutation.mutate(data, {
      onSuccess: () => {
        onOpenChange?.(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {render ? render() : <CirclePlus className="h-4 w-4" />}
      </DialogTrigger>
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input {...field} autoFocus />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
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
              disabled={createTodoMutation.isPending}
            >
              {createTodoMutation.isPending ? (
                <LoaderCircle className="mr-2 h-6 w-6 animate-spin" />
              ) : (
                "Crear"
              )}
            </Button>
          </form>
        </Form>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
};
