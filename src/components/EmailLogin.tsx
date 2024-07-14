import React, { useState } from "react";
import axios from "axios";
import { MdOutlineVpnLock } from "react-icons/md";

interface EmailLoginProps {
  onNext: (user: {
    first_name: string;
    last_name: string;
    password: string;
  }) => void;
}

const EmailLogin: React.FC<EmailLoginProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNext = async () => {
    try {
      const response = await axios.get(
        `https://api.cryptag.in/v1/admin-user/${email}`
      );
      const user = response.data;
      console.log("user : ", user, user[0]);
      onNext(user[0]);
    } catch (err) {
      setError("Failed to fetch user information. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-[50%] h-auto min-h-[40%]">
      <div className="flex items-center mb-6">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="flex justify-between">
        <div className="h-full mr-[40%]">
          <h2 className="text-xl font-semibold mb-4">Sign in</h2>
        </div>
        <div className="h-full grow flex flex-col">
          <div className="mb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-10 text-left cursor-pointer hover:text-gray-600">
            Forgot email?
          </div>
          <div className="mb-20 flex items-center">
            <span>
              <span className="text-blue-700">Cryptag</span> Secure Network
              Connected
            </span>
            <MdOutlineVpnLock className="ml-2" color="green" />
          </div>
          <div className="text-right">
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
