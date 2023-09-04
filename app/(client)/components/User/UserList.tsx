"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import getUsers from "@/app/actions/getUsers";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const user_id = users?.map((user) => {
    console.log(user.id);
  });

  return (
    <div
      className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80
      overflow-y-auot border-r border-gray-200 w-full left-0 first-letter
      flex flex-col px-3"
    >
      <div
        className="text-2xl font-bold ml-4 text-neutral-800 py-4 cursor-pointer"
        onClick={() => console.log("hi")}
      >
        People
      </div>
      <div>
        {users?.map((user) => (
          <UserBox user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
