import axios from 'axios';

export const createPixPayment = async (amount: number, orderId: string) => {
  try {
    const response = await axios.post(`${process.env.API_URL_MERCADO_PAGO}/payments`, {
      transaction_amount: amount,
      description: `Pedido ${orderId}`,
      payment_method_id: 'pix',
      payer: {
        email: 'hugodev41@gmail.com', // Substitua pelo e-mail do comprador, se disponível
      },
    }, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_MERCADO_PAGO}`,
      },
    });

    return response.data; // Supondo que a resposta inclua o QR Code ou chave PIX
  } catch (error) {
    console.error('Erro ao criar pagamento PIX:', error);
    throw error;
  }
};

export const checkPixPaymentStatus = async (paymentId: string) => {
  try {
    const response = await axios.get(`${process.env.API_URL_MERCADO_PAGO}/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_MERCADO_PAGO}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao verificar status do pagamento PIX:', error);
    throw error;
  }
};
