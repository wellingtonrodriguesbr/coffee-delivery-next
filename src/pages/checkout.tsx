import Head from "next/head";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { FormOrderComplete } from "@/components/checkout/FormOrderComplete";
import { CoffeesSelected } from "@/components/checkout/CoffeesSelected";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/contexts/CartContext";

export const FormOrderCompleteSchema = z.object({
  cep: z.coerce
    .number({ invalid_type_error: "Digite um CEP válido" })
    .min(1, { message: "Digite um CEP válido" }),
  street: z
    .string()
    .min(4, { message: "Nome da rua precisa ter no mínimo 5 caracteres." }),
  number: z.string().min(1, {
    message: "Digite o número da sua casa.",
  }),
  complement: z.string().optional(),
  neighborhood: z.string().min(4, { message: "Digite o bairro" }),
  city: z.string().min(2, { message: "Digite a cidade" }),
  uf: z.string().max(2, { message: "Digite apenas a UF. Por exemplo: SP" }),
  paymentMethod: z.enum(["debit", "credit", "money"]),
});

export type FormOrderCompleteData = z.infer<typeof FormOrderCompleteSchema>;

export default function Checkout() {
  const { clearCart } = useCart();
  const router = useRouter();
  const completeOrder = useForm<FormOrderCompleteData>({
    resolver: zodResolver(FormOrderCompleteSchema),
    defaultValues: {
      paymentMethod: "credit",
    },
  });

  const { handleSubmit } = completeOrder;

  async function handleCompleteOrder(data: FormOrderCompleteData) {
    await router.push({
      pathname: "/order-confirmed",
      query: data,
    });

    clearCart();
  }

  return (
    <>
      <Head>
        <title>Checkout | Coffee Delivery</title>
      </Head>
      <Header />

      <FormProvider {...completeOrder}>
        <form
          className="container flex gap-8 justify-between"
          onSubmit={handleSubmit(handleCompleteOrder)}
        >
          <FormOrderComplete />
          <CoffeesSelected />
        </form>
      </FormProvider>
    </>
  );
}
