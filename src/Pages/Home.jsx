import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  FaFire,
  FaEye,
  FaWater,
  FaTemperatureHigh,
  FaDotCircle,
  FaCogs
} from "react-icons/fa";
import { motion } from "framer-motion";
import products from "../data/Products";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


function Home() {
  const navigate = useNavigate();
  
  const [productIndex, setProductIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
const slides = [
  {
    title: "IQNET SYSTEMS",
    highlight: "No 1 HABD Manufacturer In India",
    desc: "Leading railway safety solutions provider.",
    img: "/bg/slide.jpg"
  },
  {
      title: "Next-Gen Inspection using",
    highlight: "AI & Machine Vision",
desc: "AI-powered inspection with high-speed imaging and intelligent analytics.",
    img:  "/bg/track.webp"
  },
  {
  title: "Redefining Railway Safety",
  highlight: "Precision. Intelligence. Reliability.",
       desc: "Advanced railway monitoring solutions for safer operations.",
    img:  "/bg/wheel.webp"
  }
];



 const services = [
  {
    title: "HABD System",
    path: "/services/habd",
    icon: <FaFire />,
  },
  {
    title: "MVIS System",
    path: "/services/mvis",
    icon: <FaEye />,
  },
  {
    title: "Water Level Monitoring",
    path: "/services/wlm",
    icon: <FaWater />,
  },
  {
    title: "Rail Temperature System",
    path: "/services/rtme",
    icon: <FaTemperatureHigh />,
  },
  {
    title: "Wheel Detection System",
    path: "/services/hwd",
    icon: <FaDotCircle />,
  },
  {
    title: "Brake Disk Detection",
    path: "/services/hbdds",
    icon: <FaCogs />,
  },
];

  const clients = [
  {
    name: "Indian Railways",
    logo: "/clients/railway.webp"
  },
  {
    name: "Metro Rail",
    logo: "/clients/metroo.webp"
  }
];

const slideAnimation = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
  const [current, setCurrent] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState("home");


   

  const productSlides = [
  {
    name: "Passage Control Module",
    img: "/products/pcm.webp",
  },
  {
    name: "Water Level Monitoring",
    img: "/products/wlm.webp",
  },
  {
    name: "Passenger Display",
    img: "/products/piddd.jpg",
  },
  {
    name: "HABD System",
    img: "/products/habd.jpg",
  },
  {
    name: "MVIS System",
    img: "/products/mv.jpg",
  }
];
  // 🔥 Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 760);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  // 🔥 Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Section detection
useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    const s = document.getElementById("services");
    const c = document.getElementById("products");
    const p = document.getElementById("clients");
    const contact = document.getElementById("contact");

  
    if (y + windowHeight >= fullHeight - 50) {
      setActiveSection("footer");
    }
    else if (contact && y >= contact.offsetTop - 200) {
      setActiveSection("contact");
    } 
    else if (p && y >= p.offsetTop - 200) {
      setActiveSection("clients");
    } 
    else if (c && y >= c.offsetTop - 200) {
      setActiveSection("products");
    } 
    else if (s && y >= s.offsetTop - 200) {
      setActiveSection("services");
    } 
    else {
      setActiveSection("home");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 🔥 Arrow behavior
const handleArrowClick = () => {
  if (activeSection === "home") {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }
  else if (activeSection === "services") {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }
  else if (activeSection === "products") {
    document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
  }
  else if (activeSection === "clients") {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
  else if (activeSection === "contact") {
    // 🔥 Scroll deeper into footer (not just contact end)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }
  else if (activeSection === "footer") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
  return (
    <>
      {/* SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div className="h-full bg-[#0A4174]" style={{ width: `${scroll}%` }} />
      </div>

{/* hero */}
<section className="relative h-[95vh] flex items-center px-5 sm:px-6 md:px-20 overflow-hidden bg-white">

  {/* 🔥 Fixed Background */}
<div
  className="
    absolute inset-0
    bg-cover bg-no-repeat
    bg-center
    max-[760px]:bg-center
  "
 style={{
  backgroundImage: `url(${slides[current].img})`,
  backgroundAttachment: "scroll",
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
  backfaceVisibility: "hidden",
}}
>
    {/* overlay */}
  
  </div>

  {/* 🔥 CONTENT */}
  <motion.div
  key={isMobile ? "mobile-static" : current}
    variants={slideAnimation}
    initial="hidden"
    animate="visible"
   className="
  relative z-10
  max-w-3xl
  space-y-4 md:space-y-6
  max-[760px]:text-center
  max-[760px]:mx-auto
  max-[760px]:px-2
"
  >

    {/* 🔵 TITLE */}
    <h1
      className="
        text-2xl sm:text-3xl md:text-5xl
        font-['Poppins'] font-extrabold
        leading-snug md:leading-tight

        text-[#EC5748]

        [text-shadow:0_4px_10px_rgba(0,0,0,0.8),0_10px_25px_rgba(0,0,0,0.9)]

        max-[760px]:text-[28px]
      "
    >
      {slides[current].title}
    </h1>

    {/* 🔵 HIGHLIGHT */}
    <h3
      className="
        text-2xl sm:text-3xl md:text-5xl
        font-bold
        mt-1 md:mt-2

        text-white

        [text-shadow:0_4px_12px_rgba(0,0,0,0.9),0_10px_30px_rgba(0,0,0,1)]

        max-[760px]:text-[30px]
      "
    >
      {slides[current].highlight}
    </h3>

    {/* 🔵 DESC */}
    <p
      className="
        text-sm sm:text-base md:text-xl
        font-[Inter]
        text-gray-100
        leading-relaxed

        max-w-xl
        max-[760px]:max-w-full

        drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
      "
    >
      {slides[current].desc}
    </p>

    {/* 🔵 BUTTON */}
    <button
      onClick={() => navigate("/about")}
      className="
        relative mt-2 md:mt-4
        px-4 py-2 md:px-5 md:py-3
        rounded-xl

        text-sm md:text-base

        font-[Poppins] font-semibold text-white

        bg-white/10 backdrop-blur-lg
        border border-white/20

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        overflow-hidden
        transition-all duration-300 ease-in-out

        hover:bg-white/20
        hover:border-white/40
        hover:scale-105
        hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)]
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        Explore →
      </span>
    </button>
  </motion.div>

  {/* 🔥 HERO DOTS */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
    {slides.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrent(i)}
        className={`
          relative cursor-pointer rounded-full transition-all duration-300

          ${current === i
            ? "w-6 h-2 bg-[#FF5100] shadow-[0_0_10px_rgba(255,81,0,0.8)]"
            : "w-2 h-2 bg-white hover:bg-white hover:scale-110"}
        `}
      >
        {current === i && (
          <span className="absolute inset-0 rounded-full bg-[#FF5100]/40 blur-md"></span>
        )}
      </div>
    ))}
  </div>
</section>
{/* ================= SERVICES ================= */}
<section
  id="services"
  className="min-h-screen flex items-center py-20 px-6 md:px-20 bg-[#f8fafc] text-black"
>
  <div className="w-full">

    {/* 🔥 TITLE WITH SIDE LINES */}
    <div className="flex items-center justify-center mb-20">

      {/* LEFT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A4174]/40 origin-left"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-6 text-3xl md:text-5xl font-bold whitespace-nowrap"
      >
        <span className="text-[#0A4174]">Our </span>
        <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* RIGHT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
      />

    </div>

    {/* 🔥 SUBTEXT */}
    <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-lg text-center">
      Smart railway solutions engineered for safety, monitoring, and performance optimization.
    </p>

    {/* 🔥 GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
          onClick={() => navigate(service.path)}
        >

          {/* 🔥 ICON */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
         <div className="
  w-16 h-16 flex items-center justify-center
  rounded-2xl text-2xl text-white

  bg-gradient-to-br from-[#FF4F18] to-orange-500
  shadow-[0_0_20px_rgba(300,79,24,0.45)]

  group-hover:scale-110
  transition duration-300
">
  {service.icon}
</div>
          </div>

          {/* 🔥 CARD */}
          <div className="
            pt-14 pb-8 px-6 text-center

            bg-white
            border border-gray-200

            rounded-2xl
            shadow-sm

            hover:border-[#0A4174]
            hover:shadow-[0_0_25px_rgba(10,65,116,0.25)]

            transition duration-300
          ">

            {/* TITLE */}
            <h3 className="text-lg font-semibold mt-2 group-hover:text-[#0A4174] transition">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Advanced monitoring system designed to enhance safety, efficiency,
              and real-time railway performance.
            </p>

            {/* LINK */}
            <div className="mt-5 text-sm font-semibold text-[#0A4174] opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
{/* ================= PRODUCTS ================= */}
<section
  id="products"
  className="min-h-screen flex items-center py-20 px-6 md:px-20 bg-[#f8fafc] text-gray-900"
>
  <div className="w-full">

    {/* 🔥 TITLE WITH SIDE LINES */}
    <div className="flex items-center justify-center mb-16">

      {/* LEFT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A4174]/40 origin-left"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-6 text-3xl md:text-5xl font-bold whitespace-nowrap"
      >
   <span className="text-[#0A4174]">Our </span>
        <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent">
          Products
        </span>
      
      </motion.h2>

      {/* RIGHT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
      />

    </div>

    

    {/* 🔥 GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
{products.map((product, index) => (
  <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    className="group"
  >

    {/* CARD */}
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="
        bg-white
        rounded-3xl
        overflow-hidden

        border border-gray-200

        shadow-sm
        hover:shadow-[0_20px_60px_rgba(10,65,116,0.18)]

        transition-all duration-500

        hover:-translate-y-2

        cursor-pointer
      "
    >

      {/* IMAGE */}
{/* IMAGE */}
<div className="relative pt-5 px-5 overflow-hidden">

  {/* IMAGE CONTAINER */}
  <div className="overflow-hidden rounded-2xl">

    <img
      src={product.image}
      alt={product.name}
      className="
        w-full h-[200px]
        object-cover
        rounded-2xl

        transition-all duration-700 ease-out

        group-hover:scale-105
        group-hover:brightness-95
      "
    />

  </div>

  {/* PROFESSIONAL OVERLAY */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#0A4174]/20
      via-transparent
      to-transparent

      opacity-0
      group-hover:opacity-100

      transition duration-500

      rounded-2xl
      mx-5 mt-5
    "
  ></div>

</div>

     

      {/* CONTENT */}
      <div className="p-6">

        {/* TITLE */}
        <h3
          className="
            text-xl font-bold
            text-[#0A4174]

            group-hover:text-[#FF4F18]

            transition
          "
        >
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-500
            text-sm
            leading-relaxed
            mt-3
            min-h-[70px]
          "
        >
          {product.desc}
        </p>

       
        {/* BUTTON */}
<button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/products/${product.id}`);
  }}
  className="
    mt-6
    px-5 py-2.5

    rounded-xl

    text-sm
    font-semibold
    text-white

    bg-[#FF4F18]
    hover:bg-[#0A4174]

    shadow-[0_10px_25px_rgba(10,65,116,0.25)]

   

    transition-all duration-300

    hover:-translate-y-1
    hover:scale-105

    mx-auto
    flex items-center justify-center
  "
>
  View Details
</button>
      </div>

    </div>

  </motion.div>
))}
    </div>

  </div>
</section>
{/* CLIENTS */}
<section
  id="clients"
  className="py-16 md:py-20 px-6 md:px-20 bg-[#f8fafc]"
>
  <div className="max-w-7xl mx-auto">

    {/* 🔥 TITLE WITH SIDE LINES */}
    <div className="flex items-center justify-center mb-16">

      {/* LEFT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A4174]/40 origin-left"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-6 text-3xl md:text-5xl font-bold whitespace-nowrap"
      >
      <span className="text-[#0A4174]">Our </span>
        <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent">
        Clients
        </span>
    
      </motion.h2>

      {/* RIGHT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
      />

    </div>

    {/* 🔥 LOGOS */}
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">

      {clients.map((client, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.08
          }}
          viewport={{ once: true }}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="
              h-14 md:h-16 lg:h-20
              object-contain

              hover:scale-110
              hover:drop-shadow-[0_0_12px_rgba(10,65,116,0.4)]

              transition duration-300 ease-in-out
              cursor-pointer
            "
          />
        </motion.div>
      ))}

    </div>

  </div>
</section>
      {/* CONTACT */}
      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="bg-[#f8fafc] py-20 px-6 md:px-20"
>

  {/* 🔥 TITLE WITH SIDE LINES */}
  <div className="flex items-center justify-center mb-16">

    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A4174]/40 origin-left"
    />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-6 text-3xl md:text-5xl font-bold whitespace-nowrap"
    >
      <span className="text-[#0A4174]">Contact </span>
      <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent">
        Us
      </span>
    </motion.h2>

    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
    />
  </div>

  
  {/* 🔥 MAIN GRID */}
  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* ================= COMPANY DETAILS ================= */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-10"
    >

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#0A4174]">
          IQNET Systems
        </h3>

        <p className="text-gray-600 mt-4 max-w-md leading-relaxed">
          We provide advanced railway and industrial monitoring solutions,
          ensuring safety, efficiency, and innovation across all operations.
        </p>
      </div>

      {/* 🔥 CONTACT ITEMS (MODERN STYLE) */}
      <div className="space-y-8">

        {[
          {
            icon:<FaMapMarkerAlt></FaMapMarkerAlt>,
            title: "Address",
            value:
              "936, Second Floor, Jaya Durga Complex, Bazaar Main Rd, Ram Nagar South, Madipakkam, Chennai, Tamil Nadu 600091."
          },
          {
            icon: <FaPhoneAlt />,
            title: "Phone",
            value: "+91 9445021500"
          },
          {
            icon:<FaEnvelope /> ,
            title: "Email",
            value: "info@iqnetsystems.com"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 8 }}
            className="flex items-start gap-5 group"
          >

              {/* 🔥 ICON (UPDATED) */}
    <div className="
      min-w-[42px] h-[42px]
      flex items-center justify-center
      rounded-lg
      bg-[#0A4174] text-white
      shadow-md

      group-hover:bg-[#08345c]
      transition
    ">
      {item.icon}
    </div>

            {/* TEXT */}
            <div className="relative">

              {/* subtle vertical line */}
              <span className="
                absolute -left-3 top-2 h-[70%] w-[2px]
                bg-[#0A4174]/20
                group-hover:bg-[#0A4174]
                transition
              "></span>

              <h4 className="
                font-semibold text-gray-900
                group-hover:text-[#0A4174]
                transition
              ">
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

    {/* ================= MAP ================= */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full h-[420px]"
    >
      <div className="
        relative w-full h-full
        rounded-2xl overflow-hidden
        border border-gray-200
        shadow-md

        hover:shadow-[0_20px_60px_rgba(10,65,116,0.25)]
        transition duration-500
      ">

        {/* subtle overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4174]/10 to-transparent pointer-events-none"></div>

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
      {/* 🔽 / 🔼 SINGLE DYNAMIC ARROW */}
      <div
        onClick={handleArrowClick}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute w-12 h-12 rounded-full bg-[#FF5100] animate-ping"></span>

          <div className="relative p-3 rounded-full bg-white shadow-lg hover:bg-[#FF5100] transition">
            
         {activeSection === "footer" ? (
  <FaArrowUp className="text-[#FF5100] group-hover:text-white" />
) : (
  <FaArrowDown className="text-[#FF5100] group-hover:text-white" />
)}

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;