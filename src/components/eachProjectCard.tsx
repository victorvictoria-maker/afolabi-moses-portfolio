import { EachProjectCardProps } from "@/app/projects";
import Image from "next/image";
import Link from "next/link";

const EachProjectCard: React.FC<EachProjectCardProps> = ({ eachProject }) => {
  const { name, src, briefDescription, slug } = eachProject;
  return (
    <div className='bg-gray-100 rounded-xl shadow-sm overflow-hidden'>
      <Image
        className='w-full  object-cover rounded-xl'
        src={src}
        alt={name}
        width={582}
        height={360}
      />
      <div className='p-4 md:p-6'>
        <h3 className='text-2xl font-semibold text-[#1E1414]'>{name}</h3>
        <p className='mt-1 text-sm md:text-base text-[#333333] h-fit md:h-24 lg:h-12 '>
          {briefDescription}
        </p>
        <Link href={`/projects/${slug}`}>
          <button className='text-sm underline'>See more</button>
        </Link>
      </div>
    </div>
  );
};

export default EachProjectCard;
