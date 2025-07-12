'use client';

import { useState, useEffect, KeyboardEvent } from 'react';
import { FaSearch, FaUniversity } from 'react-icons/fa';
import Link from 'next/link';
import { College } from '@/data/featuredColleges';
import useColleges from '@/hooks/useColleges';

export default function CollegeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<College[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const { colleges, loading } = useColleges();

  useEffect(() => {
    if (!colleges || searchTerm.trim() === '') {
      setResults([]);
      setIsVisible(false);
      return;
    }

    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
    setIsVisible(filtered.length > 0);
  }, [searchTerm, colleges]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder={loading ? "Loading colleges..." : "Search colleges..."}
          className="w-full px-3 py-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setIsVisible(results.length > 0)}
          onBlur={() => setTimeout(() => setIsVisible(false), 200)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button className="px-3 text-gray-600">
          <FaSearch />
        </button>
      </div>

      {isVisible && (
        <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-64 overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map((college) => (
                <li key={college._id}>
                  <Link
                    href={`/colleges/${college._id}`}
                    className="flex items-center px-3 py-2 hover:bg-gray-100"
                    onClick={() => setIsVisible(false)}
                  >
                    <FaUniversity className="mr-2 text-gray-500" />
                    <div>
                      <span className="font-medium">{college.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              {loading ? 'Loading colleges...' : 'No colleges found'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
