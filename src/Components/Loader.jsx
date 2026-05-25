import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        return old + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-white
        flex items-center justify-center
      "
    >

      <div className="flex flex-col items-center">

        {/* SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="
            w-24 h-24
            rounded-full
            border-[6px]
            border-[#0A4174]
            border-t-[#FF4F18]
            shadow-[0_0_30px_rgba(10,65,116,0.2)]
          "
        />

        {/* LOGO TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="
            mt-8
            text-4xl
            font-extrabold
            tracking-wide
          "
        >
          <span className="text-[#FF4F18]">
            IQNET
          </span>

          <span className="text-[#0A4174] ml-1">
            SYSTEMS
          </span>
        </motion.h1>

   

        {/* PROGRESS BAR */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="
              h-full
              bg-gradient-to-r
              from-[#FF4F18]
              to-[#0A4174]
            "
          />

        </div>

        {/* PERCENT */}
        <p className="mt-3 text-sm text-gray-600 font-medium">
          {progress}%
        </p>

      </div>

    </div>
  );
}

export default Loader;