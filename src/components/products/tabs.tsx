
import { getAllProducts } from "@/services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";


type Tab =  {
    title: string,
    value: string,
    products: Product[]
}
export const ProductTabs = async () => {

    const products = await getAllProducts();


    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter(item=> item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: products.filter(item=> item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: products.filter(item=> item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: products.filter(item=> item.category === 'beverage')
        },
    ];

     {/*Criamos umas abas */}
    return(
        <Tabs defaultValue="sushi">

            <TabsList className="flex">
                {tabs.map((item) => (
                    <TabsTrigger 
                        className="flex-1" 
                        key={item.value} 
                        value={item.value}
                        >{item.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((item, index) => (
                <TabsContent value={item.value}>
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm: grid-flow-col-3 md:grid-cols-4">
                            {/*Aqui a gente faz um loop dentro do array de produtos */}
                            {item.products.map(products =>(
                                <div>{products.name}</div>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 &&
                        <ProductEmpty/>
                    }
                </TabsContent>
            ))}
        </Tabs>
    );
}