export default function PaymentSuccess({
  searchParams: { amount }
}: {
  searchParams: { amount: string };
}) {
  return (
    <div className="bg-cream max-w-6xl mx-auto">
      <h1 className="text-4xl">Payment Success</h1>
      <p>Thank you for your donation of</p>
      <p className="text-2xl">¥{amount}</p>
    </div>
  );
}
