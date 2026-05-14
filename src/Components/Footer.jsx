import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0A4174] text-white pt-16 pb-8 px-6 md:px-20 overflow-hidden">

      {/* 🔥 DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A4174] via-[#08345c] to-[#041c32] opacity-90"></div>

      {/* 🔥 MAIN GRID */}
      <div className="relative grid md:grid-cols-4 gap-12">

        {/* 🏢 BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wide">
            Iqnet Systems
          </h2>

          <p className="text-sm leading-relaxed text-blue-100">
            Engineering intelligent railway monitoring solutions with precision,
            safety, and real-time analytics for modern infrastructure.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-3">
            {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.1 }}
                className="
                  p-2 rounded-lg cursor-pointer
                  bg-white/10
                  hover:bg-white hover:text-[#0A4174]
                  transition
                "
              >
                <Icon className="text-sm" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", action: () => navigate("/") },
              { name: "About", action: () => navigate("/about") },
              { name: "Services", action: () => scrollToSection("services") },
              { name: "Contact", action: () => navigate("/contact") }
            ].map((item, i) => (
              <li
                key={i}
                onClick={item.action}
                className="group cursor-pointer w-fit"
              >
                <span className="relative text-blue-100 group-hover:text-white transition">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🧩 SOLUTIONS (NOW NAVIGATES) */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Solutions</h3>

          <ul className="space-y-3 text-sm text-blue-100">
            {[
              { name: "HABD System", path: "/services/HABD" },
              { name: "Machine Vision System", path: "/services/MVIS" },
              { name: "Water Level Monitoring", path: "/services/WLM" },
              { name: "RTME", path: "/services/RTME" },
              { name: "Hot Wheel Detection System", path: "/services/HWD" }
            ].map((item, i) => (
              <li
                key={i}
                onClick={() => navigate(item.path)}
                className="
                  cursor-pointer
                  hover:text-white
                  hover:translate-x-1
                  transition
                "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* 📍 CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

          <div className="space-y-3 text-sm text-blue-100">
            <p>
              936, Second Floor, Jaya Durga Complex, Bazaar Main Rd,
              Ram Nagar South, Madipakkam, Chennai - 600091
            </p>
            <p>+91 9445021500</p>
            <p>info@iqnetsystems.com</p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="
              mt-5 px-5 py-2 rounded-lg text-sm font-semibold
              bg-white text-[#0A4174]
              hover:bg-blue-100 hover:shadow-xl hover:scale-105
              transition
            "
          >
            Get in Touch
          </button>
        </div>

      </div>

      {/* 🔥 BOTTOM CENTERED */}
      <div className="relative z-10 border-t border-white/20 mt-12 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} IQNET Systems. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;