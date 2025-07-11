'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CollegeAdmissionForm() {
  const params = useParams();
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',

    // HSC/Alim Information
    hscExam: 'HSC',
    hscBoard: '',
    hscRoll: '',
    hscReg: '',
    hscYear: '',
    hscGpa: '',
    hscCollege: '',
    hscGroup: '',

    // Subject Preference
    preferredSubject: '',
    alternativeSubject: '',
  });

  const handleChange = (e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert('Application submitted successfully!');
    // You can add your API POST request here.
  };
  console.log(formData,'--------------------')
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          College Admission Form (College ID: {params.id})
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Father&apos;s Name*</label>
                <input
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mother&apos;s Name*</label>
                <input
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
                <input
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
          </div>

          {/* HSC/Alim Information Section */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">HSC/Alim Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Exam*</label>
                <select
                  name="hscExam"
                  value={formData.hscExam}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="HSC">HSC</option>
                  <option value="Alim">Alim</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Board*</label>
                <select
                  name="hscBoard"
                  value={formData.hscBoard}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="comilla">Comilla</option>
                  <option value="jessore">Jessore</option>
                  <option value="barisal">Barisal</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="dinajpur">Dinajpur</option>
                  <option value="madrasah">Madrasah</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number*</label>
                <input
                  name="hscRoll"
                  value={formData.hscRoll}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number*</label>
                <input
                  name="hscReg"
                  value={formData.hscReg}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passing Year*</label>
                <input
                  name="hscYear"
                  type="number"
                  min="2000"
                  max="2099"
                  value={formData.hscYear}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA*</label>
                <input
                  name="hscGpa"
                  type="number"
                  step="0.01"
                  min="1"
                  max="5"
                  value={formData.hscGpa}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College/Madrasa Name*</label>
                <input
                  name="hscCollege"
                  value={formData.hscCollege}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Group*</label>
                <select
                  name="hscGroup"
                  value={formData.hscGroup}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subject Preference */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Subject Preference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Choice*</label>
                <input
                  name="preferredSubject"
                  value={formData.preferredSubject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Second Choice</label>
                <input
                  name="alternativeSubject"
                  value={formData.alternativeSubject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary text-white font-medium py-2 px-4 rounded-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
