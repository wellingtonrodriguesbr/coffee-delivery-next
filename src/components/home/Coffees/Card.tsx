import Image from "next/image";
import { Coffee } from ".";
import { formattedPrice } from "@/utils/formattedPrice";
import { IncreaseDecreaseButton } from "../../IncreaseDecreaseButton";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ButtonCart } from "../../ButtonCart";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface CardProps {
  item: Coffee;
}

export function Card({ item }: CardProps) {
  const { handleAddItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseItemQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseItemQuantity() {
    setQuantity((state) => state - 1);
  }

  function handleAddItemToCart() {
    const coffeeToAdd = {
      ...item,
      quantity,
    };

    handleAddItem(coffeeToAdd);
    alert("Item adicionado ao carrinho!");
  }

  return (
    <div className="bg-base-card relative px-6 py-5 rounded-md rounded-tr-[36px] rounded-bl-[36px] min-h-[310px] flex flex-col justify-center items-center border border-transparent hover:border-base-hover transition-colors">
      <Image
        className="absolute left-1/2 -top-5 -translate-x-1/2 drop-shadow-xl"
        src={item.image_url}
        alt=""
        width={120}
        height={120}
        priority
      />
      <div className="mt-24 flex items-center gap-1">
        {item.tags.map((tag, index) => (
          <span
            className="bg-yellow-light px-2 py-1 rounded-full font-bold text-yellow-dark text-[0.625rem] uppercase"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <strong className="font-cursive text-base-subtitle text-xl mt-4 mb-2">
        {item.title}
      </strong>
      <span className="text-center text-base-label text-sm">
        {item.description}
      </span>
      <div className="mt-auto flex items-center justify-between w-full">
        <h3 className="font-cursive font-extrabold text-2xl text-base-text">
          <span className="font-sans text-sm font-normal">R$</span>
          {formattedPrice(item.price).replace("R$", "")}
        </h3>
        <div className="flex items-center gap-2">
          <IncreaseDecreaseButton
            quantity={quantity}
            increaseItemQuantity={handleIncreaseItemQuantity}
            decreaseItemQuantity={handleDecreaseItemQuantity}
          />
          <ButtonCart
            onClick={handleAddItemToCart}
            className="flex justify-center items-center rounded-md text-white bg-purple p-2 hover:bg-purple-dark transition-all"
            icon={<ShoppingCartSimple size={22} weight="fill" />}
          />
        </div>
      </div>
    </div>
  );
}
