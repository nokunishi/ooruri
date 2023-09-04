"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";
import Avatar from "@/app/(client)/components/Avatar";
import clsx from "clsx";
import Link from "next/link";
import { signOut } from "next-auth/react";

type UserBoxProps = {
  user: User;
  key: string;
};

const UserBox: React.FC<UserBoxProps> = ({ user, key }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    axios
      .post("/api/chat", {
        userId: key,
      })
      .then((data) => {
        router.push(`/chat/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      onClick={() => signOut()}
      className={clsx(`w-full relative flex flex-row items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 
        transition rounded-lg`)}
    >
      <Avatar user={user} />
      <div className="justify-between items-center mb-1">
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
      </div>
    </div>
  );
};

export default UserBox;
