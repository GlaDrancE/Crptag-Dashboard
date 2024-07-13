// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import LayoutComponent from "./Layout";
// import { FaPen } from "react-icons/fa6";

// const TagInfoTable = () => {
//   const [tagsData, setTagsData] = useState([]);
//   const [filteredTags, setFilteredTags] = useState([]);
//   const [searchParams, setSearchParams] = useState({
//     tagUid: '',
//     batchNumber: '',
//     tagStatus: '',
//     clientId: '',
//     clientName: '',
//     fraudCount: '',
//     blacklistStatus: '',
//     scanDateTime: '',
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(20);

//   // Fetch tags data from API
//   useEffect(() => {
//     const fetchTagsData = async () => {
//       try {
//         const response = await axios.get('https://api.cryptag.in/v1/taginfo'); // Replace with your API endpoint
//         console.log(response.data);
//         setTagsData(response.data);
//         setFilteredTags(response.data);
//       } catch (error) {
//         console.error("Error fetching tags data:", error);
//       }
//     };
//     fetchTagsData();
//   }, []);

//   const convertDateFormat = (dateStr) => {
//     const date = new Date(dateStr);
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear();
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
//   };

//   const handleSearch = () => {
//     const filtered = tagsData.filter(tag => {
//       const formattedLastScanDateTime = convertDateFormat(tag.lastscandatetime);

//       return (
//         (searchParams.tagUid === '' || tag.uid.includes(searchParams.tagUid)) &&
//         (searchParams.batchNumber === '' || tag.batchno.includes(searchParams.batchNumber)) &&
//         (searchParams.tagStatus === '' || tag.tagstatus.includes(searchParams.tagStatus)) &&
//         (searchParams.clientId === '' || String(tag.clientid).includes(searchParams.clientId)) &&
//         (searchParams.clientName === '' || (tag.client && tag.client.username.includes(searchParams.clientName))) &&
//         (searchParams.fraudCount === '' || tag.fraud.toString().includes(searchParams.fraudCount)) &&
//         (searchParams.blacklistStatus === '' || (tag.blacklistvalue ? 'Blacklisted' : 'NA').includes(searchParams.blacklistStatus)) &&
//         (searchParams.scanDateTime === '' || formattedLastScanDateTime.includes(searchParams.scanDateTime))
//       );
//     });
//     setFilteredTags(filtered);
//     setCurrentPage(1); // Reset to the first page on new search
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1); // Reset to the first page on items per page change
//   };

//   // Pagination calculations
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredTags.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredTags.length / itemsPerPage);

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By UID"
//           value={searchParams.tagUid}
//           onChange={(e) => setSearchParams({ ...searchParams, tagUid: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Batch Number"
//           value={searchParams.batchNumber}
//           onChange={(e) => setSearchParams({ ...searchParams, batchNumber: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Tag Status"
//           value={searchParams.tagStatus}
//           onChange={(e) => setSearchParams({ ...searchParams, tagStatus: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Client ID"
//           value={searchParams.clientId}
//           onChange={(e) => setSearchParams({ ...searchParams, clientId: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Client Name"
//           value={searchParams.clientName}
//           onChange={(e) => setSearchParams({ ...searchParams, clientName: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Fraud Count"
//           value={searchParams.fraudCount}
//           onChange={(e) => setSearchParams({ ...searchParams, fraudCount: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="text"
//           placeholder="Search By Blacklist Status"
//           value={searchParams.blacklistStatus}
//           onChange={(e) => setSearchParams({ ...searchParams, blacklistStatus: e.target.value })}
//         />
//         <input
//           className="border p-2"
//           type="datetime-local"
//           value={searchParams.scanDateTime}
//           onChange={(e) => setSearchParams({ ...searchParams, scanDateTime: e.target.value })}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//           onClick={handleSearch}
//         >
//           Search All Records
//         </button>
//       </div>

//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Client Name</th>
//             <th className="py-2 px-4 border-b">Client ID</th>
//             <th className="py-2 px-4 border-b">UID</th>
//             <th className="py-2 px-4 border-b">Batch Number</th>
//             <th className="py-2 px-4 border-b">Tag Status</th>
//             <th className="py-2 px-4 border-b">Tag Activated Date and Time</th>
//             <th className="py-2 px-4 border-b">Scan Count</th>
//             <th className="py-2 px-4 border-b">Last Scan Date and Time</th>
//             <th className="py-2 px-4 border-b">Frauds</th>
//             <th className="py-2 px-4 border-b">Blacklist Status</th>
//             <th className="py-2 px-4 border-b">Modify</th>
//             <th className="py-2 px-4 border-b">Revoke</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((tag, index) => (
//             <tr key={index}>
//               <td className="py-2 px-4 border-b text-center">{tag.client ? tag.client.username : ''}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.clientid}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.uid}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.batchno}</td>
//               <td className={`py-2 px-4 border-b text-center ${tag.tagstatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{tag.tagstatus}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.tagactivateddatetime}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.sdmreadcnt}</td>
//               <td className="py-2 px-4 border-b text-center">{convertDateFormat(tag.lastscandatetime)}</td>
//               <td className="py-2 px-4 border-b text-center">{tag.fraud}</td>
//               <td className={`py-2 px-4 border-b text-center ${tag.blacklistvalue ? 'text-red-600' : 'text-green-600'}`}>{tag.blacklistvalue ? 'Blacklisted' : 'NA'}</td>
//               <td className="py-2 px-4 border-b">
//                 <div className="flex justify-center">
//                   <button className="text-gray-500 hover:text-gray-700">
//                     <FaPen />
//                   </button>
//                 </div>
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <div className="flex justify-center">
//                   <button className="text-gray-500 hover:text-gray-700">
//                    <img src={`${tag.tagstatus === 'Active' ? '/links.png' : '/link.png'}`}/>
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-between items-center mt-4">
//         <div>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredTags.length)} of {filteredTags.length} entries</div>
//         <div className="flex items-center">
//         <select className="border p-2 mx-2" value={itemsPerPage} onChange={handleItemsPerPageChange}>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={50}>50</option>
//             <option value={100}>100</option>
//           </select>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               className={`border px-2 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const TagsInformation: React.FC = () => {

//   return (

//             <LayoutComponent title="Tag Management" subtitle="Tags Information">
//             <TagInfoTable />
//             </LayoutComponent>
//   );
// };

// export default TagsInformation;

import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutComponent from "./Layout";
import { FaPen } from "react-icons/fa6";
import { Search } from "lucide-react";

const TagInfoTable = () => {
  const [tagsData, setTagsData] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [searchParams, setSearchParams] = useState({
    tagUid: "",
    batchNumber: "",
    tagStatus: "",
    clientId: "",
    clientName: "",
    fraudCount: "",
    blacklistStatus: "",
    scanDateTime: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  // Fetch tags data from API
  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const response = await axios.get("https://api.cryptag.in/v1/taginfo"); // Replace with your API endpoint
        console.log(response.data);
        setTagsData(response.data);
        setFilteredTags(response.data);
      } catch (error) {
        console.error("Error fetching tags data:", error);
      }
    };
    fetchTagsData();
  }, []);

  const convertDateFormat = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSearch = () => {
    const filtered = tagsData.filter((tag) => {
      const formattedLastScanDateTime = convertDateFormat(tag.lastscandatetime);

      return (
        (searchParams.tagUid === "" || tag.uid.includes(searchParams.tagUid)) &&
        (searchParams.batchNumber === "" ||
          tag.batchno.includes(searchParams.batchNumber)) &&
        (searchParams.tagStatus === "" ||
          tag.tagstatus.includes(searchParams.tagStatus)) &&
        (searchParams.clientId === "" ||
          String(tag.clientid).includes(searchParams.clientId)) &&
        (searchParams.clientName === "" ||
          (tag.client &&
            tag.client.username.includes(searchParams.clientName))) &&
        (searchParams.fraudCount === "" ||
          tag.fraud.toString().includes(searchParams.fraudCount)) &&
        (searchParams.blacklistStatus === "" ||
          (tag.blacklistvalue ? "Blacklisted" : "NA").includes(
            searchParams.blacklistStatus
          )) &&
        (searchParams.scanDateTime === "" ||
          formattedLastScanDateTime.includes(searchParams.scanDateTime))
      );
    });
    setFilteredTags(filtered);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page on items per page change
  };

  const handleEditButtonClick = (tag) => {
    console.log("tag to edit", tag);
    setSelectedTag(tag);
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    // Logic to save changes to the server
    // Example:
    console.log(selectedTag.clientid);
    axios
      .put(
        `https://api.cryptag.in/v1/update-tag/${selectedTag.clientid}`,
        selectedTag
      )
      .then((response) => {
        // Update tagsData and filteredTags
        setShowEditModal(false);
      })
      .catch((error) => console.error("Error updating tag:", error));
    // setShowEditModal(false);
  };

  const handleRevokeButtonClick = (tag) => {
    setSelectedTag(tag);
    setShowConfirmModal(true);
  };

  const handleConfirmRevoke = () => {
    // Logic to update tag status
    // Example:
    const updatedTag = {
      ...selectedTag,
      tagstatus: selectedTag.tagstatus === "Active" ? "Revoked" : "Active",
    };
    axios
      .put(
        `https://api.cryptag.in/v1/update-tag/${selectedTag.clientid}`,
        updatedTag
      )
      .then((response) => {
        // Update tagsData and filteredTags
        setShowConfirmModal(false);
      })
      .catch((error) => console.error("Error updating tag status:", error));
    // setShowConfirmModal(false);
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTags.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTags.length / itemsPerPage);

  return (
    <div
      className="container bg-white p-4 shadow-md rounded-lg"
      style={{ width: "calc(100% - 240px)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By UID"
          value={searchParams.tagUid}
          onChange={(e) =>
            setSearchParams({ ...searchParams, tagUid: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Batch Number"
          value={searchParams.batchNumber}
          onChange={(e) =>
            setSearchParams({ ...searchParams, batchNumber: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Tag Status"
          value={searchParams.tagStatus}
          onChange={(e) =>
            setSearchParams({ ...searchParams, tagStatus: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Client ID"
          value={searchParams.clientId}
          onChange={(e) =>
            setSearchParams({ ...searchParams, clientId: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Client Name"
          value={searchParams.clientName}
          onChange={(e) =>
            setSearchParams({ ...searchParams, clientName: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Fraud Count"
          value={searchParams.fraudCount}
          onChange={(e) =>
            setSearchParams({ ...searchParams, fraudCount: e.target.value })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Search By Blacklist Status"
          value={searchParams.blacklistStatus}
          onChange={(e) =>
            setSearchParams({
              ...searchParams,
              blacklistStatus: e.target.value,
            })
          }
        />
        <input
          className="border p-2 rounded-md"
          type="datetime-local"
          value={searchParams.scanDateTime}
          onChange={(e) =>
            setSearchParams({ ...searchParams, scanDateTime: e.target.value })
          }
        />
        <button
          className="bg-blue-500 flex items-center text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          <Search className="mr-2" />
          Search All Records
        </button>
      </div>

      <div className="w-full bg-red-500 overflow-x-auto">
        <table className="max-w-full w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Client Name
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Client ID
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">UID</th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Batch Number
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Tag Status
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Tag Activated Date and Time
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Scan Count
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Last Scan Date and Time
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">Frauds</th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">
                Blacklist Status
              </th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">Modify</th>
              <th className="py-2 px-4 text-sm text-nowrap border-b">Revoke</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((tag, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">
                  {tag.client ? tag.client.username : ""}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {tag.clientid}
                </td>
                <td className="py-2 px-4 border-b text-center">{tag.uid}</td>
                <td className="py-2 px-4 border-b text-center">
                  {tag.batchno}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center ${
                    tag.tagstatus === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tag.tagstatus}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {tag.tagactivateddatetime}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {tag.sdmreadcnt}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {convertDateFormat(tag.lastscandatetime)}
                </td>
                <td className="py-2 px-4 border-b text-center">{tag.fraud}</td>
                <td
                  className={`py-2 px-4 border-b text-center ${
                    tag.blacklistvalue ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {tag.blacklistvalue ? "Blacklisted" : "NA"}
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleEditButtonClick(tag)}
                    >
                      <FaPen />
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleRevokeButtonClick(tag)}
                    >
                      <img
                        src={`${
                          tag.tagstatus === "Active"
                            ? "/links.png"
                            : "/link.png"
                        }`}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, filteredTags.length)} of{" "}
          {filteredTags.length} entries
        </div>
        <div className="flex items-center">
          <select
            className="border p-2 mx-2"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`border px-2 py-1 mx-1 ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedTag && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Tag Information</h2>
            <div className="mb-4">
              <label className="block mb-2">Client Name</label>
              <input
                className="border p-2 w-full"
                type="text"
                value={selectedTag.client ? selectedTag.client.username : ""}
                onChange={(e) =>
                  setSelectedTag({
                    ...selectedTag,
                    client: { ...selectedTag.client, username: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">UID</label>
              <input
                className="border p-2 w-full"
                type="text"
                value={selectedTag.uid}
                onChange={(e) =>
                  setSelectedTag({ ...selectedTag, uid: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Batch Number</label>
              <input
                className="border p-2 w-full"
                type="text"
                value={selectedTag.batchno}
                onChange={(e) =>
                  setSelectedTag({ ...selectedTag, batchno: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Scan Count</label>
              <input
                className="border p-2 w-full"
                type="number"
                value={selectedTag.sdmreadcnt}
                onChange={(e) =>
                  setSelectedTag({ ...selectedTag, sdmreadcnt: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Frauds</label>
              <input
                className="border p-2 w-full"
                type="number"
                value={selectedTag.fraud}
                onChange={(e) =>
                  setSelectedTag({ ...selectedTag, fraud: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Blacklist Status</label>
              <select
                className="border p-2 w-full"
                value={selectedTag.blacklistvalue ? "Blacklisted" : "NA"}
                onChange={(e) =>
                  setSelectedTag({
                    ...selectedTag,
                    blacklistvalue: e.target.value === "Blacklisted",
                  })
                }
              >
                <option value="NA">NA</option>
                <option value="Blacklisted">Blacklisted</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
            <p className="mb-4">
              Are you sure you want to{" "}
              {selectedTag.tagstatus === "Active" ? "revoke" : "activate"} this
              tag?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmRevoke}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TagsInformation: React.FC = () => {
  return (
    <LayoutComponent title="Tag Management" subtitle="Tags Information">
      <TagInfoTable />
    </LayoutComponent>
  );
};

export default TagsInformation;
