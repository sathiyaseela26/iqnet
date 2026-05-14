import { motion } from "framer-motion";
import { FaTemperatureHigh, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

function HABD() {
  return (
    <section className="bg-white">

      {/* 🔥 HERO SECTION */}
 
 <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/bg/hab.png"
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
    Hot Axle Box Detection System (HABD)
    </motion.h1>

    <p className="mt-3 text-gray-200">
      High-speed optical inspection system for automated railway defect detection.
    </p>

  </div>

</div>
      {/* 🔥 ABOUT HABD (UPDATED CONTENT) */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6 md:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Hot Axle Box Detection System
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our Hot Axle Box Detectors are designed to ensure safe and efficient railway operations.
            They use cutting-edge temperature sensors to detect and measure axle temperature continuously
            when the train is in motion, providing advance warning of hot axle boxes.
          </p>

          <p className="text-gray-600 leading-relaxed">
            These detectors are suitable for all types of rolling stock, offering a temperature range
            of <span className="font-semibold">0 to 180°C</span>, with a resolution of 
            <span className="font-semibold"> ±2°C</span> and an 
            <span className="font-semibold"> IP66 rating</span> to protect against dust and water ingress.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The software provided by IQNET Systems is flexible and accessible, allowing real-time data
            access through any web browser or mobile device. It generates audio and visual alarms at the
            main console when a hot axle box is detected.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Users can access historical data through archives and download reports, ensuring complete
            monitoring and analysis capabilities.
          </p>

          {/* 🔥 TEAM POINTS (CLEAN STYLE) */}
          <div className="space-y-3 pt-2">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">High Quality Software Engineers</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Hardworking Hardware Teams</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full" style={{ background: "#1e293b" }}></div>
              <p className="text-gray-700">Energised Embedded Team</p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed pt-2">
            Overall, IQNET Systems provides reliable and effective Hot Axle Box Detector solutions
            that ensure maximum safety and operational efficiency.
          </p>

        </motion.div>

   
       {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full flex items-center"
>
  <div className="w-full h-[370px]  overflow-hidden  shadow-xl">
    <img
      src="/services/habd.jpeg"
      alt="MVIS System"
      className="w-full h-full objectc:\Users\Iqnets\Pictures\services\trainwheel.jpg-cover"
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
            <h4 className="font-semibold text-gray-800">Real-Time Monitoring</h4>
            <p className="text-sm text-gray-600 mt-2">
              Continuous temperature tracking of axle bearings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">High-Speed Detection</h4>
            <p className="text-sm text-gray-600 mt-2">
              Accurate sensing even at high train speeds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Safety Alerts</h4>
            <p className="text-sm text-gray-600 mt-2">
              Instant alerts for overheating and faults.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaChartLine className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">
              Intelligent analysis for predictive maintenance.
            </p>
          </div>

        </div>
      </div>

     

    </section>
  );
}

export default HABD;