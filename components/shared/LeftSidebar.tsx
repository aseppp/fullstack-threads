"use client";

import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

const LeftSidebar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="left-sidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.path) && link.path.length > 1) || pathname === link.path;

          if (link.path === "/profile") link.path = `${link.path}/${userId}`;

          return (
            <Link
              href={link.path}
              key={link.label}
              className={`leftsidebar_link ${
                isActive &&
                'bg-dark-3 before:content-[" "] before:bg-primary-green before:absolute before:w-[10px] before:h-full before:left-0 before:top-0 before:rounded-lg '
              }`}
            >
              <p>{link.icon}</p>
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center justify-center  mb-5">
        <SignedIn>
          <SignOutButton>
            <div className="flex items-center gap-2 cursor-pointer">
              <BiLogOut size="35px" color="#ffff" /> <p className="text-heading4-medium text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
