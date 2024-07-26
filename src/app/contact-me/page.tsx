import ContactForm from "@/components/contact-form";
import Image from "next/image";

export const metadata = {
  title: "Contact",
};

const Contactpage = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row  md:mt-8 mx-auto py-8 px-6 md:pb-44 lg:pt-20 lg:pb-20'>
      <div className='flex flex-col items-center  md:items-start md:w-1/3 mb-8 md:mb-0 mt-20 md:mt-0'>
        <div className='md:hidden'>
          <Image
            src='/images/logoOnLaptop.svg'
            alt='Logo on laptop'
            width={368}
            height={400}
            className='rounded-2xl'
          />
        </div>
        <div className='hidden md:block'>
          <Image
            src='/images/logoOnLaptop.svg'
            alt='Logo on laptop'
            width={480}
            height={540}
            className='rounded-2xl'
          />
        </div>
      </div>

      <div className='md:w-2/3 md:pl-12 lg:pl-24 md:text-sm lg:text-base text-[#3C2B2B] '>
        <div className=''>
          <h2 className='text-4xl text-left md:text-3xl lg:text-4xl font-bold mb-2 text-[#1E1414]'>
            Get in touch!
          </h2>
          <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#1E1414]'>
            Do you have a product idea, want to discuss a project, or need a
            product manager? Drop me an email!
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contactpage;
