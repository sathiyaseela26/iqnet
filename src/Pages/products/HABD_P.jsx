import { motion } from "framer-motion";

function HABD_P() {
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
        Hot Axle Box Detection
      </motion.h1>

      {/* 🔥 MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <img
            src="/products/HotAxle.jpg"
            alt="HABD"
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

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          <p className="text-xl font-semibold text-[#0A4174]">
            Intelligent thermal monitoring for railway safety
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            The HABD system continuously monitors axle box temperatures
            using advanced infrared sensing technology. It detects abnormal
            heat signatures in real-time, enabling early fault identification
            and preventing catastrophic failures.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Designed for high-speed environments, the system ensures
            reliability, precision, and seamless integration with railway
            infrastructure for enhanced operational safety.
          </p>

        </motion.div>
      </div>

      {/* ================= EXTRA CONTENT ================= */}

      <div className="mt-24 grid md:grid-cols-2 gap-16">

        {/* 🔥 OVERVIEW */}
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
            The Hot Axle Box Detection system plays a critical role in modern railway
            safety infrastructure. By continuously scanning passing trains, it ensures
            that overheating axle components are identified before they lead to major
            mechanical failures.
          </p>

          <p className="text-gray-500 leading-relaxed">
            The system operates in real-time, providing instant alerts and actionable
            insights to operators, reducing downtime and enhancing operational efficiency.
          </p>
        </motion.div>

        {/* 🔥 APPLICATIONS */}
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
            <li>• High-speed railway corridors</li>
            <li>• Freight and heavy haul operations</li>
            <li>• Metro and suburban rail networks</li>
            <li>• Industrial rail monitoring systems</li>
          </ul>

          <p className="text-gray-500 leading-relaxed">
            Its adaptability makes it suitable for a wide range of railway environments,
            ensuring safety across diverse operational conditions.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default HABD_P;