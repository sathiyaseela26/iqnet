
import { motion } from "framer-motion";
import { FaTemperatureHigh, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

function RTME() {
  return (
    <section className="bg-white">

      {/* 🔥 HERO SECTION */}
       <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/bg/rtme.webp"
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
    Rail Temperature Measuring Equipment
    </motion.h1>

    <p className="mt-3 text-gray-200">
      High-speed optical inspection system for automated railway defect detection.
    </p>

  </div>

</div>

      {/* 🔥 ABOUT SECTION */}
    <div className="grid md:grid-cols-2 gap-12 items-start py-20 px-6 md:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          
          <p className="text-gray-600 leading-relaxed">
            Our Rail Temperature Measuring Equipment is designed to continuously monitor rail track temperature
            in real-time, ensuring safe railway operations under all environmental conditions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The system detects abnormal temperature rise in rails caused by heavy load, friction, or weather
            conditions and provides early warnings to prevent rail deformation or accidents.
          </p>

          <p className="text-gray-600 leading-relaxed">
            It supports high-accuracy sensors with industrial-grade protection, ensuring reliable performance
            even in extreme outdoor environments.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Data can be accessed remotely through web and mobile dashboards, enabling real-time monitoring,
            alerts, and historical analysis.
          </p>

          {/* 🔥 TEAM POINTS */}
          <div className="space-y-3 pt-2">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Rail Safety Engineering Experts</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Embedded Sensor Development Team</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Real-Time Monitoring & IoT Team</p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed pt-2">
            IQNET Systems delivers reliable rail monitoring solutions that enhance safety,
            efficiency, and operational reliability.
          </p>

        </motion.div>

        {/* RIGHT IMAGE PLACEHOLDER */}
    <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full"
>
 <div className="w-full h-[220px] sm:h-[280px] md:h-[370px] overflow-hidden rounded-2xl shadow-xl">
    <img
      src="/services/rtme.jpg"
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
            <FaTemperatureHigh className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Real-Time Temperature Tracking</h4>
            <p className="text-sm text-gray-600 mt-2">
              Continuous monitoring of rail temperature with high precision sensors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Smart Detection System</h4>
            <p className="text-sm text-gray-600 mt-2">
              Detects abnormal heat changes caused by friction and load stress.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Safety Alerts</h4>
            <p className="text-sm text-gray-600 mt-2">
              Instant notifications for overheating and risk conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">
              Historical analysis for predictive maintenance and safety planning.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default RTME;