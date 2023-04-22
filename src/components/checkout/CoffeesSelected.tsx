import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { IncreaseDecreaseButton } from "../IncreaseDecreaseButton";
import { formattedPrice } from "@/utils/formattedPrice";
import { ArrowUpRight, Trash } from "@phosphor-icons/react";

const DELIVERY_VALUE = 3.5;

export function CoffeesSelected() {
  const {
    cartItems,
    cartItemsTotal,
    changeCartItemQuantity,
    handleRemoveItem,
  } = useCart();
  const orderTotal = cartItemsTotal + DELIVERY_VALUE;
  const emptyCart = !cartItems.length;

  function handleIncreaseQuantity(itemId: number) {
    changeCartItemQuantity(itemId, "increase");
  }
  function handleDecreaseQuantity(itemId: number) {
    changeCartItemQuantity(itemId, "decrease");
  }

  return (
    <div className="w-full mt-10">
      <h3 className="font-cursive text-base-subtitle text-lg">
        Cafés selecionados
      </h3>
      <div className="flex-1 bg-base-card mt-4 p-10 rounded-md rounded-tr-[36px] rounded-bl-[36px]">
        {emptyCart ? (
          <div className="flex justify-center items-center">
            <p className="text-base text-base-text text-center">
              Seu carrinho está vazio! <br /> Adicione itens ao seu pedido para
              continuar.
            </p>
          </div>
        ) : (
          <>
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
                      <IncreaseDecreaseButton
                        quantity={item.quantity}
                        increaseItemQuantity={() =>
                          handleIncreaseQuantity(item.id)
                        }
                        decreaseItemQuantity={() =>
                          handleDecreaseQuantity(item.id)
                        }
                        small
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item)}
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
              <span className="text-sm text-base-text">Total de itens</span>
              <span className="text-base text-base-text">
                {formattedPrice(cartItemsTotal)}
              </span>
            </div>

            <div className="flex w-full justify-between items-center my-3">
              <span className="text-sm text-base-text">Entrega</span>
              <span className="text-base text-base-text">
                {formattedPrice(DELIVERY_VALUE)}
              </span>
            </div>

            <div className="flex w-full justify-between items-center text-xl text-base-subtitle">
              <strong>Total</strong>
              <strong>{formattedPrice(orderTotal)}</strong>
            </div>
          </>
        )}

        {emptyCart ? (
          <Link
            href="/"
            className="w-full bg-purple text-white uppercase font-bold py-3 rounded-md text-sm mt-6 block flex justify-center items-center gap-3"
          >
            Adicionar itens
            <ArrowUpRight weight="bold" size={20} />
          </Link>
        ) : (
          <button
            type="submit"
            disabled={emptyCart}
            className="w-full bg-yellow text-white uppercase font-bold py-3 rounded-md text-sm mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Confirmar pedido
          </button>
        )}
      </div>
    </div>
  );
}
