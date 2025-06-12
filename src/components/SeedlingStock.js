'use client'
import React, { useState, useEffect } from 'react';

export default function SeedlingStock() {
  const [papayaStock, setPapayaStock] = useState(0);
  const [bananaStock, setBananaStock] = useState(0);

  useEffect(() => {
    // Simulate fetch stock data
    const fetchStock = () => {
      setPapayaStock(150); // example value
      setBananaStock(200); // example value
    };

    fetchStock();
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold text-green-800 mb-2">🌿 Live Seedling Stock</h2>
      <p>📦 Papaya Seedlings: <strong>{papayaStock}</strong></p>
      <p>📦 Banana Seedlings: <strong>{bananaStock}</strong></p>
    </div>
  );
}
