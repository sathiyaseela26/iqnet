import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-[#f8fafc] text-gray-900">

      {/* ================= HERO (UNCHANGED) ================= */}
      <div className="relative py-24 px-6 md:px-20 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg/contact.webp')" }}
        >
          <div className="absolute inset-0"></div>
        </div>

        <div className="relative z-10">

          <div className="flex items-center justify-center mb-6">

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/40 origin-left"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-6 text-3xl md:text-5xl font-extrabold text-center"
            >
              <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                Contact
              </span>{" "}
              <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                Us
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/40 origin-right"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 max-w-2xl mx-auto text-center text-lg drop-shadow"
          >
            Have questions or need assistance? Reach out to our team — we’re here to help.
          </motion.p>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="py-20 px-6 md:px-20">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= FORM (UPGRADED) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative bg-white p-8 md:p-10 rounded-2xl
              shadow-lg border border-gray-200
              hover:shadow-[0_20px_60px_rgba(10,65,116,0.15)]
              transition duration-500
            "
          >
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0A4174]/5 to-transparent opacity-0 hover:opacity-100 transition"></div>

            <h2 className="text-2xl font-semibold mb-8 text-[#0A4174]">
              Send a Message
            </h2>

            <form className="space-y-5 relative z-10">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded-lg border border-gray-300 focus:border-[#0A4174] focus:ring-2 focus:ring-[#0A4174]/20 outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded-lg border border-gray-300 focus:border-[#0A4174] focus:ring-2 focus:ring-[#0A4174]/20 outline-none transition"
                />
              </div>

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#0A4174] focus:ring-2 focus:ring-[#0A4174]/20 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#0A4174] focus:ring-2 focus:ring-[#0A4174]/20 outline-none transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#0A4174] focus:ring-2 focus:ring-[#0A4174]/20 outline-none transition"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="
                  w-full py-3 rounded-lg font-semibold
                  bg-[#0A4174] text-white
                  shadow-md
                  hover:bg-blue-800
                  hover:shadow-[0_10px_30px_rgba(10,65,116,0.3)]
                  transition
                "
              >
                Submit Request
              </motion.button>

            </form>
          </motion.div>

          {/* ================= COMPANY DETAILS (FIXED WIDTH + ALIGNMENT) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A4174]">
                IQNET Systems
              </h2>

              <p className="text-gray-600 mt-4 max-w-md leading-relaxed">
                We specialize in advanced railway and industrial monitoring solutions,
                delivering safety, automation, and real-time intelligence for modern infrastructure.
              </p>
            </div>

            <div className="space-y-6">

              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Address",
                  value: "936, Second Floor, Jaya Durga Complex, Bazaar Main Rd, Ram Nagar South, Madipakkam, Chennai, Tamil Nadu 600091."
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+91 9445021500"
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "info@iqnetsystems.com"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4"
                >
                  <div className="min-w-[42px] h-[42px] flex items-center justify-center rounded-lg bg-[#0A4174] text-white shadow-md">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm mt-1 max-w-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* ================= MAP ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.01474072016657!2d80.2101651804119!3d12.964305123687339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525df77d8dccf7%3A0x30e5f3536a5b690!2sIQNET%20SYSTEMS!5e0!3m2!1sen!2sin!4v1776427870970!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="IQNET Location"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;