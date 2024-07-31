"use client";

import { projects } from "@/app/projects";
import Image from "next/image";
import { useParams } from "next/navigation";

const EachProjectFullDetailsPage = () => {
  const params = useParams();
  const { name } = params;

  const project = projects.find((project) => project.slug === name);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className='md:mt-8 mx-auto py-8 px-6 lg:px-20'>
        <Image
          src='/images/moreProjectDetails1.png'
          alt={project.name}
          width={1200}
          height={275}
        />
        <h1 className='text-2xl font-semibold text-[#1E1414] mt-6'>
          {project.name}
        </h1>
        <div className='mt-12 space-y-6'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mauris sagittis tristique
            amet sit velit posuere curabitur venenatis fermentum. Etiam
            consequat nunc id non blandit in enim. Quam tortor placerat massa
            magna gravida laoreet ut. Tellus purus aliquam ut blandit in lectus.
            Morbi ornare eget ac mi vitae orci mattis. Faucibus mauris in
            interdum mauris faucibus nullam vulputate velit. Amet libero proin
            at tristique ac bibendum viverra.
          </p>
          <p>
            Ultrices eu ipsum pharetra nunc diam massa. Quis pharetra phasellus
            dui ultrices. Euismod nam egestas amet nulla lectus duis odio
            scelerisque eu. Pretium massa quam laoreet scelerisque scelerisque
            faucibus ut. Vulputate placerat eleifend massa quam pellentesque
            vitae pellentesque duis. Adipiscing facilisis fermentum sed nullam
            mauris viverra et neque id. Enim aliquet faucibus turpis massa et
            amet ullamcorper sit nunc.
          </p>
          <p>
            Quis tristique ultrices nulla semper libero sed eget non. Justo cras
            magna mattis eget in fusce nibh. Tortor pretium id nisl orci dolor
            quis. Et et at malesuada egestas et sollicitudin dis sit nullam.
            Lobortis scelerisque in a dignissim pretium aliquam. Lacus dolor
            iaculis ultricies duis dis felis feugiat malesuada. In purus
            ullamcorper velit viverra egestas eu congue. Mi urna at orci varius.
            Eget morbi a lectus et bibendum ut tellus placerat.
          </p>
        </div>
      </section>
      <section className='md:mt-2 mx-auto py-2 px-6 lg:px-20'>
        <div className='grid gap-8 md:grid-cols-2  '>
          <Image
            src='/images/moreProjectDetails2.png'
            alt={project.name}
            width={582}
            height={280}
          />
          <div className='space-y-8 py-4'>
            <p>
              Maecenas arcu leo ipsum nullam maecenas et. Quis non sed ipsum est
              lacinia. Donec neque consequat tellus ut euismod id sit risus non.{" "}
            </p>
            <p>
              Vitae at malesuada in neque habitant a euismod vulputate. Nullam
              est pharetra est facilisi. Pulvinar dui curabitur aenean sem.
              Volutpat a ut volutpat vestibulum convallis semper in.
            </p>
            <p>
              Sed tincidunt consequat pharetra est integer lectus. Scelerisque
              lectus eget at sit dictum nulla. Feugiat et nulla nisl sagittis
              tortor penatibus bibendum facilisi netus. Rhoncus sit.
            </p>
          </div>
        </div>
        <div className='mt-10 space-y-6'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mauris sagittis tristique
            amet sit velit posuere curabitur venenatis fermentum. Etiam
            consequat nunc id non blandit in enim.
          </p>
          <p>
            Quam tortor placerat massa magna gravida laoreet ut. Tellus purus
            aliquam ut blandit in lectus. Morbi ornare eget ac mi vitae orci
            mattis. Faucibus mauris in interdum mauris faucibus nullam vulputate
            velit. Amet libero proin at tristique ac bibendum viverra.
          </p>
          <p>
            Ultrices eu ipsum pharetra nunc diam massa. Quis pharetra phasellus
            dui ultrices. Euismod nam egestas amet nulla lectus duis odio
            scelerisque eu. Pretium massa quam laoreet scelerisque scelerisque
            faucibus ut. Vulputate placerat eleifend massa quam pellentesque
            vitae pellentesque duis.
          </p>
          <p>
            Adipiscing facilisis fermentum sed nullam mauris viverra et neque
            id. Enim aliquet faucibus turpis massa et amet ullamcorper sit nunc.
          </p>
          <p>
            Quis tristique ultrices nulla semper libero sed eget non. Justo cras
            magna mattis eget in fusce nibh. Tortor pretium id nisl orci dolor
            quis. Et et at malesuada egestas et sollicitudin dis sit nullam.
            Lobortis scelerisque in a dignissim pretium aliquam. Lacus dolor
            iaculis ultricies duis dis felis feugiat malesuada. In purus
            ullamcorper velit viverra egestas eu congue. Mi urna at orci varius.
            Eget morbi a lectus et bibendum ut tellus placerat.
          </p>
        </div>
        <button className='text-[#6666FF] underline mt-4 md:mt-12 lg:mt-16  mb-20 md:mb-32'>
          Click to view project
        </button>
      </section>
    </>
  );
};

export default EachProjectFullDetailsPage;
