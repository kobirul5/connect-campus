import { featuredColleges } from '@/data/featuredColleges';
import Link from 'next/link';

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Select College
        </h1>
        
        <div className="space-y-4">
          {featuredColleges.map((college) => (
            <Link 
              href={`/admission/admission-form/${college.id}`} 
              key={college.id}
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