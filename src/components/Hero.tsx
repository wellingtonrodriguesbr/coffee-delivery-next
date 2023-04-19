import Image from "next/image";
import heroImg from "../assets/HeroImage.png";
import cartImg from "../assets/icons/cart.svg";
import boxImg from "../assets/icons/box.svg";
import clockImg from "../assets/icons/time.svg";
import coffeeImg from "../assets/icons/coffee.svg";

export function Hero() {
  return (
    <div className="grid grid-cols-2 justify-between items-center mt-24">
      <div className="">
        <h1 className="font-cursive font-extrabold text-5xl leading-relaxed text-base-title">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className="text-base-subtitle text-xl mt-4">
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </p>
        <div className="grid grid-cols-2 gap-5 mt-16">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 w-fit">
              <Image src={item.img} alt="" width={32} height={32} />
              <span className="text-base text-base-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Image src={heroImg} alt="" width={476} height={360} />
      </div>
    </div>
  );
}

const items = [
  {
    img: cartImg,
    text: "Compra simples e segura",
  },
  {
    img: boxImg,
    text: "Embalagem mantém o café intacto",
  },
  {
    img: clockImg,
    text: "Entrega rápida e rastreada",
  },
  {
    img: coffeeImg,
    text: "O café chega fresquinho até você",
  },
];
