// src/services/calculateSubtotal.ts
import { useCartStore } from "@/stores/cart-store";

export const calculateSubtotal = () => {
  // Acesse o estado diretamente da loja
  const state = useCartStore.getState();
  const { cart } = state;

  let subTotal = 0;
  for (let item of cart) {
    subTotal += item.quantity * item.product.price;
  }
  return subTotal.toFixed(2);
};
