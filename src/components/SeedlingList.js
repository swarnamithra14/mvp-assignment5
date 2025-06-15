import { useState, useEffect } from 'react';

export default function SeedlingList() {
  const [seedlings, setSeedlings] = useState([
    { id: 1, name: 'Papaya Seedling', stock: 120 },
    { id: 2, name: 'Banana Tissue Culture', stock: 80 },
  ]);

  useEffect(() => {
    console.log("Seedling data loaded.");
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold text-green-700 mb-2">🌱 Seedling Inventory</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {seedlings.map((seedling) => (
          <li key={seedling.id}>
            {seedling.name} - <span className="text-sm text-gray-500">{seedling.stock} in stock</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
