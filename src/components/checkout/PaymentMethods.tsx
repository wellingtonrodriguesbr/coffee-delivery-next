import { FormOrderCompleteData } from "@/pages/checkout";
import { ErrorMessage } from "@hookform/error-message";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useFormContext } from "react-hook-form";

export const methods = {
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
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormOrderCompleteData>();
  const selectedOption = watch("paymentMethod");

  return (
    <RadioGroup.Root
      className="flex items-center gap-4 mt-8"
      aria-label="View density"
      {...register("paymentMethod")}
      onValueChange={(value: FormOrderCompleteData["paymentMethod"]) => {
        setValue("paymentMethod", value);
      }}
    >
      {Object.entries(methods).map(([key, { label, icon }]) => (
        <RadioGroup.Item
          key={key}
          value={key}
          id={key}
          className={`flex p-4 rounded-md cursor-pointer border ${
            selectedOption === key
              ? "border-purple  bg-purple-light"
              : "border-transparent  bg-base-button"
          }`}
        >
          <label
            className="flex gap-3 items-center text-xs uppercase text-base-text cursor-pointer"
            htmlFor={key}
          >
            {icon}
            {label}
          </label>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
