import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-white '>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-20'>
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
              href='/resume'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Resume
            </Link>
            <Link
              href='/blog'
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
