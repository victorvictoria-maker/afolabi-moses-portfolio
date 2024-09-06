"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Arca = () => {
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
            src='/images/arcaLogoSm.png'
            alt='Arca Logo'
            width={700}
            height={200}
            className='block md:hidden'
          />
          <Image
            src='/images/arcaLogo.png'
            alt='Arca Logo'
            width={1200}
            height={275}
            className='hidden md:block'
          />
        </div>

        <h1 className='text-2xl font-semibold text-[#1E1414] mt-2 md:mt-4'>
          Arca
        </h1>
        <div className='md:mt-3 lg:mt-6 space-y-6 text-justify'>
          <p>
            <Link
              href='https://arca.network/'
              target='blank'
              title='Open https://arca.network/'
              className='underline'
            >
              Arca Payments Company Limited
            </Link>{" "}
            is a leading B2B Nigerian financial technology company specializing
            in providing INNOVATIVE PAYMENT SOLUTIONS for businesses.
            Established to enhance financial transactions, Arca offers a
            comprehensive range of services including:
          </p>
          <ul className='ml-4 list-disc mt-2'>
            <li>
              Retail Payment Solutions: Assisting businesses in accepting
              payments IN-STORE, ONLINE, and ON THE GO.
            </li>
            <li>
              Switching Infrastructure: Facilitating SEAMLESS PAYMENTS between
              banks and other financial institutions.
            </li>
            <li>
              Disbursement Services: Enabling BULK PAYMENTS to multiple
              beneficiaries efficiently.
            </li>
            <li>
              ArcaPay: A robust financial product for merchants to ACCEPT
              ELECTRONIC PAYMENTS.
            </li>
            <li>
              Terminal Management System: Managing POS TERMINALS and merchants
              to ensure smooth operations.
            </li>
          </ul>

          <h4 className='font-bold text-xl'>
            First Business Developer Intern then, Product Manager | March 2023 -
            October 2023
          </h4>
          <div>
            <p>
              During my tenure at Arca, I undertook key responsibilities that
              contributed significantly to the company&apos;s growth and
              success:
            </p>
            <ul className='ml-4 list-disc mt-2'>
              <li>
                Market Research: Identifying POTENTIAL MARKETS and CUSTOMER
                SEGMENTS.
              </li>
              <li>
                Competitive Analysis: Understanding the COMPETITIVE LANDSCAPE
                and identifying new opportunities.
              </li>
              <li>
                Sales Pitching: Effectively COMMUNICATING the company&apos;s
                VALUE PROPOSITION to potential clients.
              </li>
              <li>
                Product/Service Development: Identifying new products or
                services to meet market needs.
              </li>
              <li>
                Client Relationship Management: Building and maintaining STRONG
                RELATIONSHIPS with clients.
              </li>
              <li>
                Revenue Generation: Achieving SALES TARGETS and INCREASING
                REVENUE.
              </li>
            </ul>
          </div>
          <p>
            (Voluntarily took up these responsibilities upon identifying a
            need.)
          </p>
          <p>
            Through managing client relationships, I identified a MAJOR MARKET
            GAP. I took the INITIATIVE to address this gap by persuading the CTO
            to allocate resources to my project. I managed a team comprising a
            Product Designer, a Frontend Developer, and a Backend Developer,
            while personally handling analytics. Despite team members being
            engaged with other projects, I successfully led this initiative with
            the support of a senior designer and interns.
          </p>

          <div>
            <h4 className='font-bold text-xl'>Key Achievements</h4>
            <ul className='ml-4 list-disc mt-2'>
              <li>
                Spearheaded Development of Card Management System (CMS):
                Developed a CMS that streamlined card issuance, account
                management, transaction processing, and reporting
                functionalities. This effort resulted in a 30% REDUCTION IN TIME
                TO MARKET for our clients and a 10% INCREASE IN COMPANY REVENUE
                (equivalent to N5 million).
              </li>
              <li>
                Developed Data Dashboards: Created real-time dashboards using
                Microsoft Excel and Power BI, providing insights into card usage
                patterns and customer behavior, enabling TARGETED MARKETING
                STRATEGIES and IMPROVED CUSTOMER RETENTION.
              </li>
              <li>
                Competitor Analysis and Research: Conducted thorough analysis
                and research, ensuring the company maintained COMPETITIVE
                RELEVANCE and achieved a 100% RETENTION RATE.
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-xl'>Skills Acquired</h4>
            <ul className='ml-4 list-disc mt-2'>
              <li>Market Research</li>
              <li>Identifying Potential Markets and Customer Segments</li>
              <li>Competitive Analysis</li>
              <li>Understanding the Competitive Landscape</li>
              <li>Sales Pitching</li>
              <li>Communicating Value Proposition</li>
              <li>Product/Service Development</li>
              <li>Identifying Market Needs</li>
              <li>Client Relationship Management</li>
              <li>Revenue Generation</li>
              <li>Initiative and Leadership</li>
              <li>Project Management</li>
              <li>Team Management</li>
              <li>Analytical Skills</li>
              <li>Card Management System Development</li>
              <li>Customer Retention Improvement</li>
              <li>Resource Allocation</li>
              <li>
                Collaboration with Product Designer, Frontend Developer, and
                Backend Developer
              </li>
              <li>Stakeholder Alignment</li>
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
          <Link href='arnergy' className=' flex justify-center items-center'>
            <button className='bg-[#1E1414] text-white py-3 px-8 rounded-lg mt-4 md:mt-0'>
              Next project
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Arca;
