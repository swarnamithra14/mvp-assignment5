import SeedlingStock from '@/components/SeedlingStock'

export default function StockPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🌿 Seedling Stock</h1>
      <SeedlingStock />
    </div>
  );
}
