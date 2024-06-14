"use client"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./item";


export const CartSidebar = () =>{
    //Puxando carrinho do zustant
    const { cart } = useCartStore(state => state);

    let subTotal = 0;
    for(let item of cart) {
        subTotal+=item.quantity * item.product.price;
    }
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <RocketIcon className="mr-2"/>
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item=>(
                        <CartItem key={item.product.id} item={item}/>
                    ))}
                </div>
                <Separator className="my-4"/>
                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>R$: {subTotal.toFixed(2)}</div>
                </div>
                <Separator className="my-4"/>
                <div className="text-center">
                    <Button disabled={cart.length === 0}>Finalizar Comprar</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}