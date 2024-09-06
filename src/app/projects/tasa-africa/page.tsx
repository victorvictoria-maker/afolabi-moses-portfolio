"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TasaAfrica = () => {
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
            src='/images/tasaLogoSm.png'
            alt='Tasa Logo'
            width={700}
            height={200}
            className='block md:hidden'
          />
          <Image
            src='/images/tasaLogo.png'
            alt='Tasa Logo'
            width={1700}
            height={275}
            className='hidden md:block'
          />
        </div>

        <h1 className='text-2xl font-semibold text-[#1E1414] mt-2 md:mt-4'>
          Tasa
        </h1>
        <div className='md:mt-3 lg:mt-6 space-y-6 text-justify'>
          <p>
            <Link
              href='https://www.tasafrica.com/'
              target='blank'
              title='Open www.tasafrica.com'
              className='underline'
            >
              Total Athlete Sportal Africa (TASAfrica)
            </Link>{" "}
            is a groundbreaking platform designed to revolutionize the way
            sports talent is discovered, nurtured, and developed in Africa.
            Their key features and goals include:
          </p>
          <ul className='ml-4 list-disc'>
            <li>
              Talent Identification: TASA aims to identify young, promising
              athletes across various sports disciplines.
            </li>
            <li>
              Development Programs: The platform offers training, coaching, and
              mentorship programs to help athletes reach their full potential.
            </li>
            <li>
              Networking Opportunities: TASA connects athletes with coaches,
              agents, and clubs, facilitating their career progression.
            </li>
            <li>
              Data-Driven Approach: Using analytics, TASA identifies trends and
              patterns in athlete performance to optimize development
              strategies.
            </li>
          </ul>
          <p>
            By creating a comprehensive ecosystem for sports talent, TASA seeks
            to contribute to the growth of African sports and produce
            world-class athletes.
          </p>
          <p>
            As the only product manager in TASA since November 2023, I have been
            involved in:
          </p>
          <ul className='ml-4 list-disc'>
            <li>
              Project Leadership: Spearheading product management efforts,
              leading a cross-functional team to deliver high-impact projects
              that drive user engagement and retention.
            </li>
            <li>
              Churn Reduction: Constantly leading successful initiatives to keep
              churn at the bare minimum (less than 10%) through targeted
              initiatives, including user interviews, calls, and usability
              testing sessions to gather and act on feedback.
            </li>

            <li>
              UX Research & Design Collaboration: Conduct comprehensive UX
              research and collaborate closely with designers to enhance user
              experience and interface design, significantly improving user
              satisfaction.
            </li>

            <li>
              Quality Assurance: Maintain thorough and rigorous testing
              protocols, to achieve a 98% defect-free rate per sprint, ensuring
              optimal product performance.
            </li>
            <li>
              Marketing Initiatives: Lead marketing campaigns, to drive an
              increase in user acquisition and engagement across key
              demographics.
            </li>
            <li>
              Stakeholder Management: Manage key stakeholders, including users
              and management, ensuring alignment of product vision and
              objectives.
            </li>
            <li>
              Third-Party Integrations: Lead third-party integrations in the
              areas of performance tracking and identity verification.
            </li>
          </ul>
          <div>
            <h4 className='font-bold text-xl'>Skills Acquired</h4>
            <ul className='ml-4 list-disc mt-2'>
              <li>Product Management</li>
              <li>Project Leadership</li>
              <li>User Experience (UX) Research</li>
              <li>Marketing Strategy</li>
              <li>Stakeholder Management</li>
              <li>Quality Assurance</li>
              <li>Third-Party Integrations</li>
              <li>Data Analysis</li>
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
          <Link href='arca' className=' flex justify-center items-center'>
            <button className='bg-[#1E1414] text-white py-3 px-8 rounded-lg mt-4 md:mt-0'>
              Next project
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TasaAfrica;
