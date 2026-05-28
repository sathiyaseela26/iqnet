import { motion } from "framer-motion";

function PIS() {
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
        Passenger Information System
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
            src="/products/pis.jpg"
            alt="PIS"
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
            Real-time passenger communication and information delivery
          </p>

          <p className="text-gray-700 leading-relaxed ">
            The Passenger Information System (PIS) delivers real-time updates,
            announcements, and visual information to passengers across railway
            stations and onboard trains. It ensures clear communication and
            enhances the overall travel experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By integrating audio-visual systems with centralized control, PIS
            enables accurate scheduling updates, emergency alerts, and seamless
            information flow for passengers and operators.
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
            The PIS system integrates display panels, announcement systems, and
            centralized control software to deliver synchronized real-time
            information. It ensures passengers receive accurate updates
            regarding train schedules, delays, and platform changes.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Designed for scalability, the system supports deployment across
            stations and onboard environments, maintaining consistent
            communication standards.
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
            <li>• Station display systems</li>
            <li>• Onboard passenger announcements</li>
            <li>• Real-time schedule updates</li>
            <li>• Emergency communication systems</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The system enhances passenger convenience while improving
            operational efficiency and communication reliability across railway
            networks.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default PIS;