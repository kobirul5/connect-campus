'use client'
import { FaUniversity, FaSearch, FaArrowRight } from 'react-icons/fa';
import educationAnimation from '../../../public/book.json'
import Lottie from 'lottie-react';

export default function HeroBanner() {
    return (
        <div className="relative bg-white overflow-hidden px-4">
            {/* Decorative blobs */}
            <div className="mx-auto flex flex-col lg:flex-row justify-between">
                <div className="relative z-10">
                    <main className="mt-10 mx-auto ">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Book College Facilities</span>
                                <span className="block text-emerald">With Ease</span>
                            </h1>

                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover and reserve classrooms, labs, sports facilities and more at colleges across the country.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <div className="relative rounded-md shadow-sm flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUniversity className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="input input-bordered block w-full pl-10 py-6 text-lg"
                                        placeholder="Search colleges or facilities..."
                                    />
                                </div>
                                <button className="btn bg-emerald py-6 px-8 text-lg gap-2">
                                    Find Facilities
                                    <FaArrowRight />
                                </button>
                            </div>

                            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 hover:-translate-y-1 transition">
                                    <div className="text-emerald-600 text-2xl mb-2">
                                        <FaUniversity />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">250+ Colleges</h3>
                                    <p className="text-sm text-gray-500">Nationwide network</p>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 hover:-translate-y-1 transition">
                                    <div className="text-purple-600 text-2xl mb-2">
                                        <FaSearch />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Instant Booking</h3>
                                    <p className="text-sm text-gray-500">Real-time availability</p>
                                </div>

                                <div className="hidden md:block bg-green-50 p-4 rounded-xl border border-green-100 hover:-translate-y-1 transition">
                                    <div className="text-green-600 text-2xl mb-2">
                                        <FaUniversity />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Verified Reviews</h3>
                                    <p className="text-sm text-gray-500">From real students</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Lottie Animation */}
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
                    <Lottie
                        animationData={educationAnimation}
                        className="w-full h-full object-cover"
                        loop={true}
                    />
                </div>
            </div>

        </div>
    )
}
