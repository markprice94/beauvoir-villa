import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@app/components/Logo/Logo';
import { Hamburger } from './Hamburger';
import classNames from 'classnames';

const navbarItems = [
  { slug: '/', label: 'Home' },
  { slug: '/#about', label: 'About' },
  { slug: '/rooms', label: 'Rooms' },
  { slug: '/attractions', label: 'Things to do' },
  { slug: '/availability', label: 'Availability' },
  { slug: '/contact', label: 'Contact' },
];

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown]
  );

  const router = useRouter();
  const handleMenuItemClick = (slug: string) => {
    setIsMenuShown(false);
    router.push(slug);
  };
  return (
    <>
      <Hamburger showMenu={isMenuShown} handleToggle={toggleOpen} />
      <nav
        onMouseLeave={() => setIsMenuShown(false)}
        className={classNames(
          isMenuShown ? 'opacity-100' : 'opacity-0',
          'max-md:h-screen z-60 right-0 top-0 md:top-4 md:right-8 absolute',
          'pr-8 pl-6 pb-8 pt-10',
          'bg-black md:rounded-md transition-opacity duration-500'
        )}
      >
        <ul className="flex flex-col items-center md:items-start gap-8 max-sm:pt-8">
          {navbarItems.map(({ slug, label }) => (
            <li key={slug} className="relative">
              <button
                className={classNames(
                  pathname === slug && 'underline',
                  'btn-main'
                )}
                onClick={() => handleMenuItemClick(slug)}
              >
                {label}
              </button>
            </li>
          ))}
          <Logo className="block md:hidden w-1/2 h-1/2 mt-8 mix-blend-difference" />
        </ul>
      </nav>
    </>
  );
}
