'use client';

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
import { Pagination } from "@/components/pagination/productPagination";

type Tab = {
    title: string,
    value: string,
    products: Product[]
};

export const ProductTabs = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({});
    const itemsPerPage = 7;

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const fetchedProducts = await getAllProducts();
            setProducts(fetchedProducts);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return <div>Carregando produtos...</div>;
    }

    const tabs: Tab[] = [
        { title: 'Sushi', value: 'sushi', products: products.filter(item => item.category === 'sushi') },
        { title: 'Temaki', value: 'temaki', products: products.filter(item => item.category === 'temaki') },
        { title: 'Combinados', value: 'pack', products: products.filter(item => item.category === 'pack') },
        { title: 'Bebidas', value: 'beverage', products: products.filter(item => item.category === 'beverage') },
    ];

    const handlePageChange = (tab: string, page: number) => {
        setCurrentPage((prev) => ({ ...prev, [tab]: page }));
    };

    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex">
                {tabs.map((item) => (
                    <TabsTrigger
                        className="flex-1"
                        key={item.value}
                        value={item.value}
                    >
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((item) => {
                const currentTabPage = currentPage[item.value] || 1;
                const startIndex = (currentTabPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedProducts = item.products.slice(startIndex, endIndex);

                return (
                    <TabsContent key={item.value} value={item.value}>
                        {paginatedProducts.length > 0 ? (
                            <div className="grid gap-5 grid-cols-2 sm:grid-flow-col-3 md:grid-cols-4">
                                {paginatedProducts.map(product => (
                                    <ProductItem key={product.id} item={product} />
                                ))}
                            </div>
                        ) : (
                            <ProductEmpty />
                        )}

                        {/* Componente de Paginação */}
                        <Pagination
                            totalItems={item.products.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentTabPage}
                            onPageChange={(page) => handlePageChange(item.value, page)}
                        />
                    </TabsContent>
                );
            })}
        </Tabs>
    );
};
