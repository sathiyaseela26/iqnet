import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "../styles/navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="navbar bg-white text-black shadow-lg ">

      {/* LEFT → LOGO */}


<div className="group cursor-pointer select-none flex items-center gap-3">

  {/* 🔵 LOGO */}
  <img
    src="/logo/logo.png"
    alt="IQNET Logo"
    className="
      h-8 md:h-10 object-contain
      transition-all duration-500
      
    "
  />

  {/* 🔥 TEXT */}
  <h1 className="
    font-['Exo 2']
    text-2xl md:text-3xl
    font-extrabold
    tracking-wide
    flex items-center gap-1

    animate-slideIn

    transition-all duration-1000
    group-hover:tracking-widest
    group-hover:scale-105
  ">

    <span className="text-[#FF4F18]">
      IQNET
    </span>

    <span className="text-[#0A4174]">
      SYSTEMS
    </span>

  </h1>

</div>
      {/* RIGHT → LINKS + MENU */}
      <div className="right-section flex items-center gap-8">

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

<div
  className="relative nav-item"
  onMouseEnter={() => window.innerWidth > 781 && setServicesOpen(true)}
  onMouseLeave={() => window.innerWidth > 781 && setServicesOpen(false)}
>
  <div
    className="nav-link-box"
    onClick={() => setServicesOpen(!servicesOpen)} // 🔥 FIX
  >
    Services <FaChevronDown className={`arrow ${servicesOpen ? "rotate" : ""}`} />
  </div>

  <div className={`dropdown-box ${servicesOpen ? "show" : ""}`}>
    
    <Link to="/services/habd" className="dropdown-item">HABD System</Link>
    <Link to="/services/mvis" className="dropdown-item">Machine Vision System (MVIS)</Link>
    <Link to="/services/wlm" className="dropdown-item">Water Level Monitoring</Link>
     <Link to="/services/rtme" className="dropdown-item">RTME</Link>
      <Link to="/services/hwd" className="dropdown-item">HWD</Link>
       <Link to="/services/hbdds" className="dropdown-item">HBDDS</Link>



  </div>
</div>
{/* PRODUCTS */}
  <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>

        </div>

        {/* HAMBURGER */}
        <div
          className="menu-icon text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;