import React from "react";
import { AnimatePresence, motion } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingOverlay = ({ isLoading, delay }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay }}
          className=" absolute top-0 left-0 bottom-0 right-0 w-full flex items-center justify-center bg-white z-10 border border-black/20"
        >
          <ClipLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
