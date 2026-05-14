import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MainLayout({children}) {
  return (
    <>
        <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}

export default MainLayout;