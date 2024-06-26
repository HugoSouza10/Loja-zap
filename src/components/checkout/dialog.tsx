import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Progress } from "@/components/ui/progress"

type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void,
}

export const CheckoutDialog = ({open, onOpenChange}:Props) => {
    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>...</DialogTitle>
                </DialogHeader>
               <Progress value={66}/>
               <div className="flex flex-col gap-3">Conteúdo</div>
            </DialogContent>
        </Dialog>
    )
}