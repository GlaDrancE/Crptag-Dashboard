import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaLock, FaCog, FaTrash } from 'react-icons/fa';
import LayoutComponent from "./Layout";
import { AiOutlineSetting } from "react-icons/ai";
import { toast } from "react-toastify";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  profile: string;
  permission: string;
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
        <div className="mt-4">
          {children}
        </div>
        <div className="flex justify-end mt-4">
          <button className="border px-4 py-2 mr-2" onClick={onSave}>Save</button>
          <button className="border px-4 py-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const UserManagement1: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://api.cryptag.in/v1/admin-user');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleChangePassword = (user: User) => {
    setSelectedUser(user);
    setShowChangePasswordModal(true);
  };

  const handleDeleteUser = (user: User) => {
    const adminCount = users.filter(u => u.permission === 'Admin').length;
    if (user.permission === 'Admin' && adminCount === 1) {
      toast.error("At least one admin must be present");
      return;
    }
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowEditUserModal(true);
  };

  const handleSavePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.put(`https://api.cryptag.in/v1/admin-user/${selectedUser?.id}`, { ...selectedUser, password: newPassword });
      setShowChangePasswordModal(false);
      setNewPassword('');
      setConfirmPassword('');
      toast.success("Password updated successfully");
    } catch (error) {
      console.error('Failed to update password', error);
      toast.error("Failed to update password");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`https://api.cryptag.in/v1/admin-user/${selectedUser?.id}`);
      setUsers(users.filter(user => user.id !== selectedUser?.id));
      setShowDeleteModal(false);
      toast.success("User deleted successfully");
    } catch (error) {
      console.error('Failed to delete user', error);
      toast.error("Failed to delete user");
    }
  };

  const handleSaveUser = async () => {
    if (selectedUser) {
      try {
        await axios.put(`https://api.cryptag.in/v1/admin-user/${selectedUser.id}`, selectedUser);
        setUsers(users.map(user => user.id === selectedUser.id ? selectedUser : user));
        setShowEditUserModal(false);
        toast.success("User updated successfully");
      } catch (error) {
        console.error('Failed to update user', error);
        toast.error("Failed to update user");
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-4">Admin User Management</h2>
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">Profile</th>
              <th className="py-2 px-4 border-b">Permission</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b text-center">{user.first_name}</td>
                <td className="py-2 px-4 border-b text-center">{user.last_name}</td>
                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex items-center justify-center">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded flex items-center space-x-2 hover:bg-gray-400"
                    onClick={() => handleChangePassword(user)}
                  >
                    <FaLock />
                    <span>Change Password</span>
                  </button>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex items-center justify-center ">
                    <div className="bg-blue-500 text-white tex-center rounded-full h-8 w-8">
                    {user.profile}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <span className={`px-2 py-1 rounded ${user.permission === 'Admin' ? 'bg-green-200' : 'bg-yellow-200'}`}>
                    {user.permission}
                  </span>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEditUser(user)}>
                      <AiOutlineSetting />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteUser(user)}>
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
            Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} entries
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => paginate(1)}
              className={`border px-2 py-1 ${currentPage === 1 ? 'bg-gray-200' : ''}`}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`border px-2 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => paginate(Math.ceil(filteredUsers.length / usersPerPage))}
              className={`border px-2 py-1 ${currentPage === Math.ceil(filteredUsers.length / usersPerPage) ? 'bg-gray-200' : ''}`}
              disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>

      {showChangePasswordModal && (
        <Modal
          title="Change Password"
          onClose={() => setShowChangePasswordModal(false)}
          onSave={handleSavePassword}
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block">New Password</label>
              <input
                type="password"
                className="border p-2 w-full"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block">Confirm Password</label>
              <input
                type="password"
                className={`border p-2 w-full ${confirmPassword && newPassword !== confirmPassword ? 'border-red-500' : ''}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <div className="text-red-500">Passwords do not match</div>
            )}
          </div>
        </Modal>
      )}

      {showDeleteModal && (
        <Modal
          title="Delete User"
          onClose={() => setShowDeleteModal(false)}
          onSave={handleConfirmDelete}
        >
          Are you sure you want to delete {selectedUser?.first_name} {selectedUser?.last_name}?
        </Modal>
      )}

      {showEditUserModal && (
        <Modal
          title="Edit User"
          onClose={() => setShowEditUserModal(false)}
          onSave={handleSaveUser}
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block">First Name</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedUser?.first_name || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value } as User)}
              />
            </div>
            <div>
              <label className="block">Last Name</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedUser?.last_name || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value } as User)}
              />
            </div>
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                className="border p-2 w-full"
                value={selectedUser?.email || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value } as User)}
              />
            </div>
            <div>
              <label className="block">Profile</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={selectedUser?.profile || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, profile: e.target.value } as User)}
              />
            </div>
            <div>
              <label className="block">Permission</label>
              <select
                className="border p-2 w-full"
                value={selectedUser?.permission || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, permission: e.target.value } as User)}
              >
                <option value="">Select Permission</option>
                <option value="Admin">Admin</option>
                <option value="Sub Admin">Sub Admin</option>
              </select>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

const UserManagement: React.FC = () => {
  return (
    <LayoutComponent title="Admin Settings" subtitle="User Management">
      <UserManagement1 />
    </LayoutComponent>
  );
};

export default UserManagement;
