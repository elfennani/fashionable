"use client";
import Button from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  full_name: z
    .string({ required_error: "Nom complet est obligatoire" })
    .min(2, { message: "2 lettre minimum" })
    .max(50, { message: "50 lettre maximum" }),
  email: z
    .string({ required_error: "E-mail est obligatoire" })
    .email({ message: "E-mail est invalid" }),

  phone: z
    .string({
      invalid_type_error: "Téléphone doit être un numero",
      required_error: "Téléphone est obligatoire",
    })
    .min(5, { message: "5 numero minimum " }),
  content: z
    .string({ required_error: "Message est obligatoire" })
    .min(10, { message: "10 lettre minumum pour le message" }),
});

type ContactFormData = z.infer<typeof schema>;

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["message", "send"],
    mutationFn: async (data: ContactFormData) => {
      const lastSent = Number(localStorage.getItem("last-message-sent"));
      if (!isNaN(lastSent)) {
        if (Date.now() - lastSent < 1000 * 60 * 5) {
          throw new Error(
            "Vous devez attendre 5 minutes avant de pouvoir envoyer un nouveau message."
          );
        }
      }

      if (!process.env.NEXT_PUBLIC_SEND_MESSAGE) {
        console.error("NEXT_PUBLIC_SEND_MESSAGE env var was not provided");
        return;
      }
      const res = await fetch(process.env.NEXT_PUBLIC_SEND_MESSAGE, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.status != 204) {
        const error = await res.json();
        console.log(error);
        throw new Error(JSON.stringify(error));
      }
    },
    onError(err) {
      form.setError("content", { message: err.message });
    },
    onSuccess: () => {
      toast("Message envoyé");
      localStorage.setItem("last-message-sent", Date.now().toString());
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await mutateAsync(data);
  };

  return (
    <Form {...form}>
      <form
        id="validation-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="bg-neutral-100 p-4 md:p-8 flex flex-col gap-6 sm:gap-8">
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-4xl mb-2">
              Envoyer un message
            </h1>
            <p className="font-light uppercase sm:text-lg">
              Laissez-nous un message, et nous vous répondrons dans les plus
              brefs délais
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom Complet</FormLabel>
                  <FormControl>
                    <Input placeholder="Ali" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="0612345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="contact@exemple.xyz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr className="border-neutral-300" />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="sm:self-end"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Envoyer <span className="iconify teenyicons--send-outline size-6" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
