import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function SeedlingList() {
  const [seedlings, setSeedlings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'seedlings'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setSeedlings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
        🌱 Seedling Inventory
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {seedlings.map((seedling, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-green-200">
            <p className="text-xl font-semibold text-green-900">Name: {seedling.name}</p>
            <p className="text-gray-700">Type: {seedling.type}</p>
            <p className="text-gray-700">Quantity: {seedling.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
