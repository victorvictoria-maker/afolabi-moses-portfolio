import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>HERO SECTION</section>
      <section className='bg-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-20'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Past Works
            </h2>
            <Link href='/' className='underline'>
              See all
            </Link>
          </div>
          <div className='grid gap-8 md:grid-cols-2 '>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full  object-cover rounded-xl'
                src='/images/pastwork1.svg'
                alt='Project 1'
                width={100}
                height={100}
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Project Name
                </h3>
                <p className='mt-2 text-gray-600'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full object-cover rounded-xl'
                src='/images/pastwork2.svg'
                alt='Project 2'
                width={100}
                height={100}
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Project Name
                </h3>
                <p className='mt-2 text-gray-600'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full  object-cover rounded-xl'
                src='/images/pastwork3.svg'
                alt='Project 3'
                width={100}
                height={100}
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Project Name
                </h3>
                <p className='mt-2 text-gray-600'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full object-cover rounded-xl'
                src='/images/pastwork4.svg'
                alt='Project 4'
                width={100}
                height={100}
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Project Name
                </h3>
                <p className='mt-2 text-gray-600'>
                  Brief description of the project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#221919] text-white p-8 rounded-xl relative mt-8 sm:m-6 lg:m-20 sm:p-6 lg:p-24'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-6xl mb-4'>Ready to chat?</p>
          <div className='flex space-x-8 mt-8'>
            <button className='bg-white text-[#221919] py-2 px-4 rounded-lg'>
              Contact me
            </button>
            <button className='text-white border border-white py-2 px-4 rounded-lg'>
              Subscribe to newsletter
            </button>
          </div>
        </div>
        <Image
          src='/images/logo3.svg'
          alt='Logo'
          className='absolute bottom-0 right-0 '
          width={200}
          height={114}
        />
      </section>
    </>
  );
}
