'use client';

export default function PaymentSuccess({
  searchParams: { amount, to, name, error }
}: {
  searchParams: { amount: string; to: string; name: string, error: string };
}) {
  // TODO: Move the confirmation mail sending into another place

  return (
    <div className="bg-cream max-w-6xl mx-auto">
      <h1 className="text-4xl">Payment Success</h1>
      <p>Thank you {name ? `${name} ` : ""}for your donation of</p>
      <p className="text-2xl">¥{amount}</p>
      <small>{error ? `We couldn't send the confirmation email. Please contact us if you wish us to send it again. Error details: ${error}` : ""}</small>
      <p>A confirmation has been sent to you via e-mail ({to}). Contact <a href="mailto: yann.klein@me.com">us</a> if any trouble.</p>
    </div>
  );
}
