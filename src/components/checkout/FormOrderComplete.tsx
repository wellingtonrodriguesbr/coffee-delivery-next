import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { Input } from "@/components/Input";
import { PaymentMethods } from "./PaymentMethods";
import { useFormContext } from "react-hook-form";
import { FormOrderCompleteData } from "@/pages/checkout";

export function FormOrderComplete() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormOrderCompleteData>();

  return (
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
          <Input
            className="col-span-3"
            placeholder="CEP"
            type="number"
            id="cep"
            {...register("cep")}
          />

          <Input
            className="col-span-full"
            type="text"
            placeholder="Rua"
            id="street"
            {...register("street")}
          />
          <Input
            className="col-span-2"
            type="text"
            placeholder="Número"
            id="number"
            {...register("number")}
          />
          <Input
            className="col-span-4"
            type="text"
            placeholder="Complemento"
            id="complement"
            isComplement
            {...register("complement")}
          />
          <Input
            className="col-span-2"
            type="text"
            placeholder="Bairro"
            id="neighborhood"
            {...register("neighborhood")}
          />
          <Input
            className="col-span-3"
            type="text"
            placeholder="Cidade"
            id="city"
            {...register("city")}
          />
          <Input
            className="col-span-1"
            type="text"
            maxLength={2}
            placeholder="UF"
            id="uf"
            {...register("uf")}
          />
        </div>
      </div>
      <div className="min-w-[640px] bg-base-card p-10 mt-3 rounded-md">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <CurrencyDollar className="text-purple" size={22} />
            <div className="flex flex-col">
              <h5 className="text-base text-base-subtitle">Pagamento</h5>
              <p className="text-base-text text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
}
