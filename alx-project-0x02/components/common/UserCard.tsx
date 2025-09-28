// components/common/UserCard.tsx
import React from "react";
import { UserProps} from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
