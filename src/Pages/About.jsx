import { motion } from "framer-motion";
import { FaBrain, FaUsers, FaIndustry, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="bg-[#f8fafc] text-gray-900 min-h-screen">

      {/* ================= HERO (NEW) ================= */}
      <div className="relative py-24 px-6 md:px-20 overflow-hidden">

        {/* 🔥 BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/about.webp')" // 👉 add your image
          }}
        >
          {/* 🔥 DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="relative z-10">

          <div className="flex items-center justify-center mb-6">

            {/* LEFT LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/40 origin-left"
            />

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-6 text-3xl md:text-5xl font-extrabold text-center"
            >
              <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                About
              </span>{" "}
              <span className="
                bg-gradient-to-r from-[#FF4F18] to-orange-400 
                bg-clip-text text-transparent
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
              ">
                Us
              </span>
            </motion.h1>

            {/* RIGHT LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/40 origin-right"
            />
          </div>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 max-w-2xl mx-auto text-center text-lg drop-shadow"
          >
            Delivering intelligent railway solutions with innovation, precision, and trust.
          </motion.p>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="py-14 px-6 md:px-20">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-900">
              IQNET SYSTEMS is a high-tech micro-entity founded in 2007 and based in Chennai, India.
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our highly skilled team of engineers and professionals bring deep expertise in
              electronics, embedded systems, and software development — delivering solutions built
              entirely from scratch using cutting-edge technologies.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-4">
              {[
                "Real-time monitoring",
                "AI fault detection",
                "Predictive maintenance",
                "High-speed processing"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0A4174]/10">
                    <FaCheckCircle className="text-[#0A4174] text-sm" />
                  </div>

                  <p className="text-gray-700 font-medium tracking-wide">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* TEAM */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-6 text-[#0A4174]">
                Our Team Strength
              </h4>

              <div className="space-y-5">
                {[
                  {
                    title: "High Quality Software Engineers",
                    desc: "Experts in building scalable and efficient systems."
                  },
                  {
                    title: "Hardworking Hardware Teams",
                    desc: "Focused on precision engineering and reliability."
                  },
                  {
                    title: "Energised Embedded Teams",
                    desc: "Delivering real-time high-performance solutions."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-[#0A4174] mt-1" />

                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CARDS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <FaIndustry />,
                title: "Many Years of Experience",
                desc: "Extensive expertise in railway systems."
              },
              {
                icon: <FaBrain />,
                title: "Powerful Knowledge",
                desc: "All solutions developed in-house."
              },
              {
                icon: <FaUsers />,
                title: "Trusted Clients",
                desc: "Serving enterprise & government sectors."
              },
              {
                icon: <FaCheckCircle />,
                title: "Quality Products",
                desc: "Built with latest technologies."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                  backdrop-blur-lg
                  bg-white/60
                  border border-white/40
                  p-6 rounded-2xl
                  shadow-md
                  hover:shadow-[0_0_25px_rgba(10,65,116,0.2)]
                  hover:border-[#0A4174]/40
                  transition duration-300
                "
              >
                <div className="text-2xl mb-3 text-[#0A4174]">
                  {card.icon}
                </div>

                <h4 className="font-semibold text-gray-900">
                  {card.title}
                </h4>

                <p className="text-sm text-gray-600 mt-2">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;