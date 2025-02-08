"use client";

import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "~/trpc/react";

export function CreatePost() {

  const router = useRouter();

  const formSchema = z.object({
    name: z.string().min(3, {
      message: "Post title is required and must be at least 3 characters.",
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createPost.mutate({ name: values.name });
    form.reset();
  }

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <Form
        {...form}
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={createPost.isPending}
          >
            {createPost.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
