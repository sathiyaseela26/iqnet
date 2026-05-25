import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./Pages/ScrollTotop";

import Loader from "./components/Loader";

/* ================= LAZY LOAD PAGES ================= */

// MAIN PAGES
const delayImport = (importFunc, delay = 1800) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), delay);
  });

const Home = lazy(() =>
  delayImport(() => import("./Pages/Home"))
);
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Products = lazy(() => import("./Pages/Products"));

// SERVICES
const HABD = lazy(() => import("./Pages/services/HABD"));
const MVIS = lazy(() => import("./Pages/services/MVIS"));
const WLM = lazy(() => import("./Pages/services/WLM"));
const RTME = lazy(() => import("./Pages/services/RTME"));
const HWD = lazy(() => import("./Pages/services/HWD"));
const HBDDS = lazy(() => import("./Pages/services/HBDDS"));

// PRODUCT DETAILS
const PCM_P = lazy(() => import("./Pages/products/PCM_P"));
const WLM_P = lazy(() => import("./Pages/products/WLM_P"));
const HABD_P = lazy(() => import("./Pages/products/HABD_P"));
const PID = lazy(() => import("./Pages/products/PID"));
const MVIS_P = lazy(() => import("./Pages/products/MVIS_P"));
const PIS = lazy(() => import("./Pages/products/PIS"));

function App() {
  return (
    <BrowserRouter>

      {/* AUTO SCROLL TOP */}
      <ScrollToTop />

      {/* LOADING SCREEN */}
      <Suspense fallback={<Loader />}>

        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />

          {/* ================= ABOUT ================= */}
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />

          {/* ================= SERVICES ================= */}
          <Route
            path="/services/habd"
            element={
              <MainLayout>
                <HABD />
              </MainLayout>
            }
          />

          <Route
            path="/services/mvis"
            element={
              <MainLayout>
                <MVIS />
              </MainLayout>
            }
          />

          <Route
            path="/services/wlm"
            element={
              <MainLayout>
                <WLM />
              </MainLayout>
            }
          />

          <Route
            path="/services/rtme"
            element={
              <MainLayout>
                <RTME />
              </MainLayout>
            }
          />

          <Route
            path="/services/hwd"
            element={
              <MainLayout>
                <HWD />
              </MainLayout>
            }
          />

          <Route
            path="/services/hbdds"
            element={
              <MainLayout>
                <HBDDS />
              </MainLayout>
            }
          />

          {/* ================= PRODUCTS ================= */}
          <Route
            path="/products"
            element={
              <MainLayout>
                <Products />
              </MainLayout>
            }
          />

          {/* ================= PRODUCT DETAILS ================= */}

          <Route
            path="/products/pcm"
            element={
              <MainLayout>
                <PCM_P />
              </MainLayout>
            }
          />

          <Route
            path="/products/wlm"
            element={
              <MainLayout>
                <WLM_P />
              </MainLayout>
            }
          />

          <Route
            path="/products/habd"
            element={
              <MainLayout>
                <HABD_P />
              </MainLayout>
            }
          />

          <Route
            path="/products/pid"
            element={
              <MainLayout>
                <PID />
              </MainLayout>
            }
          />

          <Route
            path="/products/mvis"
            element={
              <MainLayout>
                <MVIS_P />
              </MainLayout>
            }
          />

          <Route
            path="/products/pis"
            element={
              <MainLayout>
                <PIS />
              </MainLayout>
            }
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default App;