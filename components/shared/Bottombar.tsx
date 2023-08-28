'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.path) && link.path.length > 1) || pathname === link.path;

          return (
            <Link
              href={link.path}
              key={link.label}
              className={`bottombar_link ${
                isActive &&
                'before:content-[" "] before:bg-primary-green before:absolute before:w-[10px] before:h-[5px]  before:bottom-0 before:rounded-lg'
              }`}
            >
              {/* <Image
                src={link.imgURL}
                alt={link.label}
                width={16}
                height={16}
                className='object-contain'
              /> */}
              <p>{link.icon}</p>

              <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
