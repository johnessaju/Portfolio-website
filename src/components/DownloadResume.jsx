import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DownloadResume = () => {
  const [downloaded, setDownloaded] = useState(false);

  const downloadResume = () => {
    const url = '/assets/Johnes_Saju.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Johnes_Saju.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  };

  return (
    <div className="p-4">
      {/* outer padding for the component */}
      <motion.button
        onClick={downloadResume}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-1 py-4 text-sm text-center rounded-full
       font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden "
      >
        <AnimatePresence mode="wait">
          {downloaded ? (
            <motion.p
              key="downloaded"
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src="/assets/copy-done.svg"
                className="w-5"
                alt="downloaded icon"
              />
              Downloaded
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img src="/assets/copy.svg" className="w-5" alt="download icon" />
              Download Resume
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default DownloadResume;
