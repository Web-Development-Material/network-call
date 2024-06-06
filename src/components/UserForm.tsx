import { useState, useEffect, FC, FormEvent } from "react";
import { createUser, updateUser, getUserById } from "../api/apiUrl";
import { UserFormProps } from "../utils/interface";

const UserForm: FC<UserFormProps> = ({ userId, onSuccess }) => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((response: any) => {
        setName(response?.data?.name);
        setAvatar(response?.data?.avatar);
      });
    }
  }, [userId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = { name, avatar };
    if (userId) {
      await updateUser(userId, user).then(onSuccess);
    } else {
      await createUser(user).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          className="bg-white text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Avatar
        </label>
        <input
          type="text"
          value={avatar}
          onChange={(e: any) => setAvatar(e.target.value)}
          className="bg-white text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {userId ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
