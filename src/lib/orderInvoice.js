export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  const rows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px;border:1px solid #ddd;">${item.title}</td>
          <td style="padding:8px;border:1px solid #ddd;text-align:center;">
            ${item.quantity}
          </td>
          <td style="padding:8px;border:1px solid #ddd;text-align:right;">
            $${item.price}
          </td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
      <h2 style="text-align:center;">🧾 Order Invoice</h2>

      <p><strong>Order ID:</strong> ${orderId}</p>

      <table style="width:100%; border-collapse:collapse; margin-top:20px;">
        <thead>
          <tr>
            <th style="padding:8px;border:1px solid #ddd;">Product</th>
            <th style="padding:8px;border:1px solid #ddd;">Qty</th>
            <th style="padding:8px;border:1px solid #ddd;">Price</th>
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>
      </table>

      <h3 style="text-align:right; margin-top:20px;">
        Total: $${totalPrice}
      </h3>

      <p style="text-align:center; margin-top:30px;">
        Thank you for your purchase ❤️
      </p>
    </div>
  `;
};
