"use client";
import Container from "@/components/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import cities from "@/features/ordering/morocco_cities.json";
import useShoppingCart from "@/features/shopping-cart/hooks/use-shopping-cart";
import getCartItems from "@/features/shopping-cart/utils/get-cart-items";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import OrderSummary from "./order-summary";
import { useRouter } from "next/navigation";
import setCartItems from "@/features/shopping-cart/utils/set-cart-items";

const formSchema = z.object({
  first_name: z
    .string({ required_error: "Prénom est obligatoire" })
    .min(2, { message: "2 lettre minimum" })
    .max(50, { message: "50 lettre maximum" }),
  last_name: z
    .string({ required_error: "Nom est obligatoire" })
    .min(2, { message: "2 lettre minimum" })
    .max(50, { message: "50 lettre maximum" }),
  email: z
    .string({ required_error: "E-mail est obligatoire" })
    .email({ message: "E-mail est invalid" }),
  postal_code: z.number({ coerce: true }).optional(),
  phone: z
    .string({ required_error: "Téléphone est obligatoire" })
    .refine(validator.isMobilePhone, { message: "Téléphone invalide" }),
  address: z
    .string({ required_error: "Address est obligatoire" })
    .min(10, { message: "10 lettre minimum" })
    .max(200, { message: "200 lettre maximum" }),
  province: z.string({ required_error: "Province est obligatoire" }),
  city: z
    .string({ required_error: "Ville est obligatoire" })
    .min(2, { message: "2 lettre minimum" })
    .max(50, { message: "50 lettre maximum" }),
  promocode: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const OrderingContent = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const { data: products, isPending, isError, error } = useShoppingCart();
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const selectedProvince = form.watch("province");

  const provinces = useMemo(
    () => Array.from(new Set(cities.map((city) => city.province))),
    []
  );

  const citiesList = useMemo(
    () =>
      cities.filter((c) => c.province == selectedProvince).map((c) => c.city),
    [selectedProvince]
  );

  const onSubmit = async (data: FormData) => {
    if (!process.env.NEXT_PUBLIC_UPLOAD_ORDER) {
      console.error("NEXT_PUBLIC_UPLOAD_ORDER env var was not provided");
      return;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_UPLOAD_ORDER, {
      body: JSON.stringify({
        ...data,
        products: getCartItems().map((item) => ({
          id: item.productId,
          quantity: item.quantity,
        })),
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.status != 200) {
      console.error(await res.json());
      setErrorAlert(true);
      return;
    }

    setCartItems([]);
    router.replace("/");
  };

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
  }, [isError, error]);

  if (isPending) {
    <Container className="grid grid-cols-1 lg:grid-cols-2 items-start py-4 md:py-8 lg:py-16 gap-4 md:gap-8 lg:gap-16">
      <Skeleton className="h-96" />
      <Skeleton className="h-52" />
    </Container>;
  }

  if (isError) {
    return (
      <Container className="flex flex-col items-center justify-center py-4 md:py-8 lg:py-16 gap-4 md:gap-8 lg:gap-16">
        <Alert variant={"destructive"}>
          <span className="iconify teenyicons--exclamation-circle-outline size-4" />
          <AlertTitle>Échec</AlertTitle>
          <AlertDescription>
            Échec du chargement des details produits
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 items-start py-4 md:py-8 lg:py-16 gap-4 md:gap-8 lg:gap-16">
      <div className="flex flex-col gap-4">
        <h1>Coordonnées</h1>
        <hr className="border-neutral-200" />

        <AlertDialog open={errorAlert} onOpenChange={setErrorAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Échec de l&apos;envoi de la commande
              </AlertDialogTitle>
              <AlertDialogDescription>
                Une erreur inattendue s&apos;est produite lors de l&apos;envoi
                de la commande. Veuillez réessayer ou vérifier les informations
                saisies.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Ok</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Form {...form}>
          <form
            id="validation-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="Ali" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="El Bachir" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@domain.xyz"
                      type="email"
                      {...field}
                    />
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
                    <Input placeholder="06 12 34 56 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Province</FormLabel>
                    <Select
                      onValueChange={(...args) => {
                        form.resetField("city");
                        field.onChange(...args);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une province" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ville</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une ville" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {citiesList.length == 0 && (
                          <SelectItem value={"---"} disabled>
                            ---
                          </SelectItem>
                        )}
                        {citiesList.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-3 md:gap-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse de livraison</FormLabel>
                    <FormControl>
                      <Input placeholder="Rue inconnu, 1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postal_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code Postal</FormLabel>
                    <FormControl>
                      <Input placeholder="32250" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="promocode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code de promotion</FormLabel>
                  <FormControl>
                    <Input placeholder="Saisir votre code promo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <OrderSummary
        products={products ?? []}
        disabled={form.formState.isSubmitting}
        city={form.watch("city")}
        province={form.watch("province")}
        promocode={form.watch("promocode")}
      />
    </Container>
  );
};

export default OrderingContent;
