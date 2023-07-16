'use client';

import { useState } from 'react';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSpring, animated, useTransition } from '@react-spring/web';

import { Routes } from '@/src/utils/enums/routes';
import { Logo } from '@/src/components/Logo/Logo';
import { navLinks } from '@/src/utils/fixtures/navLinks';
import { mobileMenuAnimation } from '@/src/utils/animations/mobileMenu';

export const MobileMenu = () => {
  const t = useTranslations('Header');
  const [isVisible, setIsVisible] = useState(false);
  const [spring] = useSpring(() => mobileMenuAnimation(isVisible), [isVisible]);

  return (
    <div className="">
      <button
        className="p-2 rounded-md text-gray-400 hover:bg-base-200 transition-all focus:ring-2 focus:ring-primary"
        onClick={() => setIsVisible(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <animated.div
        className="fixed inset-0 max-w-full bg-base-100 h-fit m-2 rounded-md ring-1 ring-gray-300 z-[1]"
        style={spring}
      >
        {/* Upper Section */}
        <div className="px-5 pt-5 pb-6 space-y-6">
          <div className="flex justify-between items-center">
            <Link href={Routes.Home}>
              <Logo className="text-neutral h-6" />
            </Link>
            <button
              className="-mr-2 text-gray-400 hover:bg-base-200 p-2 rounded-md focus:ring-2 focus:ring-primary transition-all"
              onClick={() => setIsVisible(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {navLinks.map(({ key, link, icon: Icon }) => (
            <Link href={link} className="flex items-center space-x-3" key={key}>
              <span className="w-6 h-6 text-accent">
                <Icon />
              </span>
              <span className="text-neutral">{t(key)}</span>
            </Link>
          ))}
        </div>
        <div className="divider my-0" />
        {/* Lower Section */}
        <div className="px-5 py-6 space-y-6"></div>
      </animated.div>
    </div>
  );
};
