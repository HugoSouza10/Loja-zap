import jsPDF from 'jspdf';

export const generatePDF = async (orderDetails: any) => {
  console.log(orderDetails.items);
  const doc = new jsPDF();
  
  // Adiciona título e outras informações no PDF
  doc.text('Comprovante de Compra', 20, 20);
  doc.text(`Nome: ${orderDetails.name}`, 20, 30);
  doc.text(`Email: ${orderDetails.email}`, 20, 40);
  doc.text(`Data: ${orderDetails.date}`, 20, 50);
  doc.text('Itens Comprados:', 20, 60);

  // Adiciona itens comprados no PDF
  orderDetails.items.forEach((item: any, index: number) => {
    doc.text(`${item.product.name} - ${item.quantity} x ${item.product.price}`, 20, 70 + (index * 10));
  });

  // Calcular a posição vertical para o total
  const totalYPosition = 70 + (orderDetails.items.length * 10) + 10;

  // Adiciona total
  doc.text(`Total: ${orderDetails.total}`, 20, totalYPosition);

  // Salva o PDF com um nome
  doc.save('comprovante.pdf');
};
