import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import * as RadioGroup from "@radix-ui/react-radio-group";

const methods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard className="text-purple" size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank className="text-purple" size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money className="text-purple" size={16} />,
  },
};

export function PaymentMethods() {
  return (
    <RadioGroup.Root
      className="flex items-center gap-4 mt-8"
      defaultValue="default"
      aria-label="View density"
    >
      {Object.entries(methods).map(([key, { label, icon }]) => (
        <div
          key={key}
          className="flex p-4 rounded-md bg-base-button cursor-pointer"
        >
          <RadioGroup.Item
            className="w-[0px] h-[0px] hidden"
            value={key}
            id={key}
          >
            <RadioGroup.Indicator className="w-[0px] h-[0px] hidden" />
          </RadioGroup.Item>
          <label
            className="flex gap-3 items-center text-xs uppercase text-base-text cursor-pointer"
            htmlFor={key}
          >
            {icon}
            {label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}
