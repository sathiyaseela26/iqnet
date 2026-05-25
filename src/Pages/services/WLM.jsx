import { motion } from "framer-motion";
import { FaWater, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

function WLM() {
  return (
    <section className="bg-white">

      {/* 🔥 HERO SECTION */}
      <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/bg/water.webp"
    alt="MVIS System"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* 🔥 OVERLAY */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 🔥 CONTENT */}
  <div className="relative z-10 text-white max-w-3xl mx-auto">

    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold"
    >
Waterlevel Monitoring System
    </motion.h1>

    <p className="mt-3 text-gray-200">
      High-speed optical inspection system for automated railway defect detection.
    </p>

  </div>

</div>
      {/* 🔥 ABOUT WLM */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6 md:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Water Level Monitoring System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our Water Level Monitoring System is designed to continuously measure and monitor water levels
            in tanks, reservoirs, and industrial storage units using high-precision sensor technology.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The system ensures accurate real-time data collection, helping prevent overflow situations,
            dry-run conditions, and inefficient water usage through smart alerts and automation.
          </p>

          <p className="text-gray-600 leading-relaxed">
            It supports remote access via web and mobile applications, allowing users to monitor live
            water levels anytime, anywhere with secure connectivity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Historical data logging and reporting features help in analyzing water consumption patterns
            and improving resource management efficiency.
          </p>

          {/* 🔥 TEAM POINTS */}
          <div className="space-y-3 pt-2">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">High Precision Sensor Integration Team</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Real-Time Data Monitoring Experts</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">IoT & Cloud Engineering Team</p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed pt-2">
            IQNET Systems delivers reliable water monitoring solutions that improve efficiency,
            safety, and sustainable resource management.
          </p>

        </motion.div>

        {/* RIGHT IMAGE PLACEHOLDER */}
   <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full flex items-center"
>
  <div className="w-full   overflow-hidden  shadow-xl">
    <img
      src="/services/wlm.webp"
      alt="MVIS System"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
      </div>

      {/* 🔥 FEATURES */}
      <div className="py-20 px-6 md:px-20 bg-gray-50">

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaWater className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Real-Time Monitoring</h4>
            <p className="text-sm text-gray-600 mt-2">
              Continuous tracking of water levels with high accuracy sensors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Automated Pump Control</h4>
            <p className="text-sm text-gray-600 mt-2">
              Smart control system to manage water filling and stopping automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Overflow & Dry Run Protection</h4>
            <p className="text-sm text-gray-600 mt-2">
              Prevents overflow and pump dry-run with instant alerts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">
              Intelligent reporting and water usage analysis for optimization.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default WLM;