import { Product } from "@/types/product";
import { products } from "@/data/products";

export const getAllProducts = async (): Promise<Product[]> => {
        {/*Quando a gente cria uma promise, a gente pode usar o resolver para
        retornar os dados da promesa */}
        return new Promise((resolve, reject) => {
            return setTimeout(()=>{
                resolve(products);
            },2000)
        })
}