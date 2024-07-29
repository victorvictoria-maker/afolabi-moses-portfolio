"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-inherit'>
      <div className=' mx-auto px-2 sm:px-6 lg:px-20'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <Image
                className='h-8 w-auto'
                src='/images/logo.svg'
                alt='Logo'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className='hidden sm:flex sm:items-center sm:space-x-4'>
            <Link
              href='/about'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              About
            </Link>
            <Link
              href='https://drive.google.com/file/d/1wqpHmtS9LHUwgqirmDkuCqsVZbKk7XxY/view?usp=sharing'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Resume
            </Link>
            <Link
              href='https://www.linkedin.com/in/moses-afolabi-productmanager/recent-activity/articles/'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Blog
            </Link>
            <Link
              href='/contact-me'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Contact me
            </Link>
          </div>
          <div className='sm:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg'
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden absolute top-0 right-0 w-full bg-white shadow-lg'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <div className='flex justify-end'>
              <button
                onClick={toggleMenu}
                className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg'
              >
                <FaTimes />
              </button>
            </div>
            <Link
              href='/about'
              className='block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
            >
              About
            </Link>
            <Link
              href='/resume'
              className='block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
            >
              Resume
            </Link>
            <Link
              href='/blog'
              className='block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
            >
              Blog
            </Link>
            <Link
              href='/contact-me'
              className='block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
            >
              Contact me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
