import { Navbar, Footer } from "../Layouts";
import Contact from "../constant/Contact";
import { Outlet, useLocation } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "../constant/ThemeContext";

export default function Layout() {  
  const { theme } = useTheme();
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={100}
          className="w-full h-full"
          particleColor={theme==="black" ? "#ffffff" : "#000"}
        />
      </div>
      <main className="relative z-40 mx-auto">
        <Outlet />
      </main>
      <div className="relative z-40">
        <Contact />
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
}
