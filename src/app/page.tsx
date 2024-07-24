import Herosection from "@/components/hero-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Herosection /> */}
      <section className='bg-white py-12'>
        <div className=' mx-auto px-4 sm:px-6 lg:px-20'>
          <div className='flex justify-between items-center mb-4  md:mb-8'>
            <h2 className='text-xl md:text-3xl font-extrabold text-[#1E1414]'>
              Past Works
            </h2>
            {/* <Link href='/' className='underline'>
              See all
            </Link> */}
          </div>
          <div className='grid gap-8 md:grid-cols-2 '>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full  object-cover rounded-xl'
                src='/images/pastwork1.svg'
                alt='Project 1'
                width={582}
                height={360}
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-2xl font-semibold text-[#1E1414]'>
                  Project Name
                </h3>
                <p className='mt-1 text-sm md:text-base text-[#333333]'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full object-cover rounded-xl'
                src='/images/pastwork2.svg'
                alt='Project 2'
                width={582}
                height={360}
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-2xl font-semibold text-[#1E1414]'>
                  Project Name
                </h3>
                <p className='mt-1 text-sm md:text-base text-[#333333]'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full  object-cover rounded-xl'
                src='/images/pastwork3.svg'
                alt='Project 3'
                width={582}
                height={360}
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-2xl font-semibold text-[#1E1414]'>
                  Project Name
                </h3>
                <p className='mt-1 text-sm md:text-base text-[#333333]'>
                  Brief description of the project
                </p>
              </div>
            </div>
            <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
              <Image
                className='w-full object-cover rounded-xl'
                src='/images/pastwork4.svg'
                alt='Project 4'
                width={582}
                height={360}
              />
              <div className='p-4 md:p-6'>
                <h3 className='text-2xl font-semibold text-[#1E1414]'>
                  Project Name
                </h3>
                <p className='mt-1 text-sm md:text-base text-[#333333]'>
                  Brief description of the project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#221919] text-white mx-4 p-8 rounded-xl relative mt-8 mb-16 sm:m-6 lg:m-20 lg:p-24'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-4xl md:text-6xl font-bold mb-4'>
            Ready to chat?
          </p>
          <div className='flex flex-col md:flex-row md:space-x-8 mt-8'>
            <button className='bg-white text-[#221919] py-2  px-4 rounded-lg mb-6 md:mb-0 '>
              Contact me
            </button>
            <button className='text-white border border-white py-2 px-4 rounded-lg mb-4 md:mb-0'>
              Subscribe to newsletter
            </button>
          </div>
        </div>

        <div className='md:hidden'>
          <Image
            src='/images/logo3.svg'
            alt='Logo'
            className='absolute bottom-0 right-0 '
            width={40}
            height={22}
            // style={{ width: "fit", height: "fit" }}
          />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Image
            src='/images/logo3.svg'
            alt='Logo'
            className='absolute bottom-0 right-0 '
            width={100}
            height={72}
            // style={{ width: "fit", height: "fit" }}
          />
        </div>
        <div className='hidden lg:block'>
          <Image
            src='/images/logo3.svg'
            alt='Logo'
            className='absolute bottom-0 right-0 '
            width={200}
            height={114}
            // style={{ width: "fit", height: "fit" }}
          />
        </div>
      </section>
    </>
  );
}
