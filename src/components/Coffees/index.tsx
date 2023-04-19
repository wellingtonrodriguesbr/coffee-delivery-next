import { useEffect, useState } from "react";

export interface Coffee {
  id: number;
  image_url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export interface Coffees {
  coffees: Coffee[];
}

export function Coffees() {
  const [coffeesList, setCoffeesList] = useState<Coffees[]>([]);
  console.log(coffeesList);

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
      <h2 className="font-cursive text-3xl">Nossos cafés</h2>
    </div>
  );
}
