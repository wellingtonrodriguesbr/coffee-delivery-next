import { useCart } from "@/contexts/CartContext";
import { IncreaseDecreaseButton } from "../IncreaseDecreaseButton";
import Image from "next/image";
import { formattedPrice } from "@/utils/formattedPrice";
import { Trash } from "@phosphor-icons/react";

export function CoffeesSelected() {
  const { cartItems } = useCart();

  return (
    <div className="w-full mt-10">
      <h3 className="font-cursive text-base-subtitle text-lg">
        Cafés selecionados
      </h3>
      <div className="flex-1 bg-base-card mt-4 p-10 rounded-md rounded-tr-[36px] rounded-bl-[36px]">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between w-full border-b border-base-button mt-8 pb-8 first:mt-0"
          >
            <div className="flex gap-3">
              <Image src={item.image_url} alt="" width={68} height={64} />

              <div className="flex flex-col gap-2">
                <p className="text-base-subtitle text-base">{item.title}</p>

                <div className="flex items-start gap-2">
                  <IncreaseDecreaseButton quantity={item.quantity} small />
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 p-2 bg-base-button rounded-md text-base-text hover:bg-base-hover transition-colors text-xs uppercase"
                  >
                    <Trash className="text-purple" size={16} />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <strong className="text-base text-base-text">
              {formattedPrice(item.price)}
            </strong>
          </div>
        ))}

        <div className="flex w-full justify-between items-center mt-6">
          <span>Total de itens</span>
          <span>252</span>
        </div>

        <div className="flex w-full justify-between items-center">
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>

        <div className="flex w-full justify-between items-center">
          <strong>Total</strong>
          <strong>R$ 32,50</strong>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow text-white uppercase font-bold py-3 rounded-md text-sm mt-6"
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
}
