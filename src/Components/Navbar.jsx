import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-between
        bg-white text-black shadow-lg
        px-5 md:px-10 lg:px-16
        py-3
      "
    >
      {/* ================= LOGO ================= */}
      <div className="group cursor-pointer select-none flex items-center gap-3">

        {/* LOGO */}
        <img
          src="/logo/logo.webp"
          alt="IQNET Logo"
          className="
            h-8 md:h-10 object-contain
            transition-all duration-500
          "
        />

        {/* TEXT */}
        <h1
          className="
            text-xl sm:text-2xl md:text-3xl
            font-extrabold
            tracking-wide
            flex items-center gap-1

            animate-[slideIn_0.8s_ease-out_forwards]

            transition-all duration-1000
            group-hover:tracking-widest
            group-hover:scale-105
          "
        >
          <span className="text-[#FF4F18]">
            IQNET
          </span>

          <span className="text-[#0A4174]">
            SYSTEMS
          </span>
        </h1>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="flex items-center gap-6 ml-auto">

        {/* ================= NAV LINKS ================= */}
        <div
          className={`
        absolute md:static 
        top-full
 left-0 md:left-auto
w-full md:w-auto
            flex flex-col md:flex-row
        items-center

          gap-2 md:gap-5
bg-white/95 backdrop-blur-md md:bg-transparent
p-6 md:p-0
           rounded-b-2xl md:rounded-none

            shadow-xl md:shadow-none

            transition-all duration-300

            ${
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            }
          `}
        >

          {/* HOME */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="
              px-4 py-2 rounded-lg
              text-slate-800
              font-medium
              transition-all duration-300

              hover:bg-[#0A4174]
              hover:text-white
              hover:-translate-y-[2px]
              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]

              active:scale-95
            "
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="
              px-4 py-2 rounded-lg
              text-slate-800
              font-medium
              transition-all duration-300

              hover:bg-[#0A4174]
              hover:text-white
              hover:-translate-y-[2px]
              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]

              active:scale-95
            "
          >
            About
          </Link>

    {/* ================= SERVICES DROPDOWN ================= */}
<div className="relative group w-full md:w-auto flex flex-col items-center">

  {/* BUTTON */}
  <button
    onClick={() => {
  if (window.innerWidth < 768) {
    setServicesOpen(!servicesOpen);
  }
}}
    className="
      w-full md:w-auto
      flex items-center justify-center gap-2

      px-4 py-2 rounded-lg

      text-slate-800 font-medium
      transition-all duration-300

      hover:bg-[#0A4174]
      hover:text-white
      hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]

      active:scale-95
    "
  >
    Services

    <FaChevronDown
      className={`
        text-[12px]
        transition-transform duration-300
        ${servicesOpen ? "rotate-180" : ""}
        md:group-hover:rotate-180
      `}
    />
  </button>

  {/* DROPDOWN */}
  <div
    className={`
      w-full md:w-[260px]

      flex flex-col items-center

      bg-[#f8fafc] md:bg-white
      rounded-xl

      overflow-hidden
      transition-all duration-300

      ${
  servicesOpen
    ? "max-h-[500px] opacity-100 mt-2 p-2 md:max-h-fit"
    : "max-h-0 opacity-0 p-0 md:max-h-fit"
}

      md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[48px]

      md:shadow-[0_10px_25px_rgba(0,0,0,0.15)]

      md:opacity-0
      md:invisible
      md:-translate-y-3

      md:group-hover:opacity-100
      md:group-hover:visible
      md:group-hover:translate-y-0

      z-50
    `}
  >
    {[
      {
        name: "HABD System",
        path: "/services/habd",
      },
      {
        name: "Machine Vision System (MVIS)",
        path: "/services/mvis",
      },
      {
        name: "Water Level Monitoring",
        path: "/services/wlm",
      },
      {
        name: "Rail Temperature Measuring Equipment",
        path: "/services/rtme",
      },
      {
        name: "Hot Wheel Detection",
        path: "/services/hwd",
      },
      {
        name: "Hot Brake Disk Detection System",
        path: "/services/hbdds",
      },
    ].map((item, i) => (
      <Link
        key={i}
        to={item.path}
        onClick={() => {
          setMenuOpen(false);
          setServicesOpen(false);
        }}
        className="
          w-full text-center
          px-4 py-3
          rounded-lg

          text-slate-800 font-medium

          transition-all duration-300

          hover:bg-[#0A4174]
          hover:text-white
          hover:scale-[1.02]
        "
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
          {/* PRODUCTS */}
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="
              px-4 py-2 rounded-lg
              text-slate-800
              font-medium
              transition-all duration-300

              hover:bg-[#0A4174]
              hover:text-white
              hover:-translate-y-[2px]
              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]

              active:scale-95
            "
          >
            Products
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              px-4 py-2 rounded-lg
              text-slate-800
              font-medium
              transition-all duration-300

              hover:bg-[#0A4174]
              hover:text-white
              hover:-translate-y-[2px]
              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]

              active:scale-95
            "
          >
            Contact us
          </Link>
        </div>

        {/* ================= HAMBURGER ================= */}
        <div
          className="
            md:hidden
            text-2xl
            cursor-pointer
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ================= CUSTOM ANIMATION ================= */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;