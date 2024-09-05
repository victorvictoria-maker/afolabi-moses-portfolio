import Herosection from "@/components/hero-section";
import Projects from "@/components/projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Herosection />
      <Projects />
      <section className='bg-[#221919] text-white mx-4 p-8 rounded-xl relative mt-8 mb-16 sm:m-6 lg:m-20 lg:p-24'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-4xl md:text-6xl font-bold mb-4'>
            Ready to chat?
          </p>
          <div className='flex flex-col md:flex-row md:space-x-8 mt-8'>
            <Link href='/contact-me'>
              <button className='bg-white text-[#221919] py-2  px-4 rounded-lg mb-6 md:mb-0 '>
                Contact me
              </button>
            </Link>

            <Link href='https://forms.gle/trbmvfhgodrpg2x37'>
              <button className='text-white border border-white py-2 px-4 rounded-lg mb-4 md:mb-0'>
                Subscribe to newsletter
              </button>
            </Link>
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
