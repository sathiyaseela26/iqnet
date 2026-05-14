import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import MainLayout from "./Layout/MainLayout";


// services Routes

import HABD from "./Pages/services/HABD";
import MVIS from "./Pages/services/MVIS";
import WLM from "./Pages/services/WLM";
import RTME from "./Pages/services/RTME";
import HWD from "./Pages/services/HWD";
import HBDDS from "./Pages/services/HBDDS";




import Products from "./Pages/Products";

// products Routes

import WLM_P from "./Pages/products/WLM_P";
import HABD_P from "./Pages/products/HABD_P";
import PID from "./Pages/products/PID";
import MVIS_P from "./Pages/products/MVIS_P";
import PIS from "./Pages/products/PIS";





import Contact from "./Pages/Contact";
import ScrollToTop from "./Pages/ScrollTotop";
import PCM_P from "./Pages/products/PCM_P";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* ✅ SERVICES ROUTES WITH SAME LAYOUT */}

        <Route
          path="/services/habd"
          element={
            <MainLayout>
              <HABD></HABD>
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
           <WLM></WLM>
            </MainLayout>
          }
        />

        <Route
          path="/services/hwd"
          element={
            <MainLayout>
           <HWD></HWD>
            </MainLayout>
          }
        />
        
        <Route
          path="/services/rtme"
          element={
            <MainLayout>
             <RTME></RTME>
            </MainLayout>
          }
        />
             
        <Route
          path="/services/hbdds"
          element={
            <MainLayout>
            <HBDDS></HBDDS>
            </MainLayout>
          }
        />

        {/* products */}
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products></Products>
            </MainLayout>
          }
        />
         
          {/* Products Routes */}
         <Route path="/products/pcm" element={<MainLayout><PCM_P></PCM_P></MainLayout>}></Route>
          <Route path="/products/wlm" element={<MainLayout><WLM_P></WLM_P></MainLayout>} />
          <Route path="/products/mvis" element={<MainLayout><MVIS_P></MVIS_P></MainLayout>} />
          <Route path="/products/habd" element={<MainLayout><HABD_P></HABD_P></MainLayout>} />
          <Route path="/products/pid" element={<MainLayout><PID></PID></MainLayout>} />
          <Route path="/products/pis" element={<MainLayout><PIS></PIS></MainLayout>} />

  

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact></Contact>
            </MainLayout>
          }
        />

  

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;