import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { genereteMessege } from "@/lib/generete-messege";
import { generatePDF } from '../../services/generate-receipt-pdf';
import { useCartStore } from "@/stores/cart-store";
import { calculateSubtotal } from '../../services/subtotal';

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);
    const messege = genereteMessege();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(messege)}`;

    const orderDetails = {
        name,
        email: 'joao.silva@example.com',
        date: new Date().toLocaleDateString(),
        items: cart,
        total: calculateSubtotal(),
    };
    return (
       <div className="text-center flex flex-col gap-5">
            <p>Perfeito<strong>{name}</strong>!</p>
            <button onClick={()=> generatePDF(orderDetails)}>Gerar comprovante pdf!</button>
            <p>Agora envie seu pedido ao nosso whatssap para concluir. Nosso atendente irá te guiar!</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para whatssap</Link>
            </Button>
       </div>
    )
}