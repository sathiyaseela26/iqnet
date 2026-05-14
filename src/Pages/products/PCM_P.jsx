import { motion } from "framer-motion";

function PCM_P() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-20 bg-[#f8fafc] text-gray-900">

      {/* 🔥 TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl md:text-5xl font-extrabold mb-12
          text-[#0A4174]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
        "
      >
        Passage Control Module
      </motion.h1>

      {/* 🔥 MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* 🖼 IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <img
            src="/products/pcm.png"
            alt="PCM"
            className="
              rounded-2xl
              shadow-[0_15px_40px_rgba(0,0,0,0.15)]
              group-hover:scale-[1.03]
              transition duration-500
            "
          />

          <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-tr from-blue-500/10 to-indigo-500/10
            opacity-0 group-hover:opacity-100
            transition duration-500
          "></div>
        </motion.div>

        {/* 📝 CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          <p className="text-xl font-semibold text-[#0A4174]">
            Automated control system for efficient train passage monitoring
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            The Passage Control Module (PCM) ensures accurate tracking and
            management of train movements across monitoring points. It integrates
            advanced sensing mechanisms with real-time processing to deliver
            precise and reliable data.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Designed for seamless integration with railway systems, PCM enhances
            operational efficiency while maintaining high safety standards
            in dynamic environments.
          </p>

        </motion.div>

      </div>

      {/* 🔥 EXTRA CONTENT */}
      <div className="mt-24 grid md:grid-cols-2 gap-16">

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A4174]">
            System Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            PCM acts as a central monitoring unit that tracks train passage
            events with high precision. It ensures synchronization between
            multiple subsystems and provides real-time updates for better control.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Its robust architecture allows deployment in complex railway
            environments, ensuring uninterrupted performance and data accuracy.
          </p>
        </motion.div>

        {/* APPLICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A4174]">
            Applications
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Train passage monitoring systems</li>
            <li>• Railway signaling integration</li>
            <li>• Real-time tracking solutions</li>
            <li>• Infrastructure safety systems</li>
          </ul>

          <p className="text-gray-500 leading-relaxed">
            The system is adaptable for multiple railway use cases, ensuring
            efficient monitoring and improved operational workflows.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default PCM_P;