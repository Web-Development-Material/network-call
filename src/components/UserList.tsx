import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../api/apiUrl";
import { UserListProps } from "../utils/interface";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState<UserListProps[]>([]);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await getUsers().then((response: any) => {
      setUsers(response?.data);
    });
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id).then(fetchUsers);
  };

  const handleEdit = (id: string) => {
    setEditingUserId(id);
  };

  const handleSuccess = () => {
    fetchUsers();
    setEditingUserId(null);
  };

  return (
    <div>
      <UserForm
        userId={editingUserId !== null ? editingUserId : undefined}
        onSuccess={handleSuccess}
      />
      <ul className="mt-6 space-y-2">
        {users?.map((user: any) => {
          return (
            <li
              key={user?.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
            >
              <div className="flex space-x-5">
                <h3 className="text-black">{user?.name}</h3>
                <img src={user?.avatar} className="w-40 h-40 rounded-full" />
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user?.id)}
                  className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user?.id)}
                  className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
