/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import ReviewForm from "@/components/ReviewForm";
import useAxiosPublic from "@/hooks/axiosPublic";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface CollegeApplication {
  _id: string;
  candidateName: string;
  userEmail: string;
  collegeId: string;
  collegeName: string;
  collegeLocation: string;
  subject: string;
  applicationDate: string;
  status: 'pending' | 'accepted' | 'rejected';
  admissionDeadline: string;
  researchHistory: string;
  events: string;
}

export default function MyCollegePage() {
  const { user } = useAuth();
  const [selectedApplication, setSelectedApplication] = useState<CollegeApplication | null>(null);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchApplication = async () => {
      try {
        const res = await axiosPublic.get(`/api/admission/${user.email}`);
        console.log(res.data, "---------------------")
        if (res.data) {
          setSelectedApplication(res.data);
        } else {
          toast.error('No application found');
        }
      } catch (error: any) {
        toast.error(error.message || 'Error fetching application');
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [user?.email, axiosPublic]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!selectedApplication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">No College Application Found</h1>
          <p className="mt-4">You haven&apos;t applied to any colleges yet.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = ()=>{

  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-base-100 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">My College: {selectedApplication.collegeName}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Application Details</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Candidate Name:</span> {selectedApplication.candidateName}</p>
              <p><span className="font-medium">Subject:</span> {selectedApplication.subject}</p>
              <p><span className="font-medium">Application Date:</span> {new Date(selectedApplication.applicationDate).toLocaleDateString()}</p>
              <p><span className="font-medium">Status:</span> <span className="badge badge-info">{selectedApplication.status}</span></p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">College Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Location:</span> {selectedApplication.collegeLocation}</p>
              <p><span className="font-medium">Admission Deadline:</span> {new Date(selectedApplication.admissionDeadline).toLocaleDateString()}</p>
              <p><span className="font-medium">Research History:</span> {selectedApplication.researchHistory}</p>
              <p><span className="font-medium">Events:</span> {selectedApplication.events}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
        <ReviewForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
