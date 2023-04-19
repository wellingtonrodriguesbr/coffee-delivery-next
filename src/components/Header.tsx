import Image from "next/image";
import logo from "../assets/Logo.svg";
import location from "../assets/icons/location.svg";
import cart from "../assets/icons/cart-outlined.svg";
import { ButtonCart } from "./ButtonCart";

export function Header() {
  return (
    <header className="py-8 bg-base-background">
      <div className="container flex items-center justify-between">
        <Image src={logo} alt="" width={84.95} height={40} />
        <div className="flex items-center gap-2">
          <div className="bg-purple-light flex items-center gap-2 py-2 px-3 rounded-md">
            <Image src={location} alt="" width={22} height={22} />
            <span className="text-purple text-sm">Porto Alegre, RS</span>
          </div>
          <ButtonCart
            className="flex justify-center items-center rounded-md bg-yellow-light p-2 hover:brightness-95 transition-all"
            icon={<Image src={cart} alt="" width={22} height={22} />}
          />
        </div>
      </div>
    </header>
  );
}
