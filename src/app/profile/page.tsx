"use client";

import useAxiosPublic from "@/hooks/axiosPublic";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaEdit,
  FaSave,
  FaUniversity,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

type UserProfile = {
  name?: string;
  email?: string;
  university?: string;
  address?: string;
  picture?: string;
};

export default function ProfilePage() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const [userData, setUserData] = useState<UserProfile>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempData, setTempData] = useState<UserProfile>({});

  useEffect(() => {
    if (!user?.email) return;

    const fetchUserData = async () => {
      try {
        const res = await axiosPublic.get(`/api/user/${user.email}`);
        setUserData(res.data.data);
        setTempData(res.data.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [user, axiosPublic]);

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

  const handleSaveClick = async () => {
    try {
      const res = await axiosPublic.put(`/api/user/${user?.email}`, tempData);
      setUserData(res.data.data);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
                {userData.picture ? (
                  <img
                    src={userData.picture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-4xl" />
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userData.name || "N/A"}</h1>
                <p className="text-primary-100">
                  {userData.university || "No university"}
                </p>
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

        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaUser className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Full Name</h3>
              <p className="text-lg">{userData.name || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaEnvelope className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Email</h3>
              <p className="text-lg">{userData.email || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaUniversity className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">University</h3>
              <p className="text-lg">{userData.university || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="font-medium text-gray-500">Address</h3>
              <p className="text-lg">{userData.address || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>

      <dialog
        id="editModal"
        className={`modal ${isModalOpen ? "modal-open" : ""}`}
      >
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
                value={tempData.name || ""}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={tempData.email || ""}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input
                type="text"
                name="university"
                value={tempData.university || ""}
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
                value={tempData.address || ""}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>
              <input
                type="text"
                name="picture"
                value={tempData.picture || ""}
                onChange={handleInputChange}
                className="input input-bordered w-full"
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