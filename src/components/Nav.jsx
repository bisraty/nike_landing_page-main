import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [MenuHandler, setMenuHandler] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img
            onClick={() => {
              setMenuHandler((pev) => !pev);
            }}
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
          />
          {MenuHandler && (
            <div className='bg-white absolute z-40 right-10 top-20 shadow-md px-4'>
              <ul className='flex flex-col justify-center items-center gap-4 '>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='font-montserrat leading-normal text-lg text-slate-gray'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='gap-2 text-center text-lg text-slate-gray mt-2 leading-normal font-medium font-montserrat  wide:mr-24'>
                <a href='/'>Sign in </a>
                <br />
                <a href='/'>Explore now</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
