import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-white pb-6 md:pb-0'>
      <div className='mx-auto px-2 sm:px-6 lg:px-20'>
        <div className='flex flex-col md:flex-row justify-between md:h-16'>
          <div className='flex-shrink-0 flex justify-center mb-6 md:mb-0 md:justify-normal items-center'>
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
          <div className='flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-4'>
            <Link
              href='https://x.com/brotherDeolu'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Twitter
            </Link>
            <Link
              href='mailto:hello@mosesafolabi.com'
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Mail
            </Link>
            <Link
              href='https://www.linkedin.com/in/moses-afolabi-productmanager/'
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
