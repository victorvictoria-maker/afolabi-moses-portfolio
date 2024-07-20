import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-white '>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-20'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <Image
                className='h-8 w-auto'
                src='/images/logo2.svg'
                alt='Logo'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className='hidden sm:flex sm:items-center sm:space-x-4'>
            <Link
              href='/'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Twitter
            </Link>
            <Link
              href='/'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Mail
            </Link>
            <Link
              href='/'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              LinkedIn
            </Link>
            <Link
              href='/'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              &copy; Copyright 2024
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
