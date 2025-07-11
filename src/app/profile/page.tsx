"use client";

import { useState, useEffect } from 'react';
import {
  FaUser,
  FaEdit,
  FaSave,
  FaUniversity,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    university: 'Tech University',
    address: '123 Main St, Dhaka',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempData, setTempData] = useState({ ...userData });

  // Load user data
  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem('userProfile') || '{}') || userData;
    if (savedData && savedData.name) {
      setUserData(savedData);
      setTempData(savedData);
    }
  }, []);

  const handleEditClick = () => {
    setTempData({ ...userData });
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setUserData(tempData);
    localStorage.setItem('userProfile', JSON.stringify(tempData));
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <FaUser className="text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <p className="text-blue-100">{userData.university}</p>
              </div>
            </div>
            <button
              onClick={handleEditClick}
              className="btn btn-sm btn-outline btn-white flex items-center gap-1"
            >
              <FaEdit /> Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaUser className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Full Name</h3>
              <p className="text-lg">{userData.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaEnvelope className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Email</h3>
              <p className="text-lg">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaUniversity className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">University</h3>
              <p className="text-lg">{userData.university}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Address</h3>
              <p className="text-lg">{userData.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="editModal" className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-full max-w-2xl">
          <h3 className="font-bold text-xl mb-4">Edit Profile</h3>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={tempData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={tempData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input
                type="text"
                name="university"
                value={tempData.university}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                name="address"
                value={tempData.address}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>
          </div>

          <div className="modal-action">
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveClick}
              className="btn btn-primary flex items-center gap-2"
            >
              <FaSave /> Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
