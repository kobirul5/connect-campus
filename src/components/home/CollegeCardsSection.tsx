'use client'

import useColleges from '@/hooks/useColleges';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const CollegeCardsSection = () => {
  const pathname = usePathname()

  const { colleges, loading, } = useColleges();

  if (loading) {
    return <h1>Loading....</h1>
  }
  if (!colleges) return <p>No colleges found.</p>;
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald to-secondary">
            Featured Institutions
          </span>

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(pathname === '/' ? colleges.slice(0, 3) : colleges).map(college => (
            <div
              key={college._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* College Image */}
              <figure className="relative h-48 overflow-hidden">
                <Image
                  fill
                  src={college.image}
                  alt={college.name}
                  className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white ">{college.name}</h3>
                  <div className="badge badge-emerald gap-1 mt-1">
                    Rating: {college.rating}
                  </div>
                </div>
              </figure>

              {/* Card Body */}
              <div className="card-body">
                {/* Admission Dates */}
                <div className="flex items-start gap-3">
                  <div className="bg-emerald/10 p-2 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Admission Dates</h4>
                    <p className="text-sm">{college.admissionDates}</p>
                  </div>
                </div>

                {/* Events */}
                <div className="flex items-start gap-3 mt-4">
                  <div className="bg-secondary/10 p-2 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Upcoming Events</h4>
                    <ul className="text-sm space-y-1 mt-1">
                      {college.events.map((event, index) => (
                        <li key={index} className="flex items-center">
                          {event.name} - {event.date}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Research History */}
                <div className="flex items-start gap-3 mt-4">
                  <div className="bg-accent/10 p-2 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Recent Research</h4>
                    <ul className="text-sm space-y-1 mt-1">
                      {college.researchHistory.map((research, index) => (
                        <li key={index} className="flex items-center">
                          {research.title} ({research.year})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sports */}
                <div className="flex items-start gap-3 mt-4">
                  <div className="bg-info/10 p-2 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Sports Facilities</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {college.sports.map((sport, index) => (
                        <span key={index} className="badge badge-outline badge-info">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Button */}
                <div className="card-actions justify-center mt-6">
                  <Link href={`/colleges/${college._id}`}

                    className="btn bg-emerald btn-outline w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeCardsSection;
