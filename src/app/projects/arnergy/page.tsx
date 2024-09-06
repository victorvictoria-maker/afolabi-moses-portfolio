"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Arnergy = () => {
  const router = useRouter();

  return (
    <>
      <section className='md:mt-8 mx-auto py-8 px-6 lg:px-20 mb-12'>
        <div
          className=' flex gap-3 md:gap-6 justify-center md:text-lg text-[#161627] mb-4 md:mb-8'
          onClick={() => router.back()}
          role='button'
          tabIndex={0}
        >
          <Image
            src='/images/backIcon.svg'
            alt='Go back icon'
            width={8}
            height={12}
          />
          <span>Go back</span>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src='/images/arnergyLogoSm.png'
            alt='Arnergy Logo'
            width={700}
            height={200}
            className='block md:hidden'
          />
          <Image
            src='/images/arnergyLogo.png'
            alt='Arnergy Logo'
            width={1200}
            height={275}
            className='hidden md:block'
          />
        </div>

        <h1 className='text-2xl font-semibold text-[#1E1414] mt-2 md:mt-4'>
          Arnergy
        </h1>
        <div className='md:mt-3 lg:mt-6 space-y-6'>
          <p>
            <Link
              href='https://arnergy.com/'
              target='blank'
              title='Open https://arnergy.com/'
              className='underline'
            >
              Arnergy
            </Link>{" "}
            is a premier Nigerian solar power company dedicated to delivering
            innovative energy solutions for small businesses. Since its
            inception in 2013, Arnergy has earned widespread acclaim for its
            essential contributions to overcoming Nigeria&apos;s energy
            challenges. Headquartered in Lagos, the company is steadfast in its
            mission to empower businesses and communities with clean, reliable
            energy.
          </p>
          <h4 className='font-bold text-xl'>
            Product Analyst Intern | March 2022 - March 2023
          </h4>
          <p>
            As a Product Analyst Intern at Arnergy, I contributed to the
            company&apos;s growth and success by:
          </p>
          <ul className='ml-4 list-disc mt-2'>
            <li>
              Driving Product Development: Conducted in-depth competitor
              analysis and market research to create a customized residential
              product package, resulting in a 30% increase in sales.
            </li>
            <li>
              Enhancing Operational Efficiency: Developed standardized reporting
              formats and automated tools, streamlining data analysis and
              presentation processes, which led to a 90% reduction in reporting
              time and improved data accuracy.
            </li>
          </ul>

          <p>
            I moved on to Arca in March 2023 and made some considerably giant
            strides.
          </p>

          <div>
            <h4 className='font-bold text-xl'>Skills Acquired</h4>
            <ul className='ml-4 list-disc mt-2'>
              <li>Competitor Analysis</li>
              <li>Market Research</li>
              <li>Product Development</li>
              <li>Sales Strategy</li>
              <li>Operational Efficiency Improvement</li>
              <li>Standardized Reporting</li>
              <li>Data Analysis</li>
              <li>Presentation Process Streamlining</li>
              <li>Time Management</li>
              <li>Accuracy Enhancement</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:justify-center md:space-x-10 px-2 mb-4 md:mb-8 mt-24 '>
          <Link href='/'>
            <div className='flex gap-3 md:gap-6 justify-center items-center md:text-lg text-[#161627]  py-3  '>
              <Image
                src='/images/backIcon.svg'
                alt='Go back icon'
                width={8}
                height={12}
              />
              <span>Back to home</span>
            </div>
          </Link>
          <Link href='bunce' className=' flex justify-center items-center'>
            <button className='bg-[#1E1414] text-white py-3 px-8 rounded-lg mt-4 md:mt-0'>
              Next project
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Arnergy;
