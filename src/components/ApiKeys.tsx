// import React, { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import axios from 'axios';
// import LayoutComponent from "./Layout";
// import { FaRegCopy, FaPlus, FaTrash } from "react-icons/fa6";

// // import React, { useState } from 'react';

// const apiKeys: Client[] = [
//   {
//     clientName: 'Gucci',
//     clientId: '001',
//     registrationDate: '10/08/2020',
//     accountStatus: 'Active',
//     apiKey: '32a2021-e69-4684-bee5-04d37b2d47d6',
//     apiSecret: '***************',
//   },
//   {
//     clientName: 'Louis Vuitton',
//     clientId: '002',
//     registrationDate: '11/08/2020',
//     accountStatus: 'Active',
//     apiKey: '04d37b2d47d6-32a2021-e69-4684-bee5',
//     apiSecret: '***************',
//   },
//   // ... add more API keys as per the image
// ];

// const APIKeyManagement: React.FC = () => {
//   const [selectedClient, setSelectedClient] = useState<string>('');
//   const [apiKey, setApiKey] = useState<string>('');
//   const [apiSecret, setApiSecret] = useState<string>('');

//   const generateAPIKey = () => {
//     // Logic to generate API key and secret
//     setApiKey('generated-api-key');
//     setApiSecret('generated-api-secret');
//   };
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       // alert('Copied to clipboard');
//     }, (err) => {
//       // alert('Failed to copy text: ', err);
//     });
//   };
//   return (
//     <div className="flex flex-col">
//       <div className="border rounded">
//       <div className="mb-6 p-2 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//         <div className="text-lg font-semibold">Generate API Keys</div>
//         <img src="/3-dot.svg" className="mr-3"/>
//         </div>
//         <div className="flex justify-between">
//         <div className="flex items-center mb-4 grow">
//           <select
//             className="border p-2 mr-4 w-[80%]"
//             value={selectedClient}
//             onChange={(e) => setSelectedClient(e.target.value)}
//           >
//             <option value="">Select Client</option>
//             {apiKeys.map((key, index) => (
//               <option key={index} value={key.clientId}>
//                 {key.clientName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="grow">
//       <div className="flex items-center mb-4 gap-10">
//         {/* <div className="flex mr-4 w-full"> */}
//           <label className="mb-2">API KEY</label>
//           <div className="grow flex border rounded">
//           <input
//             className="p-2 grow border-none focus:outline-none"
//             type="text"
//             value={apiKey}
//             readOnly

//           />
//                   <button
//           className="p-2 rounded"
//           onClick={() => copyToClipboard(apiKey)}
//         >
//           <FaRegCopy />
//         </button>
//         </div>
//         {/* </div> */}
//       </div>
//       <div className="flex items-center gap-12">
//         {/* <div className="flex mr-4 w-full justify-between"> */}
//           <label className="mb-2">Secret</label>
//           <div className="grow flex border rounded">
//           <input
//             className="grow p-2 border-none focus:outline-none"
//             type="password"
//             value={apiSecret}
//             readOnly
//           />
//         {/* </div> */}
//         <button
//           className="p-2 rounded"
//           onClick={() => copyToClipboard(apiSecret)}
//         >
//           <FaRegCopy />
//         </button>
//         </div>
//       </div>
//     </div>
//     <div className="grow flex justify-end items-center">
//         <button
//             className="bg-green-500 text-white px-4 py-2 rounded w-[34%] h-10 flex justify-between"
//             onClick={generateAPIKey}
//           >
//             <div className="flex items-center gap-4">
//           <FaPlus/>   <span>Generate API</span>
//           </div>
//           </button>
//           </div>
//         </div>
//       </div>
//       </div>
//       <div className="border rounded mt-5">
//       <div>
//       <div className="flex justify-between items-center mb-4 p-2">
//         <div className="text-lg font-semibold">Manage API Keys</div>
//         <img src="/3-dot.svg" className="mr-3"/>
//         </div>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Client Name</th>
//               <th className="py-2 px-4 border-b">Client ID</th>
//               <th className="py-2 px-4 border-b">Registration Date</th>
//               <th className="py-2 px-4 border-b">Account Status</th>
//               <th className="py-2 px-4 border-b">API Key</th>
//               <th className="py-2 px-4 border-b">API Secret</th>
//               <th className="py-2 px-4 border-b">Delete Keys</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiKeys.map((key, index) => (
//               <tr key={index}>
//                 <td className="py-2 px-4 border-b text-center">{key.clientName}</td>
//                 <td className="py-2 px-4 border-b text-center">{key.clientId}</td>
//                 <td className="py-2 px-4 border-b text-center">{key.registrationDate}</td>
//                 <td className="py-2 px-4 border-b text-green-600 text-center">{key.accountStatus}</td>
//                 <td className="py-2 px-4 border-b text-center">
//                   <div className="flex items-center gap-5">
//                     <span>{key.apiKey}</span>
//                     <button className="rounded" onClick={() => copyToClipboard(key.apiKey)}><FaRegCopy/></button>
//                   </div>
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   <div className="flex items-center gap-5">
//                     <span>{key.apiSecret}</span>
//                     <button className="rounded" onClick={() => copyToClipboard(key.apiSecret)}><FaRegCopy/></button>
//                   </div>
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                 <div className="flex justify-center items-center">
//                   <button className="text-gray-500 hover:text-gray-700">

//                   <FaTrash/>

//                   </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-between items-center mt-4">
//           <div>Showing 1 to 20 of 100 entries</div>
//           <div className="flex items-center">
//             <span>20 </span>
//             <button className="border px-2 py-1 mx-1">1</button>
//             <button className="border px-2 py-1 mx-1">2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// // export default APIKeyManagement;

// const ApiKeys: React.FC = () => {

//   return (
//         <LayoutComponent title="Client Management" subtitle="API Keys">
//         <APIKeyManagement />
//         </LayoutComponent>
//   );
// };

// export default ApiKeys;

// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import axios from 'axios';
// import LayoutComponent from "./Layout";
// import { FaRegCopy, FaPlus, FaTrash, FaEllipsis } from "react-icons/fa6";
// import { v4 as uuidv4 } from 'uuid';

// interface Client {
//   username: string;
//   id: number;
//   registrationdate: string;
//   accountstatus: string;
//   apikey: string;
//   secret: string;
// }

// const APIKeyManagement: React.FC = () => {
//   const [selectedClient, setSelectedClient] = useState<string>('');
//   const [apiKey, setApiKey] = useState<string>('');
//   const [apiSecret, setApiSecret] = useState<string>('');
//   const [apiKeys, setApiKeys] = useState<Client[]>([]);
//   const [showMenu, setShowMenu] = useState<boolean>(false);
//   const [perPage, setPerPage] = useState<number>(20);
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   useEffect(() => {
//     fetchApiKeys();
//   }, []);

//   const fetchApiKeys = async () => {
//     try {
//       if (showMenu)
//         {
//           toggleMenu()
//         }
//       const response = await axios.get('https://api.cryptag.in/v1/client-api-keys'); // Replace with your API endpoint
//       console.log("got response : ", response.data)
//       const sortedKeys = response.data.sort((a: Client, b: Client) => a.id - b.id);
//       setApiKeys(sortedKeys);
//     } catch (error) {
//       console.error('Error fetching API keys:', error);
//     }
//   };

//   const generateAPIKey = () => {
//     setApiKey(uuidv4());
//     setApiSecret(uuidv4());
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text).then(() => {
//       // Optionally show a message to the user
//     }, (err) => {
//       console.error('Failed to copy text: ', err);
//     });
//   };

//   const clearInputs = () => {
//     setSelectedClient('');
//     setApiKey('');
//     setApiSecret('');
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleRefresh = () => {
//     fetchApiKeys();
//   };

//   const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(1); // Reset to the first page
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const paginatedApiKeys = apiKeys.slice((currentPage - 1) * perPage, currentPage * perPage);

//   return (
//     <div className="flex flex-col">
//       <div className="border rounded">
//         <div className="mb-6 p-2 flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-lg font-semibold">Generate API Keys</div>
//             <FaEllipsis onClick={clearInputs} className="cursor-pointer" />
//           </div>
//           <div className="flex justify-between">
//             <div className="flex items-center mb-4 grow">
//               <select
//                 className="border p-2 mr-4 w-[80%]"
//                 value={selectedClient}
//                 onChange={(e) => setSelectedClient(e.target.value)}
//               >
//                 <option value="">Select Client</option>
//                 {apiKeys.map((key, index) => (
//                   <option key={index} value={key.clientId}>
//                     {key.clientName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="grow">
//               <div className="flex items-center mb-4 gap-10">
//                 <label className="mb-2">API KEY</label>
//                 <div className="grow flex border rounded">
//                   <input
//                     className="p-2 grow border-none focus:outline-none"
//                     type="text"
//                     value={apiKey}
//                     readOnly
//                   />
//                   <button
//                     className="p-2 rounded"
//                     onClick={() => copyToClipboard(apiKey)}
//                   >
//                     <FaRegCopy />
//                   </button>
//                 </div>
//               </div>
//               <div className="flex items-center gap-12">
//                 <label className="mb-2">Secret</label>
//                 <div className="grow flex border rounded">
//                   <input
//                     className="grow p-2 border-none focus:outline-none"
//                     type="password"
//                     value={apiSecret}
//                     readOnly
//                   />
//                   <button
//                     className="p-2 rounded"
//                     onClick={() => copyToClipboard(apiSecret)}
//                   >
//                     <FaRegCopy />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="grow flex justify-end items-center">
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded w-[34%] h-10 flex justify-between"
//                 onClick={generateAPIKey}
//               >
//                 <div className="flex items-center gap-4">
//                   <FaPlus /><span>Generate API</span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border rounded mt-5">
//         <div>
//           <div className="flex justify-between items-center mb-4 p-2">
//             <div className="text-lg font-semibold">Manage API Keys</div>
//             <div className="relative">
//               <FaEllipsis onClick={toggleMenu} className="cursor-pointer" />
//               {showMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
//                   <button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleRefresh}>
//                     Refresh Table
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Client Name</th>
//                 <th className="py-2 px-4 border-b">Client ID</th>
//                 <th className="py-2 px-4 border-b">Registration Date</th>
//                 <th className="py-2 px-4 border-b">Account Status</th>
//                 <th className="py-2 px-4 border-b">API Key</th>
//                 <th className="py-2 px-4 border-b">API Secret</th>
//                 <th className="py-2 px-4 border-b">Delete Keys</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedApiKeys.map((key, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 border-b text-center">{key.username}</td>
//                   <td className="py-2 px-4 border-b text-center">{key.id}</td>
//                   <td className="py-2 px-4 border-b text-center">{key.registrationdate}</td>
//                   <td className="py-2 px-4 border-b text-green-600 text-center">{key.accountstatus}</td>
//                   <td className="py-2 px-4 border-b text-center">
//                     <div className="flex items-center justify-center gap-5">
//                       <span>{key.apikey}</span>
//                       <button className="rounded" onClick={() => copyToClipboard(key.apikey)}><FaRegCopy /></button>
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 border-b">
//                     <div className="flex items-center justify-center gap-5">
//                       <span>{key.secret}</span>
//                       <button className="rounded" onClick={() => copyToClipboard(key.secret)}><FaRegCopy /></button>
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 border-b">
//                     <div className="flex justify-center items-center">
//                       <button className="text-gray-500 hover:text-gray-700">
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-4 p-2">
//             <div>Showing {((currentPage - 1) * perPage) + 1} to {Math.min(currentPage * perPage, apiKeys.length)} of {apiKeys.length} entries</div>
//             <div className="flex items-center">
//               <select value={perPage} onChange={handlePerPageChange} className="border px-2 py-1 mx-1">
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//                 <option value="50">50</option>
//                 <option value="100">100</option>
//               </select>
//               {Array.from({ length: Math.ceil(apiKeys.length / perPage) }, (_, i) => (
//                 <button
//                   key={i}
//                   className={`border px-2 py-1 mx-1 ${currentPage === i + 1 ? 'bg-gray-300' : ''}`}
//                   onClick={() => handlePageChange(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ApiKeys: React.FC = () => {
//   return (
//     <LayoutComponent title="Client Management" subtitle="API Keys">
//       <APIKeyManagement />
//     </LayoutComponent>
//   );
// };

// export default ApiKeys;

import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutComponent from "./Layout";
import { FaRegCopy, FaPlus, FaTrash, FaEllipsis } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

interface Client {
  username: string;
  id: number;
  registrationdate: string;
  accountstatus: string;
  apikey: string;
  secret: string;
}

const APIKeyManagement: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [apiSecret, setApiSecret] = useState<string>("");
  const [apiKeys, setApiKeys] = useState<Client[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    clientId: number | null;
  }>({ show: false, clientId: null });

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      if (showMenu) {
        toggleMenu();
      }
      const response = await axios.get(
        "https://api.cryptag.in/v1/client-api-keys"
      ); // Replace with your API endpoint
      const sortedKeys = response.data.sort(
        (a: Client, b: Client) => a.id - b.id
      );
      setApiKeys(sortedKeys);
    } catch (error) {
      console.error("Error fetching API keys:", error);
    }
  };

  const generateAPIKey = () => {
    setApiKey(uuidv4());
    setApiSecret(uuidv4());
  };

  const copyToClipboard = (text: string) => {
    if (text === "") return;
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const clearInputs = () => {
    setSelectedClient("");
    setApiKey("");
    setApiSecret("");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRefresh = () => {
    fetchApiKeys();
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDeleteKey = async () => {
    if (deleteModal.clientId !== null) {
      try {
        await axios.delete(
          `https://api.cryptag.in/v1/client-api-keys/${deleteModal.clientId}`
        ); // Replace with your delete API endpoint
        setDeleteModal({ show: false, clientId: null });
        fetchApiKeys();
      } catch (error) {
        console.error("Error deleting API key:", error);
      }
    }
  };

  const paginatedApiKeys = apiKeys.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="flex flex-col">
      {copied && (
        <div
          className="bg-blue-100 absolute  left-1/2 border border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          Copied
        </div>
      )}
      <div className="border bg-white shadow-md rounded-lg p-2">
        <div className="mb-6 p-2 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">Generate API Keys</div>
            <FaEllipsis onClick={clearInputs} className="cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center mr-2 w-full justify-between">
              <div className="w-1/2 mr-4">
                <select
                  className="border w-full p-2 mr-4 rounded-md grow"
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                >
                  <option value="">Select Client</option>
                  {apiKeys.map((key, index) => (
                    <option key={index} value={key.id.toString()}>
                      {key.username}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grow">
                <div className="flex items-center mb-4">
                  <label className="mb-2 w-20">API KEY</label>
                  <div className="grow flex border rounded">
                    <input
                      className="p-2 grow border-none focus:outline-none rounded-md"
                      type="text"
                      value={apiKey}
                      readOnly
                    />
                    <button
                      className="p-2 rounded"
                      onClick={() => copyToClipboard(apiKey)}
                    >
                      <FaRegCopy />
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <label className="mb-2 w-20">Secret</label>
                  <div className="flex grow border rounded">
                    <input
                      className="p-2 grow border-none focus:outline-none rounded-md"
                      type="password"
                      value={apiSecret}
                      readOnly
                    />
                    <button
                      className="p-2 rounded"
                      onClick={() => copyToClipboard(apiSecret)}
                    >
                      <FaRegCopy />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded  flex justify-between hover:bg-green-700 text-nowrap"
                onClick={generateAPIKey}
              >
                <div className="flex items-center gap-4">
                  <FaPlus />
                  <span>Generate API</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg bg-white p-2 shadow-md mt-5">
        <div>
          <div className="flex justify-between items-center mb-4 p-2">
            <div className="text-lg font-semibold">Manage API Keys</div>
            <div className="relative">
              <FaEllipsis onClick={toggleMenu} className="cursor-pointer" />
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleRefresh}
                  >
                    Refresh Table
                  </button>
                </div>
              )}
            </div>
          </div>
          <table className="min-w-full bg-white border-gray-300">
            <thead>
              <tr className="bg-secondary/10">
                <th className="py-2 px-4 border-b">Client Name</th>
                <th className="py-2 px-4 border-b">Client ID</th>
                <th className="py-2 px-4 border-b">Registration Date</th>
                <th className="py-2 px-4 border-b">Account Status</th>
                <th className="py-2 px-4 border-b">API Key</th>
                <th className="py-2 px-4 border-b">API Secret</th>
                <th className="py-2 px-4 border-b">Delete Keys</th>
              </tr>
            </thead>
            <tbody>
              {paginatedApiKeys.map((key, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-center">
                    {key.username}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{key.id}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {key.registrationdate}
                  </td>
                  <td className="py-2 px-4 border-b text-green-600 text-center">
                    {key.accountstatus}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex items-center justify-center gap-5">
                      <span>{key.apikey}</span>
                      <button
                        className="rounded"
                        onClick={() => copyToClipboard(key.apikey)}
                      >
                        <FaRegCopy />
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center justify-center gap-5">
                      <input
                        className="border-none focus:outline-none text-center"
                        type="password"
                        value={key.secret}
                        readOnly
                      />
                      <button
                        className="rounded"
                        onClick={() => copyToClipboard(key.secret)}
                      >
                        <FaRegCopy />
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex justify-center items-center">
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() =>
                          setDeleteModal({ show: true, clientId: key.id })
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4 p-2">
            <div className="flex items-center">
              <div className="mr-4">
                Showing {(currentPage - 1) * perPage + 1} to{" "}
                {Math.min(currentPage * perPage, apiKeys.length)} of{" "}
                {apiKeys.length} entries
              </div>
              <select
                value={perPage}
                onChange={handlePerPageChange}
                className="border rounded-lg px-2 py-1 mx-1"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="flex items-center">
              {Array.from(
                { length: Math.ceil(apiKeys.length / perPage) },
                (_, i) => (
                  <button
                    key={i}
                    className={`border w-10 h-10 rounded-full bg-secondary text-black px-2 py-1 mx-1 ${
                      currentPage === i + 1 ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {deleteModal.show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this API key?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700"
                onClick={handleDeleteKey}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => setDeleteModal({ show: false, clientId: null })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ApiKeys: React.FC = () => {
  return (
    <LayoutComponent
      title="Client Management"
      link="/api-keys"
      subtitle="API Keys"
    >
      <APIKeyManagement />
    </LayoutComponent>
  );
};

export default ApiKeys;
