import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { genereteMessege } from "@/lib/generete-messege";

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state);
    const messege = genereteMessege();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(messege)}`;
    return (
       <div className="text-center flex flex-col gap-5">
            <p>Perfeito<strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso whatssap para concluir. Nosso atendente irá te guiar!</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para whatssap</Link>
            </Button>
       </div>
    )
}