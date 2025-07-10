'use client'
import { FaHome, FaSearch } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../public/error/404.json';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {

    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center  p-4">
            <div className=" w-full  p-8 text-center">
                <div className="w-64 h-64 mx-auto mb-6">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                <h1 className="text-4xl font-bold text-error mb-2">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

                <p className="text-base-content/70 mb-6">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="btn btn-primary gap-2"
                        onClick={() => router.push('/')}
                    >
                        <FaHome /> Go Home
                    </button>

                    <button
                        className="btn btn-outline gap-2"
                        onClick={() => {
                            router.back()
                        }}
                    >
                        <FaSearch /> Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}
