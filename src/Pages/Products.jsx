import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/Products";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8fafc] text-gray-900 py-20 px-6 md:px-20 min-h-screen">

      {/* 🔥 Heading */}
    {/* ================= TITLE WITH LINES ================= */}
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
             Products </span>
        </motion.h1>

        {/* RIGHT LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#0A4174]/40 origin-right"
        />
      </div>

      {/* 🔥 Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >

            {/* 🔥 PERSPECTIVE */}
            <div className="[perspective:1000px]">

              {/* 🔥 FLIP CARD */}
              <div className="
                relative w-full h-[320px]
                transition-transform duration-700
                [transform-style:preserve-3d]
                group-hover:[transform:rotateY(180deg)]
              ">

                {/* 🔵 FRONT */}
                <div className="
                  absolute inset-0
                  rounded-2xl
                  bg-white
                  border border-gray-200
                  shadow-sm
                  p-4

                  group-hover:shadow-[0_0_25px_rgba(10,65,116,0.25)]

                  [backface-visibility:hidden]
                ">

                  {/* IMAGE */}
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="mt-4 text-center text-lg font-semibold group-hover:text-[#0A4174] transition">
                    {product.name}
                  </h3>

                </div>

                {/* 🔵 BACK */}
                <div className="
                  absolute inset-0
                  rounded-2xl
                  flex flex-col justify-center items-center text-center
                  p-6

                  bg-white
                  border border-[#0A4174]/30
                  shadow-[0_0_25px_rgba(10,65,116,0.25)]

                  [transform:rotateY(180deg)]
                  [backface-visibility:hidden]
                ">

                  <h3 className="text-lg font-semibold mb-3 text-[#0A4174]">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.desc}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/products/${product.id}`);
                    }}
                    className="
                      mt-4 px-5 py-2 text-sm rounded-lg
                      bg-[#0A4174] text-white
                      hover:bg-blue-500
                      transition
                    "
                  >
                    View Details
                  </button>

                </div>

              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Products;