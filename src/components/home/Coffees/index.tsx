import { useEffect, useState } from "react";
import { Card } from "./Card";

export interface Coffee {
  id: number;
  image_url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Coffees() {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([]);

  useEffect(() => {
    try {
      fetch("/api/coffees")
        .then((response) => response.json())
        .then((data) => setCoffeesList(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mt-32 py-8">
      <h2 className="font-cursive text-4xl text-base-subtitle font-extrabold">
        Nossos cafés
      </h2>
      <section className="grid grid-cols-4 gap-8 mt-24 pb-24">
        {coffeesList.map((coffee) => (
          <Card key={coffee.id} item={coffee} />
        ))}
      </section>
    </div>
  );
}
