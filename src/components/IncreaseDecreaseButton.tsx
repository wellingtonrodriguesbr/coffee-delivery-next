import { Minus, Plus } from "@phosphor-icons/react";

interface IncreaseDecreaseButtonProps {
  small?: boolean;
  quantity: number;
  increaseItemQuantity?: () => void;
  decreaseItemQuantity?: () => void;
}

export function IncreaseDecreaseButton({
  small = false,
  quantity,
  increaseItemQuantity,
  decreaseItemQuantity,
}: IncreaseDecreaseButtonProps) {
  return (
    <div
      className={`flex gap-2 bg-base-button rounded-md ${
        small ? "px-2 py-1" : "px-3 py-2"
      }`}
    >
      <button
        type="button"
        className="text-purple hover:text-purple-dark transition-colors text-[0px]"
        onClick={decreaseItemQuantity}
      >
        <Minus size={14} />
      </button>
      <span className="text-base-title text-base">{quantity}</span>
      <button
        type="button"
        className="text-purple hover:text-purple-dark transition-colors text-[0px]"
        onClick={increaseItemQuantity}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
