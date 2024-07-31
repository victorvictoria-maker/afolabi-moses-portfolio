import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className='relative bg-[#E7E7E7]  flex flex-col items-center justify-center -mt-16 py-20 -z-10'>
      {/* Background Image */}
      <div className='absolute inset-0 z-2'>
        <Image
          src='/images/heroDotDot.svg'
          width={1400}
          height={350}
          // layout='fill'
          // objectFit='cover'

          alt='Background'
        />
      </div>
      <div className='absolute inset-0 z-20 mt-16 md:mt-10'>
        <Image
          src='/images/Logos.png'
          width={1400}
          height={350}
          // layout='fill'
          // objectFit='cover'

          alt='Background'
        />
      </div>

      {/* Hero Text */}
      <div className='max-w-[920px] relative text-center p-4 z-50'>
        <h1 className='text-4xl md:text-[72px] md:leading-[80px] font-bold relative text-[#1E1414] mb-8'>
          Transforming Ideas into{" "}
          <span className='text-white bg-[#1E1414]'>Products</span> that Matter.
        </h1>
        <p className='text-[#333333] text-lg mb-8'>
          I&apos;m <span className='font-bold'>Moses</span> - a product manager
          passionate about turning ideas into successful products. Data-driven.
          User-focused. Results-oriented.
        </p>
        <div className='flex justify-between md:justify-center md:space-x-10 px-2'>
          <Link href='/contact-me'>
            <button className='bg-[#1E1414] text-white py-3 px-8 rounded-lg'>
              Contact me
            </button>
          </Link>
          <Link href='/projects/project-name-1'>
            <button className='bg-[#CFC9C9] text-[#1E1414]  py-3 px-8 rounded-lg '>
              View my work
            </button>
          </Link>
        </div>
      </div>

      {/* Image below Hero Text */}
      <div
        className='relative px-8 lg:px-20 mt-6'
        style={{ maxWidth: "100%" }}
        // style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Image
          src='/images/maskGroup.svg'
          width={1100}
          height={400}
          sizes='(max-width: 1100px) 100vw, 33vw'
          //  layout='fill'
          // objectFit='contain'
          alt='Image Below Text'
        />
      </div>
    </section>
  );
};

export default Herosection;
