import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function FertilizerInventory() {
  const [fertilizers, setFertilizers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'fertilizer'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setFertilizers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-2">
        🧪 Fertilizer Inventory
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fertilizers.map((fertilizer, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-blue-200">
            <p className="text-xl font-semibold text-blue-900">Name: {fertilizer.name}</p>
            <p className="text-black">Type: {fertilizer.type}</p>
            <p className="text-black">Quantity: {fertilizer.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
