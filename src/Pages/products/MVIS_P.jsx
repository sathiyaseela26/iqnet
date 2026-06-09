import { motion } from "framer-motion";

function MVIS_P() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-20 bg-[#f8fafc] text-gray-900">

      {/* 🔥 TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl  font-bold mb-12
          text-[#0A4174]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
        "
      >
        Machine Vision System
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
            src="/products/a.jpg"
            alt="MVIS"
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

         <p className="text-xl font-bold text-[#FF4F18] tracking-wide font-['Poppins']">
            AI-powered visual inspection for intelligent fault detection
          </p>

          <p className="text-gray-700 leading-relaxed ">
            The Machine Vision Inspection System (MVIS) utilizes high-speed
            cameras and advanced AI algorithms to inspect critical railway
            components in real-time. It enables accurate detection of defects
            in wheels, brake systems, and undercarriage components.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By combining image processing with intelligent analytics, the system
            ensures faster decision-making, improved safety, and reduced manual
            inspection efforts.
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
          <h2 className="text-xl font-bold text-[#FF4F18] tracking-wide font-['Poppins']">
            System Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            MVIS is designed to automate the inspection of moving trains using
            high-resolution imaging systems. It captures and analyzes images at
            high speeds, ensuring that even minor defects are identified with
            precision.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The system integrates seamlessly with railway infrastructure,
            providing continuous monitoring and enhancing operational efficiency
            across inspection points.
          </p>
        </motion.div>

        {/* 🔥 APPLICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-xl  font-bold text-[#FF4F18] tracking-wide font-['Poppins']">
            Applications
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Wheel and brake inspection</li>
            <li>• Undercarriage monitoring</li>
            <li>• High-speed train diagnostics</li>
            <li>• Automated defect detection systems</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Its scalable design makes it ideal for deployment across various
            railway environments, ensuring consistent and reliable inspection
            performance.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default MVIS_P;