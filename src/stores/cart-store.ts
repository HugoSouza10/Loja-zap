import { Cart } from "@/types/Cart";
import { Product } from "@/types/product";
import { create } from "zustand";


//Tipo de dados do carrinho
type States = {
    cart: Cart[];
}

//Tipo de ações do carrinho
type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
}

//Dados iniciais
const initialState: States = {
    cart: []
}

//Criação da store usando o hook create
export const useCartStore = create<States & Actions>(set => ({
    ...initialState,
    upsertCartItem: (product, quantity) => set(state => {
        //Pegando o carrinho
        let newCart = state.cart;

        let productIndex = newCart.findIndex(item => item.product.id === product.id);

        if(productIndex <0) {
            newCart.push({product, quantity:0});
            productIndex = newCart.findIndex(item => item.product.id === product.id);
        }

        //Aqui a gente aumenta ou não a quantidade
        newCart[productIndex].quantity += quantity;

        console.log(newCart)

        if(newCart[productIndex].quantity <= 0) {
            newCart.filter(item=> item.product.id != product.id);
        }

        return {...state, cart: newCart}
    })
}));


/*
upsertCartItem: Aqui agente vai mandar o produto

let productIndex = newCart.findIndex(item => item.product.id === product.id): 
A gente compara o que tá no carrinho com o produto recebido

*/