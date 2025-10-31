import React, { useState } from 'react';
import ProjectsDetails from './ProjectsDetails';

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  icons,
  highlights,
  setPreview
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="py-10"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <p className="text-2xl mb-4">{title}</p>
        <div className="flex flex-wrap gap-3 mt-2 mb-6 text-sand">
          {highlights.map((highlight) => (
            <span
              key={highlight.id}
              className="px-3 py-1 rounded-full bg-white/5"
            >
              {highlight.name}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            setIsHidden(true);
          }}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read more
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectsDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          icons={icons}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
