import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`rounded-[4px] p-3 bg-base-input border border-base-button placeholder:text-base-label/50 outline-none focus:border-base-label text-base-text text-sm ${className}`}
      {...props}
    />
  );
}
