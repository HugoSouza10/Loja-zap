import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const genereteMessege = () => {
    const { name, adress  } = useCheckoutStore(state=>state);
    const { cart } = useCartStore(state=>state);

    let ordemProduct = [];
    for(let item of cart) {
        ordemProduct.push(`${item.quantity} X ${item.product.name}`)
    }

    return `**Dados do cliente:**
Nome: ${name}
Endereço: ${adress.street}, ${adress.number} (${adress.complement}) 
${adress.district}, ${adress.city} / ${adress.state}
-----------------------------
**Pedido:**
${ordemProduct.join("\n")}
`;
}