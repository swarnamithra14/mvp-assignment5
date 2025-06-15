import { useState, useEffect } from 'react';

export default function FertilizerInventory() {
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFertilizers([
        { id: 1, name: 'Organic Compost', quantity: '50 kg' },
        { id: 2, name: 'NPK 20-20-20', quantity: '30 kg' },
        { id: 3, name: 'Vermicompost', quantity: '40 kg' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 bg-yellow-50 rounded-xl shadow">
      <h2 className="text-xl font-bold text-yellow-700 mb-2">🧪 Fertilizer Inventory</h2>
      {loading ? (
        <p className="text-gray-500">Loading inventory...</p>
      ) : (
        <ul className="list-disc pl-6 text-gray-700">
          {fertilizers.map((item) => (
            <li key={item.id}>
              {item.name} - <span className="text-sm text-gray-500">{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
