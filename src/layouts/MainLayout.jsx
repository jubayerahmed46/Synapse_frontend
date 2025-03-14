import { Toaster } from "react-hot-toast";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

export const MainLayout = () => {
  return (
    <div className="pt-[76px lg:pt-[84px] overflow-hidden ">
      <Header />

      <Outlet />
      <Footer />

      <ButtonGradient />
      {/* notification */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
