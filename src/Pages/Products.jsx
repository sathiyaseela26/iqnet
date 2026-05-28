import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/Products";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8fafc] text-gray-900 py-20 px-6 md:px-20 min-h-screen">

      {/* ================= TITLE ================= */}
      <div className="flex items-center justify-center mb-16">

        {/* LEFT LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#0A4174]/40 origin-left"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-6 text-3xl md:text-5xl font-bold whitespace-nowrap"
        >
          <span className="text-[#0A4174]">Our </span>

          <span className="bg-gradient-to-r from-[#FF4F18] to-orange-400 bg-clip-text text-transparent">
            Products
          </span>
        </motion.h1>

        {/* RIGHT LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
        />
      </div>

      {/* ================= PRODUCTS GRID ================= */}
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

        border border-gray-100

        shadow-[0_8px_30px_rgba(0,0,0,0.04)]

        hover:shadow-[0_20px_60px_rgba(10,65,116,0.15)]

        transition-all duration-500

        hover:-translate-y-2

        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div className="relative pt-5 px-5 overflow-hidden">

        {/* IMAGE CONTAINER */}
        <div className="overflow-hidden rounded-xl">

          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-[150px]
              object-cover
              rounded-xl

              transition-all duration-700 ease-out

              group-hover:scale-105
              group-hover:brightness-95
            "
          />

        </div>

        {/* OVERLAY */}
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
      <div className="p-4 text-center">

        {/* TITLE */}
        <h3
          className="
            text-xl font-bold
            text-[#0A4174]

            

            transition duration-300
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
            min-h-[50px]
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
            mt-4
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
    </section>
  );
}

export default Products;