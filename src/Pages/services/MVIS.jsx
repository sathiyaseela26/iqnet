import { motion } from "framer-motion";
import { FaCamera, FaCogs, FaShieldAlt, FaDatabase } from "react-icons/fa";

function MVIS() {
  return (
    <section className="bg-white">

  <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="/images/mvis.jpg"
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
      Machine Vision System (MVIS)
    </motion.h1>

    <p className="mt-3 text-gray-200">
      High-speed optical inspection system for automated railway defect detection.
    </p>

  </div>

</div>

      {/* 🔥 MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-start py-20 px-6 md:px-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Machine Vision System is a high-speed optical solution designed to
            automatically capture images of moving trains and detect rolling stock defects.
            It ensures railway safety by identifying critical issues in real-time.
          </p>
<p className="text-gray-600 leading-relaxed mb-6">
  The system captures coach and wagon details, analyzes components using
  advanced algorithms, and provides actionable insights for efficient monitoring
  and maintenance.
</p>
<p className="text-gray-600 leading-relaxed mb-4">
  MVIS is engineered to operate efficiently in harsh railway environments,
  delivering reliable performance during day and night operations. The system
  integrates high-resolution cameras, intelligent image processing, and automated
  inspection mechanisms to improve operational safety and reduce manual inspection efforts.
</p>


          {/* 🔥 POINTS */}
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-2">
              • Captures high-speed train images with precision
            </div>
            <div className="flex items-center gap-2">
              • Detects rolling stock defects automatically
            </div>
            <div className="flex items-center gap-2">
              • Identifies coach/wagon numbers digitally
            </div>
            <div className="flex items-center gap-2">
              • Provides real-time monitoring and analysis
            </div>
            
          </div>

        </motion.div>

{/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full"
>
 <div className="w-full h-[220px] sm:h-[280px] md:h-[370px] overflow-hidden rounded-2xl shadow-xl">
    <img
      src="/services/mv.jpg"
      alt="MVIS System"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
      </div>

      {/* 🔥 KEY FEATURES */}
      <div className="py-20 px-6 md:px-20 bg-gray-50">

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCamera className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">High-Speed Imaging</h4>
            <p className="text-sm text-gray-600 mt-2">
              Captures clear images using digital color cameras.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCogs className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Smart Analysis</h4>
            <p className="text-sm text-gray-600 mt-2">
              Advanced algorithms detect and analyze defects automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Secure System</h4>
            <p className="text-sm text-gray-600 mt-2">
              Password-protected access ensures data security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaDatabase className="text-2xl mb-3" style={{ color: "#1e293b" }} />
            <h4 className="font-semibold text-gray-800">Data Storage</h4>
            <p className="text-sm text-gray-600 mt-2">
              Stores video data with backup and export features.
            </p>
          </div>

        </div>
      </div>


    </section>
  );
}

export default MVIS;