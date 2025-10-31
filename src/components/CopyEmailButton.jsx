import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CopyEmailButton = () => {
  const email = import.meta.env.VITE_EMAIL;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full
     font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden "
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opcaity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img
              src="assets/copy-done.svg"
              className="w-5"
              alt="email copied icon"
            />
            Email Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opcaity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy email icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
