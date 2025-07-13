// components/ReviewForm.tsx
"use client";

import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface ReviewFormProps {
  onSubmit: (review: { rating: number; comment: string }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    if (!comment.trim()) {
      toast.error('Please write your review');
      setSubmitting(false);
      return;
    }

    try {
      await onSubmit({ rating, comment });
      setComment('');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Rating</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              checked={star === rating}
              onChange={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Your Review</label>
        <textarea
          className="textarea textarea-bordered w-full"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this college..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="btn btn-primary"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}