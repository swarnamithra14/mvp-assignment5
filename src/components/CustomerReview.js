'use client'
import React, { useState, useEffect } from 'react';

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReviews([
        { name: 'Ravi', comment: 'Best quality seedlings!' },
        { name: 'Priya', comment: 'Affordable and healthy plants.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-4 bg-yellow-100 rounded shadow-md">
      <h2 className="text-xl font-bold text-yellow-800 mb-2">🌟 Customer Reviews</h2>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul className="list-disc ml-5">
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}:</strong> {review.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
