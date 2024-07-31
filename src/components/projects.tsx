import { projects } from "@/app/projects";
import Image from "next/image";
import EachProjectCard from "./eachProjectCard";

const Projects: React.FC = () => {
  return (
    <section className='bg-white py-12'>
      <div className=' mx-auto px-4 sm:px-6 lg:px-20'>
        <div className='flex justify-between items-center mb-4  md:mb-8'>
          <h2 className='text-xl md:text-3xl font-extrabold text-[#1E1414]'>
            Past Works
          </h2>
          {/* <Link href='/' className='underline'>
          See all
        </Link> */}
        </div>
        <div className='grid gap-8 md:grid-cols-2 '>
          {projects.map((eachProject) => {
            return (
              <EachProjectCard key={eachProject.id} eachProject={eachProject} />
            );
          })}
          {/* <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
            <Image
              className='w-full  object-cover rounded-xl'
              src='/images/pastwork1.svg'
              alt='Project 1'
              width={582}
              height={360}
            />
            <div className='p-4 md:p-6'>
              <h3 className='text-2xl font-semibold text-[#1E1414]'>
                Project Name
              </h3>
              <p className='mt-1 text-sm md:text-base text-[#333333]'>
                Brief description of the project
              </p>
            </div>
          </div>
          <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
            <Image
              className='w-full object-cover rounded-xl'
              src='/images/pastwork2.svg'
              alt='Project 2'
              width={582}
              height={360}
            />
            <div className='p-4 md:p-6'>
              <h3 className='text-2xl font-semibold text-[#1E1414]'>
                Project Name
              </h3>
              <p className='mt-1 text-sm md:text-base text-[#333333]'>
                Brief description of the project
              </p>
            </div>
          </div>
          <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
            <Image
              className='w-full  object-cover rounded-xl'
              src='/images/pastwork3.svg'
              alt='Project 3'
              width={582}
              height={360}
            />
            <div className='p-4 md:p-6'>
              <h3 className='text-2xl font-semibold text-[#1E1414]'>
                Project Name
              </h3>
              <p className='mt-1 text-sm md:text-base text-[#333333]'>
                Brief description of the project
              </p>
            </div>
          </div>
          <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
            <Image
              className='w-full object-cover rounded-xl'
              src='/images/pastwork4.svg'
              alt='Project 4'
              width={582}
              height={360}
            />
            <div className='p-4 md:p-6'>
              <h3 className='text-2xl font-semibold text-[#1E1414]'>
                Project Name
              </h3>
              <p className='mt-1 text-sm md:text-base text-[#333333]'>
                Brief description of the project
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
