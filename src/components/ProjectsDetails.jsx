import { motion } from 'framer-motion';

const ProjectsDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  icons,
  closeModal
}) => {
  return (
    // <div
    //   className="fixed inset-0 z-50 flex items-center
    // justify-center w-full h-full overflow-hidden backdrop-blur-sm  p-2 sm:p-6"
    // >
    <div
      className="fixed inset-0 z-50 flex items-start
    justify-center w-full h-full overflow-y-auto backdrop-blur-sm p-4"
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl
        bg-gradient-to-l from-midnight to-navy border-white/10 my-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 
            bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              ✅ {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {icons.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium hover-animation"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4"
                  alt="open project"
                />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 font-medium text-neutral-400">
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4"
                  alt="no link"
                />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsDetails;
