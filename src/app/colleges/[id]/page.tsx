'use client';

import Head from 'next/head';
import Link from 'next/link';
import { College, featuredColleges } from '@/data/featuredColleges';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const CollegeDetails = () => {
    const params = useParams();
    const router = useRouter();

    const paramId = typeof params.id === 'string' ? Number(params.id) : undefined;

    if (!paramId) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-600 text-lg font-semibold">Invalid college ID.</p>
            </div>
        );
    }

    const collegeData: College | undefined = featuredColleges.find(
        (college) => college.id === paramId
    );

    if (!collegeData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-600 text-lg font-semibold">College not found.</p>
            </div>
        );
    }

    const {
        id,
        name,
        image,
        admissionDates,
        events,
        researchHistory,
        sports,
        rating,
        description,
    } = collegeData;

    return (
        <div className="min-h-screen bg-base-100 pb-16">
            <Head>
                <title>{name} | College Booking</title>
            </Head>

            {/* Back Button */}
            <div className="container mx-auto px-4 py-6">
                <button
                    onClick={() => router.back()}
                    className="btn btn-outline btn-sm"
                    aria-label="Back to Colleges"
                >
                    ← Back to Colleges
                </button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Side Card */}
                    <div className="md:w-1/3">
                        <div className=" card bg-base-200 shadow-lg rounded-lg overflow-hidden">

                            <div className="card-body">
                                <h1 className="text-4xl font-extrabold mb-2">{name}</h1>
                                <p className="text-yellow-500 font-semibold mb-3">⭐ {rating.toFixed(1)}</p>
                                <p className="mb-4 text-justify text-gray-700">{description}</p>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-lg mb-1">Admission Dates</h3>
                                    <p>{admissionDates}</p>
                                </div>
                                <Link
                                    href={`/admission?college=${id}`}
                                    className="btn btn-primary btn-block"
                                    aria-label={`Apply to ${name}`}
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Details */}
                    <div className="md:w-2/3 space-y-10">
                        <div className="relative w-full h-96 rounded-lg overflow-hidden">
                            <Image
                                fill
                                src={image}
                                alt={name}
                                className="object-cover"
                            />
                        </div>
                        {/* Events */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
                                Upcoming Events
                            </h2>
                            {events.length > 0 ? (
                                <div className="space-y-4">
                                    {events.map((event, idx) => (
                                        <div
                                            key={idx}
                                            className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box"
                                        >
                                            <input type="checkbox" className="peer" />
                                            <div className="collapse-title font-semibold text-lg">
                                                {event.name} — <span className="text-gray-600">{event.date}</span>
                                            </div>
                                            <div className="collapse-content text-gray-700">
                                                {/* No description in your data, but you can add if available */}
                                                <p>No additional details available.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="italic text-gray-500">No upcoming events scheduled.</p>
                            )}
                        </section>

                        {/* Research */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
                                Research Works
                            </h2>
                            {researchHistory.length > 0 ? (
                                <div className="overflow-x-auto rounded-lg border border-base-300">
                                    <table className="table w-full">
                                        <thead className="bg-primary text-primary-content">
                                            <tr>
                                                <th>Title</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {researchHistory.map(({ title, year }, idx) => (
                                                <tr key={idx} className="hover">
                                                    <td>{title}</td>
                                                    <td>{year}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="italic text-gray-500">No research papers available.</p>
                            )}
                        </section>

                        {/* Sports */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
                                Sports Categories
                            </h2>
                            {sports.length > 0 ? (
                                <div className="flex flex-wrap gap-3">
                                    {sports.map((sport, idx) => (
                                        <span
                                            key={idx}
                                            className="badge badge-primary text-white px-4 py-3 text-lg"
                                        >
                                            {sport}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="italic text-gray-500">No sports information available.</p>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
