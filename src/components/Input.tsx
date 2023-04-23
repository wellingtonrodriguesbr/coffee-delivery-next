import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className: string;
  isComplement?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isComplement = false, ...props },
  ref
) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <div className="relative">
        <input
          className={`rounded-[4px] p-3 bg-base-input border border-base-button placeholder:text-base-label/50 outline-none focus:border-base-label text-base-text text-sm w-full`}
          ref={ref}
          {...props}
        />
        {isComplement ? (
          <p className="absolute right-1 top-4 w-fit px-2 bg-base-input text-xs italic text-base-label">
            Opcional
          </p>
        ) : null}
      </div>
      <ErrorMessage
        errors={errors}
        name={props.name!}
        render={({ message }) => (
          <p className="text-left text-xs text-red-400">{message}</p>
        )}
      />
    </div>
  );
});
