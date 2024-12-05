import React, { useEffect } from 'react';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';

const PaymentBrickComponent = () => {
  useEffect(() => {
    // Inicializa o SDK com a sua chave pública
    initMercadoPago('TEST-c3049b61-3c82-497a-b6a4-151211e1fea0');
  }, []);

  // Parâmetros de configuração
  const paymentSettings = {
    initialization: {
      amount: 100, // Valor da transação
    },
    customization: {
      paymentMethods: {
        creditCard: "all",
        debitCard: "all",
        ticket: "all",
        bankTransfer: "all",
        mercadoPago: "all",
        atm: "all",
      },
    },
    callbacks: {
      onReady: () => console.log('Brick pronto!'),
      onSubmit: (data) => {
        console.log('Dados enviados:', data);
        // Aqui você deve enviar os dados ao backend para criar o pagamento
      },
      onError: (error) => console.error('Erro:', error),
    },
  };

  return (
    <div id="payment-brick-container">
      <Payment 
        initialization={{ amount: 100 }} // Garantindo que a inicialização tenha o valor correto
        customization={paymentSettings.customization}
        callbacks={paymentSettings.callbacks}
      />
    </div>
  );
};

export default PaymentBrickComponent;
