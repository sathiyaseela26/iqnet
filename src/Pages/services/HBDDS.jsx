import { motion } from "framer-motion";
import { FaCog, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

function HBDDS() {
  return (
    <section className="bg-white">

      {/* 🔥 HERO SECTION */}
   <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/bg/hwd.png"
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
     Hot Brake Disk Detection System
    </motion.h1>

    <p className="mt-3 text-gray-200">
      High-speed optical inspection system for automated railway defect detection.
    </p>

  </div>

</div>
      {/* 🔥 ABOUT SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6 md:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Brake Disc Monitoring System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The Hot Brake Disk Detection System is designed to continuously monitor the temperature of
            railway brake discs during train movement using high-precision infrared sensor technology.
          </p>

          <p className="text-gray-600 leading-relaxed">
            It provides early detection of overheating caused by braking friction, brake binding, or mechanical faults,
            helping prevent fire hazards and brake failure incidents.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The system supports a temperature range of up to <span className="font-semibold">0 to 250°C</span>,
            with high accuracy measurement and IP66 protection for harsh railway environments.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Real-time data is transmitted to control centers where audio-visual alarms, SMS alerts,
            and automated reports are generated instantly for operational safety.
          </p>

          {/* 🔥 TEAM POINTS */}
          <div className="space-y-3 pt-2">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Rail Safety & Monitoring Engineers</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Infrared Thermal Detection Team</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">IoT Railway Safety Integration Team</p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed pt-2">
            IQNET Systems delivers advanced brake disc monitoring solutions that enhance safety,
            reduce operational risks, and improve railway reliability.
          </p>

        </motion.div>

        {/* RIGHT IMAGE PLACEHOLDER */}
   <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full flex items-center"
>
  <div className="w-full h-[370px]  overflow-hidden  shadow-xl">
    <img
      src="/services/HotAxle.jpg"
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
            <FaCog className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Brake Disc Temperature Monitoring</h4>
            <p className="text-sm text-gray-600 mt-2">
              Continuous monitoring of brake disc heat during train operation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">High-Speed Detection</h4>
            <p className="text-sm text-gray-600 mt-2">
              Accurate readings even at high train speeds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Overheat Safety Alerts</h4>
            <p className="text-sm text-gray-600 mt-2">
              Instant alerts for overheating and brake failure risks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Reporting</h4>
            <p className="text-sm text-gray-600 mt-2">
              Historical data analysis for maintenance and safety planning.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HBDDS;