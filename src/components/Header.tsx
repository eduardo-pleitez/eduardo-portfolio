import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav className='bg-black border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center md:text-3xl text-lg font-semibold whitespace-nowrap text-white'>
            Eduardo Mejia Portfolio
          </span>
        </Link>
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? 'block' : 'hidden'
          } w-full md:block md:w-auto md:text-xl text-sm`}
          id='navbar-default'
        >
          <ul className='flex flex-col p-4 mt-4 bg-black md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0'>
            <li>
              <Link
                to='/'
                className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/projects'
                className='block py-2 pr-4 pl-3 text-white rounded md:border-0 md:p-0'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='block py-2 pr-4 pl-3 text-white rounded md:border-0 md:p-0'
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;