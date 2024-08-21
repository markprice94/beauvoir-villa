'use client';

import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';
import useScrollPosition from '@app/utils/scroll-position';
import classNames from 'classnames';
import Link from 'next/link';
import { FacebookIcon } from '../Icons/Facebook';
import { InstagramIcon } from '../Icons/Instagram';
import SocialButtons from '../SocialButtons';

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={classNames(
        scrollPosition < 385
          ? 'bg-transparent border-transparent'
          : 'md:bg-black md:border-white md:border-b',
        'px-8 py-4 flex items-center justify-between w-full',
        'z-50 h-20 duration-1000 transition-all ease-in-out fixed'
      )}
    >
      <Link href="/">
        <Logo className="md:w-24 w-0" />
      </Link>
      <div className="flex gap-x-4 items-center">
        <SocialButtons className="hidden md:flex" />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
