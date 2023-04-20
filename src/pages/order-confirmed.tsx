import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/Header";
import image from "../assets/SuccessImage.png";
import location from "../assets/icons/map.svg";
import clock from "../assets/icons/time.svg";
import money from "../assets/icons/money.svg";

export default function OrderConfirmed() {
  return (
    <>
      <Head>
        <title>Pedido confirmado | Coffee Delivery</title>
      </Head>
      <Header />
      <section className="container">
        <h2 className="mt-20 text-[2rem] font-cursive font-extrabold text-yellow-dark">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl text-base-subtitle mt-1">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="mt-16 flex justify-between w-full">
          <div className="h-fit w-fit bg-gradient-to-r from-yellow to-purple p-[1px] rounded-md rounded-tr-[36px] rounded-bl-[36px]">
            <div className="py-10 pl-10 pr-64 bg-white rounded-md rounded-tr-[36px] rounded-bl-[36px]">
              <div className="flex gap-3 items-center">
                <Image src={location} alt="" width={32} height={32} priority />
                <div className="flex flex-col">
                  <span className="text-base text-base-text">
                    Entrega em <strong className="">Nome da rua, 102</strong>
                  </span>
                  <span className="text-base text-base-text">
                    Farrapos - Porto Alegre, RS
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center my-8">
                <Image src={clock} alt="" width={32} height={32} priority />
                <div className="flex flex-col">
                  <span className="text-base text-base-text">
                    Previsão da entrega
                  </span>
                  <strong className="text-base text-base-text">
                    20 min - 30 min
                  </strong>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Image src={money} alt="" width={32} height={32} priority />
                <div className="flex flex-col">
                  <span className="text-base text-base-text">
                    Pagamento na entrega
                  </span>
                  <strong className="text-base text-base-text">
                    Cartão de crédito
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <Image src={image} alt="" width={492} height={293} priority />
        </div>
      </section>
    </>
  );
}
