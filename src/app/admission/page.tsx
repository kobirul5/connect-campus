'use client'
import useColleges from '@/hooks/useColleges';
import Link from 'next/link';

export default function AdmissionPage() {


  const { colleges, loading, } = useColleges();

  if (loading) {
    return <h1>Loading....</h1>
  }
  if (!colleges) return <p>No colleges found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Select College
        </h1>
        
        <div className="space-y-4">
          {colleges.map((college) => (
            <Link 
              href={`/admission/admission-form/${college._id}`} 
              key={college._id}
              className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{college.name}</span>
                <span className="text-blue-600">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}