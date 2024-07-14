import React, { useState } from "react";
import axios from "axios";
import LayoutComponent from "./Layout";
import { AiFillLock } from "react-icons/ai";

const RegisterClient: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyRegType, setCompanyRegType] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMsgPopup, setShowMsgPopup] = useState(false);
  const [message, setMessage] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [fieldsEmpty, setFieldsEmpty] = useState({
    username: false,
    companyName: false,
    industryType: false,
    email: false,
    phone: false,
    companyRegType: false,
    password: false,
    cnfPass: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const generatePassword = (length = 12) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allChars =
      lowerCaseChars + upperCaseChars + numberChars + specialChars;

    let generatedPass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPass += allChars[randomIndex];
    }
    setPassword(generatedPass);
    setCnfPass(generatedPass);
    setPasswordsMatch(true);
  };

  const clearInputs = () => {
    setPassword("");
    setUsername("");
    setCompanyName("");
    setIndustryType("");
    setEmail("");
    setPhone("");
    setCompanyRegType("");
    setCnfPass("");
    setShowPopup(false);
    setFieldsEmpty({
      username: false,
      companyName: false,
      industryType: false,
      email: false,
      phone: false,
      companyRegType: false,
      password: false,
      cnfPass: false,
    });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const callPostApi = async () => {
    const isEmailValid = validateEmail(email);
    setEmailValid(isEmailValid);
    setPasswordsMatch(password === cnfPass);

    const emptyFields = {
      username: !username,
      companyName: !companyName,
      industryType: !industryType,
      email: !email,
      phone: !phone,
      companyRegType: !companyRegType,
      password: !password,
      cnfPass: !cnfPass,
    };
    setFieldsEmpty(emptyFields);

    const allFieldsFilled = Object.values(emptyFields).every((value) => !value);

    if (!isEmailValid || password !== cnfPass || !allFieldsFilled) {
      return;
    }

    setLoading(true);
    setShowMsgPopup(false);
    try {
      const data = {
        password,
        username,
        companyName,
        industryType,
        email,
        phone,
        companyRegType,
      };
      console.log("data : ", data);
      const response = await axios.post(
        "https://api.cryptag.in/v1/register-client",
        data
      ); // Send data directly
      console.log(response.data);
      setResponse(response.data);
      setMessage("Success! Client registered successfully.");
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.detail) {
        setMessage(error.response.data.detail);
      } else {
        setMessage("Error! Something went wrong.");
      }
    } finally {
      setLoading(false);
      setShowMsgPopup(true);
    }
  };

  const closePopup = () => {
    setShowMsgPopup(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <LayoutComponent title="Tag Management" subtitle="Add Tags">
        <div>
          <div className=" w-full h-6 mt-[1%] mb-[1%] flex justify-between">
            <div className="ml-[1%] font-semibold">Register Client</div>
            <img
              className="mr-[1%] cursor-pointer"
              src="/3-dot.svg"
              onClick={() => {
                togglePopup();
              }}
            />
          </div>
          <div className="flex ml-[1%] mr-[1%] w-[98%] grow justify-between">
            <div className="flex flex-col w-[49%] h-full">
              <div
                className={`border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.username ? "border-red-500" : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="bg-gray-100 h-full">
                  <img className="h-full p-2" src="/username.png" />
                </div>
                <input
                  className="h-full w-full p-4 border-none focus:outline-none"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      username: false,
                    }));
                  }}
                />
              </div>

              <div
                className={`mt-[5%] border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.companyName ? "border-red-500" : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="bg-gray-100 h-full">
                  <img className="h-full p-2" src="/company.png" />
                </div>
                <input
                  className="h-full w-full p-4 border-none focus:outline-none"
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      companyName: false,
                    }));
                  }}
                />
              </div>

              <div
                className={`mt-[5%] border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.industryType
                    ? "border-red-500"
                    : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="bg-gray-100 h-full">
                  <img className="h-full p-2" src="/factory.png" />
                </div>
                <input
                  className="h-full w-full p-4 border-none focus:outline-none"
                  type="text"
                  placeholder="Industry Type"
                  value={industryType}
                  onChange={(e) => {
                    setIndustryType(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      industryType: false,
                    }));
                  }}
                />
              </div>

              <div
                className={`mt-[5%] border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.password ? "border-red-500" : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="bg-gray-100 h-full">
                  <img className="h-full p-2" src="/password-key.png" />
                </div>
                <input
                  className="h-full grow p-4 border-none focus:outline-none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      password: false,
                    }));
                    setPasswordsMatch(e.target.value === cnfPass);
                  }}
                />

                <div className="flex items-center cursor-pointer h-full ">
                  {/* <div className="flex items-center h-full w-full">
                        <div className={`w-8 h-full flex items-center justify-center ${isHovered ? 'bg-gray-400' : 'bg-gray-300'}`}>
                          <img className="h-4 w-4" src='/password-lock.png' alt="Generate Password" />
                        </div>
                        <button className={`${isHovered ? 'bg-gray-400' : 'bg-gray-300'} h-full w-full text-left px-2`}>Generate Strong Password</button>
                      </div> */}
                  <button
                    className="hover:bg-gray-400 bg-gray-300 h-full w-full text-left px-2"
                    onClick={() => generatePassword()}
                  >
                    <div className="flex items-center gap-5">
                      <AiFillLock />
                      <span>Generate Strong Password</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[49%]">
              <div
                className={`border rounded h-10 w-full flex relative items-center ${
                  !emailValid && email !== "" && "border-red-500"
                } ${
                  fieldsEmpty.email && "border-red-500"
                } focus-within:border-blue-500`}
              >
                <div className="bg-gray-100 h-full">
                  <img className="h-full p-2" src="/email.png" />
                </div>
                <input
                  className="h-full w-full p-4 border-none focus:outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    setEmailValid(value === "" || validateEmail(value)); // Update to handle empty input
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      email: false,
                    }));
                  }}
                />
              </div>

              <div
                className={`mt-[5%] border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.phone ? "border-red-500" : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="border bg-gray-100 h-full">
                  <img className="h-full p-2" src="/phone.png" />
                </div>
                <input
                  className="rounded h-full w-full p-4 border-none focus:outline-none"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      phone: false,
                    }));
                  }}
                />
              </div>

              <div
                className={`mt-[5%] border rounded h-10 w-full flex relative items-center ${
                  fieldsEmpty.companyRegType
                    ? "border-red-500"
                    : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <div className="border bg-gray-100 h-full">
                  <img className="h-full p-2" src="/factory.png" />
                </div>
                <input
                  className="rounded h-full w-full p-4 border-none focus:outline-none"
                  type="text"
                  placeholder="Company Registration Type"
                  value={companyRegType}
                  onChange={(e) => {
                    setCompanyRegType(e.target.value);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      companyRegType: false,
                    }));
                  }}
                />
              </div>
              <div
                className={`mt-[5%] relative border rounded h-10 w-full flex items-center ${
                  !passwordsMatch && "border-red-500"
                } ${
                  fieldsEmpty.cnfPass && "border-red-500"
                } focus-within:border-blue-500`}
              >
                <div className="border bg-gray-100 h-full">
                  <img className="h-full p-2" src="/password-key.png" />
                </div>
                <input
                  className="rounded h-full w-full p-4 border-none focus:outline-none"
                  type="password"
                  placeholder="Confirm Password"
                  value={cnfPass}
                  onChange={(e) => {
                    setCnfPass(e.target.value);
                    setPasswordsMatch(e.target.value === password);
                    setFieldsEmpty((prevState) => ({
                      ...prevState,
                      cnfPass: false,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-[1%] mb-[1%]">
            <button
              className="mr-[1%] bg-blue-700 text-white p-2 border rounded-md hover:bg-blue-800"
              onClick={callPostApi}
            >
              Register Client
            </button>
          </div>
        </div>
      </LayoutComponent>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg mb-4">
              Are you sure you want to clear the input?
            </h2>
            <button
              onClick={clearInputs}
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={togglePopup}
              className="bg-gray-300 text-black py-2 px-4 rounded"
            >
              No
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {showMsgPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg mb-4">{message}</h2>
            <button
              onClick={closePopup}
              className="bg-gray-300 text-black py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterClient;

// InputField.tsx
// import React, { useState } from "react";
// import axios from 'axios';
// import LayoutComponent from "./Layout";

// interface InputFieldProps {
//   type: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   icon: string;
//   isError: boolean;
//   topMargin: number
// }

// const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, icon, isError, topMargin }) => {
//   return (
//     <div className={`mt-[${topMargin}%] border rounded h-10 w-full flex relative items-center ${isError ? 'border-red-500' : 'border-gray-300'} focus-within:border-blue-500`}>
//       <div className="bg-gray-100 h-full">
//         <img className="h-full p-2" src={icon} alt={placeholder} />
//       </div>
//       <input
//         className="h-full w-full p-4 border-none focus:outline-none"
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// // PasswordField.tsx
// interface PasswordFieldProps {
//   password: string;
//   cnfPass: string;
//   onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onCnfPassChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onGeneratePassword: () => void;
//   passwordsMatch: boolean;
//   passwordError: boolean;
//   cnfPassError: boolean;
//   isHovered: boolean;
//   handleMouseEnter: () => void;
//   handleMouseLeave: () => void;
// }

// const PasswordField: React.FC<PasswordFieldProps> = ({
//   password,
//   cnfPass,
//   onPasswordChange,
//   onCnfPassChange,
//   onGeneratePassword,
//   passwordsMatch,
//   passwordError,
//   cnfPassError,
//   isHovered,
//   handleMouseEnter,
//   handleMouseLeave
// }) => {
//   return (
//     <div className="flex justify-between mt-[5%]">
//       <div className={`mt-[0%] border rounded h-10 w-[49%] flex relative items-center ${passwordError ? 'border-red-500' : 'border-gray-300'} focus-within:border-blue-500`}>
//         <div className="bg-gray-100 h-full">
//           <img className="h-full p-2" src='/password-key.png' alt="Password" />
//         </div>
//         <input
//           className="h-full grow p-4 border-none focus:outline-none"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={onPasswordChange}
//         />
//         <div className="flex items-center cursor-pointer h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {console.log("Onclicked parent"); onGeneratePassword()}}>
//           <div className="flex items-center h-full w-full">
//             <div className={`w-8 h-full flex items-center justify-center ${isHovered ? 'bg-gray-400' : 'bg-gray-300'}`}>
//               <img className="h-4 w-4" src='/password-lock.png' alt="Generate Password" />
//             </div>
//             <button className={`${isHovered ? 'bg-gray-400' : 'bg-gray-300'} h-full w-full text-left px-2`}>Generate Strong Password</button>
//           </div>
//         </div>
//       </div>
//       <div className={`mt-[0%] relative border rounded h-10 w-[49%] flex items-center ${!passwordsMatch && 'border-red-500'} ${cnfPassError && 'border-red-500'} focus-within:border-blue-500`}>
//         <div className="border bg-gray-100 h-full">
//           <img className="h-full p-2" src='/password-key.png' alt="Confirm Password" />
//         </div>
//         <input
//           className="rounded h-full w-full p-4 border-none focus:outline-none"
//           type="password"
//           placeholder="Confirm Password"
//           value={cnfPass}
//           onChange={onCnfPassChange}
//         />
//       </div>
//     </div>
//   );
// };

// const RegisterClient: React.FC = () => {
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [industryType, setIndustryType] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [companyRegType, setCompanyRegType] = useState('');
//   const [cnfPass, setCnfPass] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showMsgPopup, setShowMsgPopup] = useState(false);
//   const [message, setMessage] = useState('');

//   const [emailValid, setEmailValid] = useState(true);
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [fieldsEmpty, setFieldsEmpty] = useState({
//     username: false,
//     companyName: false,
//     industryType: false,
//     email: false,
//     phone: false,
//     companyRegType: false,
//     password: false,
//     cnfPass: false,
//   });
//   const [isHovered, setIsHovered] = useState(false);

//   const validateEmail = (email: string) => {
//     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return pattern.test(email);
//   };

//   const generatePassword = (length = 12) => {
//     console.log("generatePassword")
//     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numberChars = '0123456789';
//     const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

//     const allChars = lowerCaseChars + upperCaseChars + numberChars + specialChars;

//     let generatedPass = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * allChars.length);
//       generatedPass += allChars[randomIndex];
//     }
//     setPassword(generatedPass);
//     setCnfPass(generatedPass);
//     setPasswordsMatch(true);
//   };

//   const clearInputs = () => {
//     setPassword('');
//     setUsername('');
//     setCompanyName('');
//     setIndustryType('');
//     setEmail('');
//     setPhone('');
//     setCompanyRegType('');
//     setCnfPass('');
//     setShowPopup(false);
//     setFieldsEmpty({
//       username: false,
//       companyName: false,
//       industryType: false,
//       email: false,
//       phone: false,
//       companyRegType: false,
//       password: false,
//       cnfPass: false,
//     });
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const callPostApi = async () => {
//     const isEmailValid = validateEmail(email);
//     setEmailValid(isEmailValid);
//     setPasswordsMatch(password === cnfPass);

//     const emptyFields = {
//       username: !username,
//       companyName: !companyName,
//       industryType: !industryType,
//       email: !email,
//       phone: !phone,
//       companyRegType: !companyRegType,
//       password: !password,
//       cnfPass: !cnfPass,
//     };
//     setFieldsEmpty(emptyFields);

//     const allFieldsFilled = Object.values(emptyFields).every(value => !value);

//     if (!isEmailValid || password !== cnfPass || !allFieldsFilled) {
//       return;
//     }

//     setLoading(true);
//     setShowMsgPopup(false);
//     try {
//       const data = {
//         password,
//         username,
//         companyName,
//         industryType,
//         email,
//         phone,
//         companyRegType
//       };
//       console.log("data : ", data);
//       const response = await axios.post('https://api.cryptag.in/v1/register-client', data); // Send data directly
//       console.log(response.data);
//       setResponse(response.data);
//       setMessage('Success! Client registered successfully.');
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.detail) {
//         setMessage(error.response.data.detail);
//       } else {
//         setMessage('Error! Something went wrong.');
//       }
//     } finally {
//       setLoading(false);
//       setShowMsgPopup(true);
//     }
//   };

//   const closePopup = () => {
//     setShowMsgPopup(false);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <LayoutComponent title="Client Management" subtitle="Register Client">
//       <div className="w-full h-full flex flex-col">
//         <div className="ml-[2%] mr-[2%] mb-[20%] w-[96%] h-[40%] border rounded shadow-[0px_0px_25px_rgba(94,92,154,0.1)] grow flex flex-col">
//           <div className="w-full h-6 mt-[1%] mb-[1%] flex justify-between">
//             <div className="ml-[1%] font-semibold">Register Client</div>
//             <img className="mr-[1%] cursor-pointer" src="/3-dot.svg" onClick={togglePopup} />
//           </div>
//           <div className='flex flex-col ml-[1%] mr-[1%] w-[98%] grow'>
//             <div className="flex justify-between">
//             <div className="flex flex-col w-[49%] h-full">
//               <InputField
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, username: false }));
//                 }}
//                 icon="/username.png"
//                 isError={fieldsEmpty.username}
//                 topMargin={0}
//               />
//               <InputField
//                 type="text"
//                 placeholder="Company Name"
//                 value={companyName}
//                 onChange={(e) => {
//                   setCompanyName(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, companyName: false }));
//                 }}
//                 icon="/company.png"
//                 isError={fieldsEmpty.companyName}
//                 topMargin={5}
//               />
//               <InputField
//                 type="text"
//                 placeholder="Industry Type"
//                 value={industryType}
//                 onChange={(e) => {
//                   setIndustryType(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, industryType: false }));
//                 }}
//                 icon="/factory.png"
//                 isError={fieldsEmpty.industryType}
//                 topMargin={5}
//               />
//             </div>
//             <div className="flex flex-col w-[49%]">
//               <InputField
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setEmail(value);
//                   setEmailValid(value === '' || validateEmail(value)); // Update to handle empty input
//                   setFieldsEmpty(prevState => ({ ...prevState, email: false }));
//                 }}
//                 icon="/email.png"
//                 isError={!emailValid || fieldsEmpty.email}
//                 topMargin={0}
//               />
//               <InputField
//                 type="number"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => {
//                   setPhone(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, phone: false }));
//                 }}
//                 icon="/phone.png"
//                 isError={fieldsEmpty.phone}
//                 topMargin={5}
//               />
//               <InputField
//                 type="text"
//                 placeholder="Company Registration Type"
//                 value={companyRegType}
//                 onChange={(e) => {
//                   setCompanyRegType(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, companyRegType: false }));
//                 }}
//                 icon="/factory.png"
//                 isError={fieldsEmpty.companyRegType}
//                 topMargin={5}
//               />
//             </div>
//             </div>
//             <PasswordField
//                 password={password}
//                 cnfPass={cnfPass}
//                 onPasswordChange={(e) => {
//                   setPassword(e.target.value);
//                   setFieldsEmpty(prevState => ({ ...prevState, password: false }));
//                   setPasswordsMatch(e.target.value === cnfPass);
//                 }}
//                 onCnfPassChange={(e) => {
//                   setCnfPass(e.target.value);
//                   setPasswordsMatch(e.target.value === password);
//                   setFieldsEmpty(prevState => ({ ...prevState, cnfPass: false }));
//                 }}
//                 onGeneratePassword={generatePassword}
//                 passwordsMatch={passwordsMatch}
//                 passwordError={fieldsEmpty.password}
//                 cnfPassError={fieldsEmpty.cnfPass}
//                 isHovered={isHovered}
//                 handleMouseEnter={handleMouseEnter}
//                 handleMouseLeave={handleMouseLeave}
//               />
//           </div>
//           <div className="flex justify-end mt-[1%] mb-[1%]">
//             <button className="mr-[1%] bg-blue-700 text-white p-2 border rounded-md hover:bg-blue-800" onClick={callPostApi}>Register Client</button>
//           </div>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded shadow-lg">
//             <h2 className="text-lg mb-4">Are you sure you want to clear the input?</h2>
//             <button onClick={clearInputs} className="bg-red-500 text-white py-2 px-4 rounded mr-2">
//               Yes
//             </button>
//             <button onClick={togglePopup} className="bg-gray-300 text-black py-2 px-4 rounded">
//               No
//             </button>
//           </div>
//         </div>
//       )}

//       {loading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}

//       {showMsgPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded shadow-lg">
//             <h2 className="text-lg mb-4">{message}</h2>
//             <button onClick={closePopup} className="bg-gray-300 text-black py-2 px-4 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </LayoutComponent>
//   );
// };

// export default RegisterClient;
