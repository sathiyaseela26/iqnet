import { motion } from "framer-motion";
import { FaTrain, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

function HWD() {
  return (
    <section className="bg-white">

      {/* 🔥 HERO SECTION */}
 <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/bg/hw.webp"
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
      Hot Wheel Detection System
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
            Hot Wheel Detection System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our Wheel Detection System continuously monitors the temperature of railway wheels in real-time
            as trains pass over the trackside detection system.
          </p>

          <p className="text-gray-600 leading-relaxed">
            It identifies abnormal heat generation caused by brake failure, excessive friction, or mechanical faults,
            providing early warning signals to prevent accidents and wheel damage.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The system supports a wide temperature detection range of up to <span className="font-semibold">550°C</span>
            with high precision sensors and IP66 protection for harsh railway environments.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Real-time data is transmitted to control rooms where audio-visual alarms, SMS alerts, and reports
            are generated instantly for operational safety.
          </p>

          {/* 🔥 TEAM POINTS */}
          <div className="space-y-3 pt-2">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Rail Safety Monitoring Engineers</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Infrared Sensor Technology Team</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">IoT-Based Railway Monitoring Team</p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed pt-2">
            IQNET Systems provides reliable wheel monitoring solutions that enhance railway safety,
            reduce failures, and ensure operational efficiency.
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
      src="/services/trainwheel.jpg"
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
            <FaTrain className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Wheel Temperature Monitoring</h4>
            <p className="text-sm text-gray-600 mt-2">
              Continuous tracking of wheel temperature during train movement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">High-Speed Detection</h4>
            <p className="text-sm text-gray-600 mt-2">
              Accurate measurement even for high-speed trains up to 160 kmph.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Instant Safety Alerts</h4>
            <p className="text-sm text-gray-600 mt-2">
              SMS, email, and control room alarms for immediate action.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">
              Historical reporting and trend analysis for maintenance planning.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HWD;