import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useChat from "./useChat";

const useRoutes = () => {
  const path = usePathname();
  const { chatId } = useChat();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/chats",
        icon: HiChat,
        active: path === "/chats" || !!chatId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: path === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [path, chatId]
  );

  return routes;
};

export default useRoutes;
