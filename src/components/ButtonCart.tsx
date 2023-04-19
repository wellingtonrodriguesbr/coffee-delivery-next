import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
}

export function ButtonCart({ icon, ...props }: ButtonProps) {
  return <button {...props}>{icon}</button>;
}
