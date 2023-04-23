import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Trash } from "@phosphor-icons/react";
import { CartItem, useCart } from "@/contexts/CartContext";

interface ButtonRemoveItemDialogProps {
  item: CartItem;
}

export function ButtonRemoveItemDialog({ item }: ButtonRemoveItemDialogProps) {
  const { handleRemoveItem } = useCart();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          type="button"
          className="flex items-center justify-center gap-1 p-2 bg-base-button rounded-md text-base-text hover:bg-base-hover transition-colors text-xs uppercase"
        >
          <Trash className="text-purple" size={16} />
          Remover
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/20" />
        <AlertDialog.Content className="bg-base-card p-6 max-w-md rounded-md  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <AlertDialog.Title className="text-lg text-base-subtitle font-bold">
            Tem certeza que deseja remover do carrinho?
          </AlertDialog.Title>
          <div className="flex items-center justify-end gap-2 mt-6">
            <AlertDialog.Cancel asChild>
              <button className="bg-yellow hover:bg-yellow-dark transition-colors text-white font-bold px-4 py-1 rounded-md">
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-purple-light hover:bg-transparent transition-colors font-bold text-purple px-4 py-1 rounded-md"
              >
                Sim, remover
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
