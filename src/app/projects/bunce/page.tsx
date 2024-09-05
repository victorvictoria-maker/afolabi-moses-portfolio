"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Bunce = () => {
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
            src='/images/bunceLogoSm.png'
            alt='Bunce Logo'
            width={335}
            height={200}
            className='block md:hidden'
          />
          <Image
            src='/images/bunceLogo.png'
            alt='Bunce Logo'
            width={1200}
            height={275}
            className='hidden md:block'
          />
        </div>

        <h1 className='text-2xl font-semibold text-[#1E1414] mt-2 md:mt-4'>
          Bunce
        </h1>
        <div className='md:mt-3 lg:mt-6 space-y-6'>
          <p>
            <Link
              href='https://bunce.so/'
              title='Open bunce.so'
              className='underline'
            >
              Bunce
            </Link>{" "}
            is a 2021-founded customer engagement platform for modern software
            companies. They provide companies with an app to send targeted
            messaging and automation across Emails, SMS, WhatsApp, and In-app
            notifications that lead to retention and revenue growth.
          </p>
          <p>
            As a Product Manager at Bunce, I play a pivotal role in driving the
            company&apos;s growth and innovation. My key responsibilities and
            achievements include:
          </p>
          <ol className='ml-4 list-disc'>
            <li>
              Customer Success and Feedback: Actively contribute to CUSTOMER
              SUCCESS by gathering feedback through USER INTERVIEWS, CALLS, and
              USABILITY TESTING SESSIONS. This has led to increased customer
              satisfaction and a CHURN REDUCTION RATE of 10%.
            </li>
            <li>
              Quality Assurance: Maintain a flawless record of 0% DEFECTS PER
              SPRINT by meticulously testing features individually and
              holistically, ensuring OPTIMAL FUNCTIONALITY and USER EXPERIENCE.
            </li>
            <li>
              Third-Party Integrations: Led the INTEGRATION of over 15
              THIRD-PARTY PAYMENT, DATABASE, and ADVERTISING SOLUTIONS by
              evaluating value propositions, prioritizing against roadmap
              objectives, and empowering the development team. AI Initiative
              Leadership: Leading the company&apos;s initiative to incorporate
              ARTIFICIAL INTELLIGENCE into our products, enhancing overall
              capabilities and customer experience.
            </li>
            <li>
              Marketing Collaboration: Collaborate with the MARKETING TEAM to
              attend EVENTS and engage directly with customers, ensuring we
              touch base with our user base and gather valuable insights.
            </li>
          </ol>
          <div>
            <h4 className='font-bold text-xl'>Skills Acquired</h4>
            <ul className='ml-4 list-disc mt-2'>
              <li>Customer Feedback Analysis</li>
              <li>User Interviews</li>
              <li>Usability Testing</li>
              <li>Customer Satisfaction Improvement</li>
              <li>Market Research</li>
              <li>Competitor Analysis</li>
              <li>Customer Engagement</li>
              <li>Strategic Planning</li>
              <li>Quality Assurance</li>
              <li>Feature Testing</li>
              <li>Defect Management</li>
              <li>User Experience Optimization</li>
              <li>Integration Management</li>
              <li>Value Proposition Evaluation</li>
              <li>Roadmap Prioritization</li> <li>Team Leadership</li>
              <li>Artificial Intelligence Product Management</li>
              <li>Initiative Leadership</li>
              <li>Product Innovation</li>
              <li>Marketing Collaboration</li>
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
          <Link
            href='tasa-africa'
            className=' flex justify-center items-center'
          >
            <button className='bg-[#1E1414] text-white py-3 px-8 rounded-lg mt-4 md:mt-0'>
              Next project
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Bunce;
