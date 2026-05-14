import { motion } from "framer-motion";

function WLM_P() {
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
        Water Level Monitoring System
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
            src="/products/wlm.png"
            alt="WLM"
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
            Real-time monitoring for flood risk prevention
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            The Water Level Monitoring System continuously tracks water levels
            across critical railway infrastructure such as bridges, tunnels,
            and track zones. It enables early detection of abnormal water rise
            conditions to prevent operational disruptions.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Using advanced sensing technology and real-time analytics, the system
            provides accurate insights and alerts, helping railway authorities
            take proactive decisions and maintain safety standards.
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
            The WLM system is engineered to monitor water levels in real-time
            using high-precision sensors deployed across vulnerable railway
            zones. It ensures continuous tracking and data acquisition even in
            extreme weather conditions.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Integrated with centralized monitoring systems, it provides instant
            alerts and actionable insights to prevent flooding risks and
            infrastructure damage.
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
            <li>• Bridge water level monitoring</li>
            <li>• Tunnel flood detection</li>
            <li>• Track-side water logging alerts</li>
            <li>• Rainfall and drainage monitoring systems</li>
          </ul>

          <p className="text-gray-500 leading-relaxed">
            Its scalable architecture makes it suitable for deployment across
            multiple railway zones, ensuring reliable performance and safety.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default WLM_P;