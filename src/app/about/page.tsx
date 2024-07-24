import Image from "next/image";

export const metadata = {
  title: "About",
};

const Aboutpage = () => {
  return (
    <main>
      <section className='flex flex-col md:flex-row   md:mt-8 mx-auto py-8 px-6 lg:px-20'>
        <div className='flex flex-col items-center  md:items-start md:w-1/3 mb-8 md:mb-0'>
          <h2 className='text-4xl text-center md:text-left md:text-3xl lg:text-4xl font-bold mb-4'>
            Some interesting facts about me -
          </h2>
          <Image
            src='/images/logoOnLaptop.svg'
            alt='Logo on laptop'
            width={468}
            height={520}
            className='rounded-2xl'
          />
        </div>

        <div className='md:w-2/3 md:pl-12 lg:pl-28 md:text-sm lg:text-base text-[#3C2B2B] md:pt-2 lg:pt-24'>
          <div className='space-y-2 md:space-y-4 lg:space-y-8'>
            <p>
              Ability to put themselves in the merchant&apos;s shoes. It is
              meant to partner on the long run, and work as an extension of the
              merchant&apos;s team.
            </p>

            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>

            <p>
              Ability to put themselves in the merchant&apos;s shoes. It is
              meant to partner on the long run, and work as an extension of the
              merchant&apos;s team.
            </p>

            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>

          <button className='bg-[#1E1414] text-white font-medium px-8 py-3 rounded-lg  mt-8 md:mt-4 lg:mt-16'>
            View My Resume
          </button>
        </div>
      </section>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <hr className='mb-0.5' />
        <hr className='mb-10' />
        <div className='grid  md:grid-cols-12 gap-8 md:gap-4'>
          <div className='col-span-4 md:col-span-1 '>
            <p className='text-2xl md:text-base lg:text-xl text-[#1E1414] font-bold'>
              Skills
            </p>
          </div>

          <div className='col-span-3 '>
            <h4 className='text-[#685B5B] text-sm font-semibold'>Technical</h4>
            <ul className='mt-4 space-y-3'>
              <li className='flex space-x-2'>
                <Image
                  src='/images/researchIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={14}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  User Research
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/productStrategyIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Product Strategy
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/roadMappingIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  RoadMapping
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/dataAnalysisIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Data Analysis
                </span>
              </li>
            </ul>
          </div>

          <div className='col-span-4  '>
            <h4 className='text-[#685B5B] text-sm font-semibold'>Soft</h4>
            <ul className='mt-4 space-y-3'>
              <li className='flex space-x-2'>
                <Image
                  src='/images/communicationIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={14}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Communication
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/teamWorkIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Team Work
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/problemSolvingIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Problem Solving
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/conflictResolutionIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Conflict Resolution
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/crossFunctionalIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Cross Functional Collaboration
                </span>
              </li>
            </ul>
          </div>

          <div className='col-span-3 '>
            <h4 className='text-[#685B5B] text-sm font-semibold'>Tools</h4>
            <ul className='mt-4 space-y-3'>
              <li className='flex space-x-2'>
                <Image
                  src='/images/figmaIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={14}
                />
                <span className='text-lg md:text-base lg:text-lg'>Figma</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/jiraIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>Jira</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/linearIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>Linear</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/whimsicalIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Whimsical
                </span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/googleSheetIcon.svg'
                  alt='Research Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>
                  Google Sheets
                </span>
              </li>
            </ul>
          </div>

          <div className='col-span-1 '></div>
        </div>
        <hr className='mt-10' />
        <hr className='mt-0.5 mb-20 md:mb-60' />
      </div>
    </main>
  );
};

export default Aboutpage;
