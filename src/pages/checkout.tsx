import Head from "next/head";
import { Header } from "@/components/Header";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { Input } from "@/components/Input";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout | Coffee Delivery</title>
      </Head>
      <Header />

      <form className="container flex gap-8 justify-between">
        <div className="w-full mt-10">
          <h3 className="font-cursive text-base-subtitle text-lg">
            Complete seu pedido
          </h3>
          <div className="min-w-[640px] bg-base-card p-10 mt-4 rounded-md">
            <div className="flex gap-2">
              <MapPinLine className="text-yellow-dark" size={22} />
              <div className="flex flex-col">
                <h5 className="text-base text-base-subtitle">
                  Endereço de Entrega
                </h5>
                <p className="text-base-text text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-6 gap-4">
              <Input className="col-span-3" placeholder="CEP" />
              <Input className="col-span-full" placeholder="Rua" />
              <Input
                className="col-span-2"
                type="number"
                placeholder="Número"
              />
              <Input className="col-span-4" placeholder="Complemento" />
              <Input className="col-span-2" placeholder="Bairro" />
              <Input className="col-span-3" placeholder="Cidade" />
              <Input className="col-span-1" maxLength={2} placeholder="UF" />
            </div>
          </div>
          <div className="min-w-[640px] bg-base-card p-10 mt-3 rounded-md">
            <div className="flex gap-2">
              <CurrencyDollar className="text-purple" size={22} />
              <div className="flex flex-col">
                <h5 className="text-base text-base-subtitle">Pagamento</h5>
                <p className="text-base-text text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <h3 className="font-cursive text-base-subtitle text-lg">
            Cafés selecionados
          </h3>
          <div className="flex-1 bg-base-card h-32 mt-4 rounded-md rounded-tr-[36px] rounded-bl-[36px]"></div>
        </div>
      </form>
    </>
  );
}
