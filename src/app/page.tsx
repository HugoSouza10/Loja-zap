

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductTabs } from "@/components/products/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";


const Page = () => {
  return(
    <div className="w-full max-w-4xl mx-auto">
      <Header/>
      <div className="mx-3">
        {/*Aqui basicamente fizemos um esqueleto para mostrar 
        quando não tiver carregando */}
        <Suspense fallback={<TabsSkeleton/>}>
          <ProductTabs/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default Page;