import { motion } from "framer-motion";

function PID() {
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
        Passenger Information Display
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
            src="/products/pid.jpg"
            alt="PID"
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
            Real-time visual communication for passengers
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            The Passenger Information Display (PID) system provides real-time
            visual updates including train schedules, platform numbers, and
            service alerts. It enhances passenger awareness and ensures smooth
            navigation within railway stations.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Designed with high-brightness displays and intelligent control
            systems, PID ensures clear visibility and reliable performance in
            both indoor and outdoor environments.
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
            The PID system integrates digital display boards with centralized
            control software to provide synchronized real-time information
            across multiple locations within railway stations.
          </p>

          <p className="text-gray-500 leading-relaxed">
            It supports dynamic content updates, ensuring passengers receive
            accurate and timely information regarding train movements and
            service changes.
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
            <li>• Platform display boards</li>
            <li>• Arrival and departure displays</li>
            <li>• Station information systems</li>
            <li>• Emergency alert displays</li>
          </ul>

          <p className="text-gray-500 leading-relaxed">
            The PID system improves passenger experience by ensuring seamless,
            accurate, and real-time communication throughout railway networks.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default PID;