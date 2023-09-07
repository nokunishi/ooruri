"use client";

import useChat from "@/app/(server)/hooks/useChat";
import useRoutes from "@/app/(server)/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useChat();

  if (isOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed justify-between w-full bottom-0 z-40 flex
        itesms-center bg-white border-t-[1px] lg:hidden"
      >
        {routes.map((route) => (
          <MobileItem
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        ))}
      </div>
    );
  }
};

export default MobileFooter;
