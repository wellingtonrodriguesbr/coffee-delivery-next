import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Coffee } from "@/components/home/Coffees";
import { produce } from "immer";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextData {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  handleAddItem: (item: CartItem) => void;
  handleRemoveItem: (item: CartItem) => void;
  clearCart: () => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

export const CartContext = createContext({} as CartContextData);

const ITEMS_STORAGE_KEY = "coffeeDelivery:cart";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + Number(cartItem.price) * cartItem.quantity;
  }, 0);

  function handleAddItem(item: CartItem) {
    const itemAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (itemAlreadyExistsInCart < 0) {
        draft.push(item);
      } else {
        draft[itemAlreadyExistsInCart].quantity += item.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function handleRemoveItem(item: CartItem) {
    const itemAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    const newCart = produce(cartItems, (draft) => {
      draft.splice(itemAlreadyExistsInCart, 1);
    });

    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    const storagedCart = localStorage.getItem(ITEMS_STORAGE_KEY);

    if (storagedCart) {
      setCartItems(JSON.parse(storagedCart));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems, mounted]);

  return (
    <CartContext.Provider
      value={{
        handleAddItem,
        handleRemoveItem,
        changeCartItemQuantity,
        clearCart,
        cartItems,
        cartQuantity,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const {
    cartItems,
    cartItemsTotal,
    cartQuantity,
    handleAddItem,
    handleRemoveItem,
    changeCartItemQuantity,
    clearCart,
  } = useContext(CartContext);

  return {
    cartItems,
    cartItemsTotal,
    cartQuantity,
    handleAddItem,
    handleRemoveItem,
    changeCartItemQuantity,
    clearCart,
  };
}
