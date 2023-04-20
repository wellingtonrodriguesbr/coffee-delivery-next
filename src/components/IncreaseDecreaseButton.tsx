import { Minus, Plus } from "@phosphor-icons/react";

interface IncreaseDecreaseButtonProps {
  quantity: number;
  increaseItemQuantity?: () => void;
  decreaseItemQuantity?: () => void;
}

export function IncreaseDecreaseButton({
  quantity,
  increaseItemQuantity,
  decreaseItemQuantity,
}: IncreaseDecreaseButtonProps) {
  return (
    <div className="flex gap-1 bg-base-button rounded-md px-3 py-2">
      <button
        className="text-purple hover:text-purple-dark transition-colors"
        onClick={decreaseItemQuantity}
      >
        <Minus size={14} />
      </button>
      <span className="text-base-title text-base">{quantity}</span>
      <button
        className="text-purple hover:text-purple-dark transition-colors"
        onClick={increaseItemQuantity}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
