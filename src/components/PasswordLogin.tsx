// import React, { useState } from "react";
// import { MdOutlineVpnLock } from 'react-icons/md'
// import { FaAngleDown } from "react-icons/fa";
// import { HiUserCircle } from "react-icons/hi";

// interface PasswordLoginProps {
//   email: string;
// }

// const PasswordLogin: React.FC<PasswordLoginProps> = ({ email }) => {
//   const [password, setPassword] = useState('');

//   return (
//     <div className="bg-white rounded-3xl shadow-lg p-8 w-[50%] h-[40%] flex flex-col">
//       <div className="flex items-center mb-6">
//         {/* <div className="text-2xl font-bold">Cryptag</div> */}
//         <img src="/logo.svg" alt="Logo" />
//       </div>
//       <div className="flex">
//         <div className="grow">
//       <h2 className="text-xl font-semibold mb-4">Welcome</h2>
//       <div className="mb-4 mr-[40%] rounded-full border flex items-center justify-between h-[15%]">
//         {/* <input
//           type="text"
//           value={email}
//           readOnly
//           className="w-full px-4 py-2 border-none rounded-full bg-gray-100 focus:outline-none"
//         /> */}
//         <HiUserCircle className="ml-2"/>
//         {email}
//         <FaAngleDown className="mr-2"/>
//       </div>
//       </div>
//       <div className="grow">
//       <div className="mb-1">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Password"
//         />
//       </div>
//       <div className="mb-10 text-left cursor-pointer hover:text-gray-600">
//         Forgot password?
//       </div>
//       <div className="mb-20 flex items-center">
//         <span> <span className='text-blue-700'>Cryptag</span> Secure Network Connected</span>
//         <MdOutlineVpnLock className="ml-2" color="green"/>
//       </div>
//       <div className="text-right">
//         <button
//           onClick={() => console.log('Login')}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default PasswordLogin;

// import React, { useState } from "react";
// import { MdOutlineVpnLock } from 'react-icons/md'
// import { FaAngleDown } from "react-icons/fa";
// import { HiUserCircle } from "react-icons/hi";

// interface PasswordLoginProps {
//   user: { first_name: string; last_name: string };
// }

// const PasswordLogin: React.FC<PasswordLoginProps> = ({ user }) => {
//   const [password, setPassword] = useState('');

//   return (
//     <div className="bg-white rounded-3xl shadow-lg p-8 w-[50%] h-[40%] flex flex-col">
//       <div className="flex items-center mb-6">
//         <img src="/logo.svg" alt="Logo" />
//       </div>
//       <div className="flex">
//         <div className="grow">
//           <h2 className="text-xl font-semibold mb-4">Welcome</h2>
//           <div className="mb-4 mr-[40%] rounded-full border flex items-center justify-between h-[15%] px-4 bg-gray-100">
//             <HiUserCircle className="text-xl" />
//             <span>{`${user.first_name} ${user.last_name}`}</span>
//             <FaAngleDown className="text-xl" />
//           </div>
//         </div>
//         <div className="grow">
//           <div className="mb-1">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Password"
//             />
//           </div>
//           <div className="mb-10 text-left cursor-pointer hover:text-gray-600">
//             Forgot password?
//           </div>
//           <div className="mb-20 flex items-center">
//             <span>
//               <span className='text-blue-700'>Cryptag</span> Secure Network Connected
//             </span>
//             <MdOutlineVpnLock className="ml-2" color="green" />
//           </div>
//           <div className="text-right">
//             <button
//               onClick={() => console.log('Login')}
//               className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PasswordLogin;

import React, { useState } from "react";
import { MdOutlineVpnLock } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface PasswordLoginProps {
  user: { first_name: string; last_name: string; password: string };
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ user }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === user.password) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Password does not match. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-[50%] h-auto min-h-[40%] flex flex-col">
      <div className="flex items-center mb-6">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="flex">
        <div className="grow">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <div className="mb-4 mr-[40%] rounded-full border flex items-center justify-between h-[15%] px-4 bg-gray-100">
            <HiUserCircle className="text-xl" />
            <span>{`${user.first_name} ${user.last_name}`}</span>
            <FaAngleDown className="text-xl" />
          </div>
        </div>
        <div className="grow">
          <div className="mb-1">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-10 text-left cursor-pointer hover:text-gray-600">
            Forgot password?
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
              onClick={handleLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
