import Image from "next/image";
import { Coffee } from ".";

interface CardProps {
  item: Coffee;
}

export function Card({ item }: CardProps) {
  return (
    <div className="bg-base-card relative px-6 py-5 rounded-md rounded-tr-[36px] rounded-bl-[36px] min-h-[310px]">
      <Image src={item.image_url} alt="" width={120} height={120} />
      {item.tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
      <strong>{item.title}</strong>
      <span>{item.description}</span>
      <div>
        <h3>
          <span></span>
          9,90
        </h3>
        <div></div>
      </div>
    </div>
  );
}
