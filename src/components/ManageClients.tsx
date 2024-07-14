// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { FaTrash, FaPen } from 'react-icons/fa';
// import LayoutComponent from "./Layout";

// interface Client {
//   username: string;
//   id: number;
//   registrationdate: string;
//   accountstatus: string;
//   email: string;
//   industrytype: string;
//   companyregtype: string;
// }

// interface ModalProps {
//   title: string;
//   onClose: () => void;
//   onSave: () => void;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ title, onClose, onSave, children }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg p-4 w-1/2">
//         <div className="flex justify-between items-center border-b pb-2">
//           <h2 className="text-xl">{title}</h2>
//           <button onClick={onClose}>X</button>
//         </div>
//         <div className="mt-4">
//           {children}
//         </div>
//         <div className="flex justify-end mt-4">
//           <button className="border px-4 py-2 mr-2" onClick={onSave}>Yes</button>
//           <button className="border px-4 py-2" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ClientTable: React.FC = () => {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedClient, setSelectedClient] = useState<Client | null>(null);
//   const [entriesPerPage, setEntriesPerPage] = useState(20);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.cryptag.in/v1/manage-clients');
//         console.log(response.data)
//         const sortedClients = response.data.sort((a: Client, b: Client) => a.id - b.id);
//         setClients(sortedClients);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEdit = (client: Client) => {
//     setSelectedClient(client);
//     setShowEditModal(true);
//   };

//   const handleDelete = (client: Client) => {
//     setSelectedClient(client);
//     setShowDeleteModal(true);
//   };

//   const handleUpdateClient = async (updatedClient: Client) => {
//     try {
//       await axios.put(`https://api.cryptag.in/v1/manage-clients/${updatedClient.id}`, updatedClient);
//       setClients(clients.map(client => (client.id === updatedClient.id ? updatedClient : client)));
//       setShowEditModal(false);
//     } catch (err) {
//       setError('Failed to update client');
//     }
//   };

//   const handleConfirmDelete = async () => {
//     if (!selectedClient) return;
//     try {
//       await axios.delete(`https://api.cryptag.in/v1/delete-client/${selectedClient.id}`);
//       setClients(clients.filter(client => client.id !== selectedClient.id));
//       setShowDeleteModal(false);
//     } catch (err) {
//       setError('Failed to delete client');
//     }
//   };

//   const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setEntriesPerPage(Number(e.target.value));
//     setCurrentPage(1);
//   };

//   const totalEntries = clients.length;
//   const totalPages = Math.ceil(totalEntries / entriesPerPage);
//   const currentEntries = clients.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Client Name</th>
//             <th className="py-2 px-4 border-b">Client ID</th>
//             <th className="py-2 px-4 border-b">Registration Date</th>
//             <th className="py-2 px-4 border-b">Account Status</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Industry</th>
//             <th className="py-2 px-4 border-b">Registration Type</th>
//             <th className="py-2 px-4 border-b">Modify</th>
//             <th className="py-2 px-4 border-b">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentEntries.map((client, index) => (
//             <tr key={index}>
//               <td className="py-2 px-4 border-b text-center">{client.username}</td>
//               <td className="py-2 px-4 border-b text-center">{client.id}</td>
//               <td className="py-2 px-4 border-b text-center">{client.registrationdate}</td>
//               <td className="py-2 px-4 border-b text-green-600  text-center">{client.accountstatus}</td>
//               <td className="py-2 px-4 border-b  text-center">{client.email}</td>
//               <td className="py-2 px-4 border-b  text-center">{client.industrytype}</td>
//               <td className="py-2 px-4 border-b  text-center">{client.companyregtype}</td>
//               <td className="py-2 px-4 border-b">
//                 <div className="flex justify-center">
//                   <button className="text-gray-500 hover:text-gray-700" onClick={() => handleEdit(client)}>
//                     <FaPen />
//                   </button>
//                 </div>
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <div className="flex justify-center">
//                   <button className="text-gray-500 hover:text-gray-700" onClick={() => handleDelete(client)}>
//                     <FaTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between items-center mt-4">
//         <div>
//           Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries
//         </div>
//         <div className="flex items-center">
//           <select value={entriesPerPage} onChange={handleEntriesChange} className="border px-2 py-1 mx-1">
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={30}>30</option>
//             <option value={50}>50</option>
//           </select>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`border px-2 py-1 mx-1 ${index + 1 === currentPage ? 'bg-gray-300' : ''}`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {showEditModal && selectedClient && (
//         <Modal
//           title="Edit Client"
//           onClose={() => setShowEditModal(false)}
//           onSave={() => handleUpdateClient(selectedClient)}
//         >
//           {/* Add form fields for editing the client details */}
//           <div>
//             <label>Client Name</label>
//             <input
//               type="text"
//               value={selectedClient.username}
//               onChange={(e) => setSelectedClient({ ...selectedClient, username: e.target.value })}
//             />
//             {/* Add more fields as necessary */}
//           </div>
//         </Modal>
//       )}

//       {showDeleteModal && selectedClient && (
//         <Modal
//           title="Delete Client"
//           onClose={() => setShowDeleteModal(false)}
//           onSave={handleConfirmDelete}
//         >
//           Are you sure you want to delete {selectedClient.username}?
//         </Modal>
//       )}
//     </div>
//   );
// };

// const ManageClients: React.FC = () => {
//   return (
//     <LayoutComponent title="Client Management" subtitle="Manage Clients">
//       <ClientTable />
//     </LayoutComponent>
//   );
// };

// export default ManageClients;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaPen } from "react-icons/fa";
import LayoutComponent from "./Layout";

interface Client {
  username: string;
  id: number;
  registrationdate: string;
  accountstatus: string;
  email: string;
  industrytype: string;
  companyregtype: string;
}

interface ModalProps {
  title: string;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onSave, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 w-1/2">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl">{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="flex justify-end mt-4">
          <button className="border px-4 py-2 mr-2" onClick={onSave}>
            Yes
          </button>
          <button className="border px-4 py-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ClientTable: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [entriesPerPage, setEntriesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.cryptag.in/v1/manage-clients"
      );
      const sortedClients = response.data.sort(
        (a: Client, b: Client) => a.id - b.id
      );
      setClients(sortedClients);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  const handleEdit = (client: Client) => {
    setSelectedClient(client);
    setShowEditModal(true);
  };

  const handleDelete = (client: Client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  const handleUpdateClient = async () => {
    if (!selectedClient) return;
    try {
      await axios.put(
        `https://api.cryptag.in/v1/manage-clients/${selectedClient.id}`,
        selectedClient
      );
      fetchData();
      setShowEditModal(false);
    } catch (err) {
      setError("Failed to update client");
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedClient) return;
    try {
      await axios.delete(
        `https://api.cryptag.in/v1/delete-client/${selectedClient.id}`
      );
      setClients(clients.filter((client) => client.id !== selectedClient.id));
      setShowDeleteModal(false);
    } catch (err) {
      setError("Failed to delete client");
    }
  };

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const totalEntries = clients.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const currentEntries = clients.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client Name</th>
            <th className="py-2 px-4 border-b">Client ID</th>
            <th className="py-2 px-4 border-b">Registration Date</th>
            <th className="py-2 px-4 border-b">Account Status</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Industry</th>
            <th className="py-2 px-4 border-b">Registration Type</th>
            <th className="py-2 px-4 border-b">Modify</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((client, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">
                {client.username}
              </td>
              <td className="py-2 px-4 border-b text-center">{client.id}</td>
              <td className="py-2 px-4 border-b text-center">
                {client.registrationdate}
              </td>
              <td className="py-2 px-4 border-b text-green-600  text-center">
                {client.accountstatus}
              </td>
              <td className="py-2 px-4 border-b  text-center">
                {client.email}
              </td>
              <td className="py-2 px-4 border-b  text-center">
                {client.industrytype}
              </td>
              <td className="py-2 px-4 border-b  text-center">
                {client.companyregtype}
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex justify-center">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleEdit(client)}
                  >
                    <FaPen />
                  </button>
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex justify-center">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleDelete(client)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
          {Math.min(currentPage * entriesPerPage, totalEntries)} of{" "}
          {totalEntries} entries
        </div>
        <div className="flex items-center">
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border px-2 py-1 mx-1"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`border px-2 py-1 mx-1 ${
                index + 1 === currentPage ? "bg-gray-300" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {showEditModal && selectedClient && (
        <Modal
          title="Edit Client"
          onClose={() => setShowEditModal(false)}
          onSave={handleUpdateClient}
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block">Client Name</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClient.username}
                onChange={(e) =>
                  setSelectedClient({
                    ...selectedClient,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Account Status</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClient.accountstatus}
                onChange={(e) =>
                  setSelectedClient({
                    ...selectedClient,
                    accountstatus: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                className="border p-2 w-full"
                value={selectedClient.email}
                onChange={(e) =>
                  setSelectedClient({
                    ...selectedClient,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Industry</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClient.industrytype}
                onChange={(e) =>
                  setSelectedClient({
                    ...selectedClient,
                    industrytype: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Registration Type</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedClient.companyregtype}
                onChange={(e) =>
                  setSelectedClient({
                    ...selectedClient,
                    companyregtype: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </Modal>
      )}

      {showDeleteModal && selectedClient && (
        <Modal
          title="Delete Client"
          onClose={() => setShowDeleteModal(false)}
          onSave={handleConfirmDelete}
        >
          Are you sure you want to delete {selectedClient.username}?
        </Modal>
      )}
    </div>
  );
};

const ManageClients: React.FC = () => {
  return (
    <LayoutComponent
      title="Client Management"
      link="/manage-clients"
      subtitle="Manage Clients"
    >
      <ClientTable />
    </LayoutComponent>
  );
};

export default ManageClients;
