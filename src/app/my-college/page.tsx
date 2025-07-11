'use client';

import { useState, useEffect } from 'react';
import {
  FaStar,
  FaRegStar,
  FaUniversity,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function MyCollegePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [applications, setApplications] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedApplication, setSelectedApplication] = useState<any | null>(
    null
  );
  const [review, setReview] = useState({
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    // Load applications from localStorage
    const savedApplications =
      JSON.parse(localStorage.getItem('collegeApplications') || '[]') || [];
    setApplications(savedApplications);
    if (savedApplications.length > 0) {
      setSelectedApplication(savedApplications[0]);
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviews =
      JSON.parse(localStorage.getItem('collegeReviews') || '[]') || [];
    const newReview = {
      collegeId: selectedApplication?.collegeId,
      collegeName: selectedApplication?.collegeName,
      userName: selectedApplication?.name,
      ...review,
      date: new Date().toISOString(),
    };

    localStorage.setItem('collegeReviews', JSON.stringify([...reviews, newReview]));

    setReview({ rating: 5, comment: '' });
    alert('Your review has been submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          My College Details
        </h1>

        {applications.length === 0 ? (
          <div className="text-center">
            <p className="text-lg mb-4">You haven&apos;t applied to any colleges yet.</p>
            <a
              href="/admission"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Apply Now
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Applications</h2>
                <div className="space-y-3">
                  {applications.map((app, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedApplication(app)}
                      className={`p-4 border rounded-lg cursor-pointer ${
                        selectedApplication?.collegeId === app.collegeId
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <h3 className="font-medium">{app.collegeName}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              {selectedApplication && (
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedApplication.collegeName}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <FaUniversity /> Candidate Info
                      </h4>
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{selectedApplication.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Subject</p>
                        <p className="font-medium">{selectedApplication.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium flex items-center gap-1">
                          <FaPhone /> {selectedApplication.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium flex items-center gap-1">
                          <FaEnvelope /> {selectedApplication.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium flex items-center gap-1">
                          <FaMapMarkerAlt /> {selectedApplication.address}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{selectedApplication.dob}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <img
                        src={selectedApplication.image}
                        alt="Candidate"
                        className="rounded-lg shadow border w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Review */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block mb-2 font-medium">Rating</label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setReview({ ...review, rating: star })}
                              className="text-2xl"
                            >
                              {star <= review.rating ? (
                                <FaStar className="text-yellow-400" />
                              ) : (
                                <FaRegStar className="text-yellow-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Comment</label>
                        <textarea
                          value={review.comment}
                          onChange={(e) =>
                            setReview({ ...review, comment: e.target.value })
                          }
                          rows={4}
                          required
                          className="w-full border border-gray-300 rounded-md p-3"
                          placeholder="Share your experience..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
