import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo.svg";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <header className="py-8 bg-base-background">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="" width={85} height={40} priority />
        </Link>
        <div className="flex items-center gap-2">
          <div className="bg-purple-light flex items-center gap-1 py-2 px-3 rounded-md text-purple ">
            <MapPin weight="fill" size={22} />
            <span className="text-sm">Porto Alegre, RS</span>
          </div>
          <div className="relative group">
            {cartQuantity > 0 ? (
              <p className="absolute -top-2 -right-2 text-xs w-3 h-3 p-[10px] text-white rounded-full bg-yellow-dark flex justify-center items-center font-bold group-hover:bg-yellow-light group-hover:text-yellow-dark transition-colors">
                {cartQuantity}
              </p>
            ) : null}
            <Link
              href="/checkout"
              className="flex justify-center items-center rounded-md text-yellow-dark bg-yellow-light p-2 group-hover:bg-yellow-dark group-hover:text-white transition-colors"
            >
              <ShoppingCartSimple size={22} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
