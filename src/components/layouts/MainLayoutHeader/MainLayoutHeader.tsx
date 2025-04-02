'use client';

import Logo from '@/assets/images/logo.png';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes.constant';
import { cn } from '@/lib/utils';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export type NavigationItem = {
  label: string;
  href: string;
};

export default function MainLayoutHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      setIsScrolled(window.scrollY > 0);
    }, 10);

    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky left-0 right-0 top-0 z-50 md:py-4">
      <div className="container mx-auto">
        <div
          className={cn(
            'flex h-full items-center justify-between transition-all duration-300 py-4 md:py-2 rounded-lg md:-mx-4 md:px-4',
            isScrolled && 'md:bg-white md:dark:bg-accent',
          )}
        >
          <Link href="/" className="dark:invert">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </Link>
          <DesktopMenu />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <MobileMenu />
            <Link href={ROUTES.SIGN_IN} className="max-md:hidden">
              <Button className="uppercase">LOGIN</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
