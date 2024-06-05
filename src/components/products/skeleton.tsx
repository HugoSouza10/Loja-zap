import { Skeleton } from "@/components/ui/skeleton"

export const TabsSkeleton = () => {
    return (
        <div>
            <Skeleton className="w-full h-10 rounded-xl"/>
            <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {/*Aqui temos um skeleton fake */}
                {Array.from({length: 6}, (item, index)=>
                    <div key={index}>
                        <Skeleton className="w-full h-32 rounded-lg"/>
                        <Skeleton className="mt-2 w-full h-7 rounded-lg"/>
                        <Skeleton className="mt-2 w-16 h-5 rounded-lg"/>
                        <Skeleton className="mt-2 w-full h-9 rounded-lg"/>
                    </div>
                )}
            </div>
        </div>
    )
}

 {
    /*grid-cols-2: Celulares muito pequeno começa com 2
      sm:grid-cols-3: Celulares pequeno ou deitado começa com 3
      md:grid-cols-4: Dispositivos grandes suportam 4
    */
}