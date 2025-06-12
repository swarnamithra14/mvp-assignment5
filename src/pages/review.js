import CustomerReviews from '@/components/CustomerReviews'

export default function ReviewsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-yellow-700 mb-4">🌟 Customer Reviews</h1>
      <CustomerReviews />
    </div>
  );
}
