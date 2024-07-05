"use client"

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAdress } from "@/components/checkout/step-adress";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";


type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void,
}

export const CheckoutDialog = ({open, onOpenChange}:Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');
    let ProgressPct = 0;

    switch(step) {
        case 'user': ProgressPct = 30;
            break;
        case 'address': ProgressPct = 70;
            break;
        case 'finish': ProgressPct = 100  
    }

    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para whatssap'}
                    </DialogTitle>
                </DialogHeader>
               <Progress value={ProgressPct}/>
               <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep}/>}
                    {step === 'address' && <StepAdress setStep={setStep}/>}
                    {step === 'finish' && <StepFinish/>}
               </div>
            </DialogContent>
        </Dialog>
    )
}