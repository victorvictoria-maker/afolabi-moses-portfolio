import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

const Aboutpage = () => {
  return (
    <main>
      <section className='flex flex-col md:flex-row   md:mt-8 mx-auto py-8 px-6 lg:px-20'>
        <div className='flex flex-col items-center  md:items-start md:w-1/2 mb-8 md:mb-0 '>
          <h2 className='text-4xl text-left md:text-3xl lg:text-4xl font-bold mb-8 md:mb-4 text-[#1E1414]'>
            Some interesting facts about me
          </h2>
          <div className='md:hidden'>
            <Image
              src='/images/MyPicture.jpg'
              alt='Logo on laptop'
              width={368}
              height={400}
              className='rounded-2xl'
            />
          </div>
          <div className='hidden md:block'>
            <Image
              src='/images/MyPicture.jpg'
              alt='Logo on laptop'
              width={468}
              height={520}
              className='rounded-2xl'
            />
          </div>
        </div>

        <div className='md:w-1/2  md:text-sm lg:text-base text-[#3C2B2B] md:pt-24 md:pl-4 lg:pl-0 '>
          <div className='space-y-6 md:space-y-4 lg:space-y-8'>
            {/* <p>
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
            </p> */}

            <p>
              Hi, I&apos;m Moses Afolabi, a Product Manager in Lagos with a
              background in data analysis and a passion for creating innovative
              tech solutions.
            </p>
            <p>
              {" "}
              With a BA in Philosophy and an ongoing PGD in Computer Science, I
              specialize in solving complex challenges and leading AI
              initiatives.{" "}
            </p>
            <p>
              {" "}
              At Bunce, I drive product strategy for a pan-African engagement
              solution, focusing on impactful, ethical innovation.
            </p>
            <p>
              {" "}
              My goal is to become a leader in Ethical AI Product Management,
              combining technical expertise with strong leadership. Outside of
              work, I recharge through travel, gaming, and exploring new
              cuisines.
            </p>
          </div>

          <Link href='https://drive.google.com/file/d/1wqpHmtS9LHUwgqirmDkuCqsVZbKk7XxY/view'>
            <button className='bg-[#1E1414] w-full md:w-auto text-white font-medium px-8 py-3 rounded-lg  mt-8 md:mt-4 lg:mt-8'>
              View My Resume
            </button>
          </Link>
        </div>
      </section>
      <section className='mx-auto py-8 px-6 lg:px-20'>
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
                  alt='Product Strategy Icon'
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
                  alt='RoadMapping Icon'
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
                  alt='Data Analysis Icon'
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
                  alt=' Communication Icon'
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
                  alt='Team Work Icon'
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
                  alt='Problem Solving Icon'
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
                  alt='Conflict Resolution Icon'
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
                  alt='Cross Functional Collaboration Icon'
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
                  alt='Figma Icon'
                  width={16}
                  height={14}
                />
                <span className='text-lg md:text-base lg:text-lg'>Figma</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/jiraIcon.svg'
                  alt='Jira Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>Jira</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/linearIcon.svg'
                  alt='Linear Icon'
                  width={16}
                  height={16}
                />
                <span className='text-lg md:text-base lg:text-lg'>Linear</span>
              </li>
              <li className='flex space-x-2'>
                <Image
                  src='/images/whimsicalIcon.svg'
                  alt='Whimsical Icon'
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
                  alt='Google Sheets Icon'
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
      </section>
    </main>
  );
};

export default Aboutpage;
