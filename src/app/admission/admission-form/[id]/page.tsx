'use client';

import useAxiosPublic from '@/hooks/axiosPublic';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface AdmissionFormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  image: string;
}

export default function CollegeAdmissionForm() {
  const params = useParams();
  const axiosPublic = useAxiosPublic()
  const router = useRouter()

  const [formData, setFormData] = useState<AdmissionFormData>({
    name: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // api call
    try {
      const res = await axiosPublic.post('/api/admission', formData);
      if (res.data.success) {
        toast.success("success fully Applied")
        setFormData({
          name: '',
          subject: '',
          email: '',
          phone: '',
          address: '',
          dob: '',
          image: '',
        })
        router.push('/my-college')
      } else {
        toast.error('Failed to load colleges');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          College Admission Form (College ID: {params.id})
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Candidate Name*
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject*
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth*
              </label>
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                name="image"
                type="text"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address*
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={2}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-emerald hover:bg-emerald text-white font-medium py-2 px-4 rounded-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
