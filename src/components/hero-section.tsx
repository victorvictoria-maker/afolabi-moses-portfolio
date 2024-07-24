import Image from "next/image";

const Herosection = () => {
  return (
    <section className='relative bg-black text-white h-screen flex flex-col items-center justify-center -mt-16 -z-10'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/BG.png'
          layout='fill'
          objectFit='cover'
          alt='Background'
        />
      </div>

      {/* Hero Text */}
      <div className='relative z-10 text-center p-4'>
        <h1 className='text-5xl font-bold relative'>
          Hero Text
          {/* Additional Background Images */}
          {/* <div className='absolute -top-10 -left-10 transform -translate-x-1/2 -translate-y-1/2 z-0'>
            <Image
              src='/images/Group16.png'
              width={200}
              height={200}
              alt='Effect 1'
            />
          </div> */}
          {/* <div className='absolute -bottom-10 -right-10 transform translate-x-1/2 translate-y-1/2 z-0'>
            <Image
              src='/images/Ellipse33.png'
              width={200}
              height={200}
              alt='Effect 2'
            />
          </div> */}
          {/* <div className='absolute top-10 right-20 transform translate-x-1/2 -translate-y-1/2 z-0'>
            <Image
              src='/path/to/background-effect-3.png'
              width={150}
              height={150}
              alt='Effect 3'
            />
          </div>
          <div className='absolute bottom-20 left-20 transform -translate-x-1/2 translate-y-1/2 z-0'>
            <Image
              src='/path/to/background-effect-4.png'
              width={150}
              height={150}
              alt='Effect 4'
            />
          </div> */}
        </h1>
      </div>

      {/* Image below Hero Text */}
      {/* <div className='relative z-10 mt-8'>
        <Image
          src='/images/Logos.png'
          width={400}
          height={400}
          alt='Image Below Text'
        />
      </div> */}
    </section>
  );
};

export default Herosection;
