"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactRight = () => {
  const formSchema = z.object({
    firstname: z.string().min(3, {
      message: "First name must be at least 3 characters",
    }),
    lastname: z.string().min(3, {
      message: "Last name must be at least 3 characters",
    }),

    email: z.string().email({
      message: "Invalid Email",
    }),

    message: z.string().min(10, {
      message: "Message must be at least 10 characters",
    }),
    consent: z.boolean().default(false),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="relative flex items-start bg-white rounded">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 space-y-5">
          <div className="flex gap-2 justify-between items-center">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>First Name</FormLabel>
                    <Asterisk className="h-4 w-4 text-red-500" />
                  </div>{" "}
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Last Name</FormLabel>
                    <Asterisk className="h-4 w-4 text-red-500" />
                  </div>{" "}
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Email</FormLabel>
                  <Asterisk className="h-4 w-4 text-red-500" />
                </div>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Message</FormLabel>
                  <Asterisk className="h-4 w-4 text-red-500" />
                </div>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <div className="flex items-center">
                  <FormLabel>GDPR Agreement</FormLabel>
                  <Asterisk className="h-4 w-4 text-red-500" />
                </div>
                <div className="flex gap-2">
                  <FormControl>
                    <Checkbox
                      required
                      id="consent"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <label
                    htmlFor="consent"
                    className="text-sm  font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I consent to having this website store my submitted
                    information
                  </label>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-secondary w-full block hover:bg-hover transition-all !mt-10"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
