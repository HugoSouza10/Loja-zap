import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/Cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}

export const CartItemQuantity = ({cartItem}:Props) => {
    const { upsertCartItem } = useCartStore(state => state);

    console.log(cartItem)

    const handdlePlusButton = () => {
        upsertCartItem(cartItem.product, 1);
    }

    const handdleMinusButton = () => {
        upsertCartItem(cartItem.product, -1);
    }
    return (
        <div className="flex items-center gap-2">
           <Button
                onClick={handdlePlusButton}
                variant={"outline"}
                size="icon"
                className="size-6"
            >
                <PlusIcon className="size-3"/>
            </Button>
           <div className="text-xs">{cartItem.quantity}</div>
           <Button
                onClick={handdleMinusButton}
                variant={"outline"}
                size="icon"
                className="size-6"
            >
                <MinusIcon className="size-3"/>
            </Button>
        </div>
    )
}