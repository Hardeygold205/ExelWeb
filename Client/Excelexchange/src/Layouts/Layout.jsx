import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "../constant/ThemeContext";

const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("./Footer"));
const Contact = React.lazy(() => import("../constant/Contact"));

export default function Layout() {
  const { theme } = useTheme();
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={100}
          className="w-full h-full"
          particleColor={theme === "black" ? "#ffffff" : "#000"}
        />
      </div>
      <main className="relative z-40 mx-auto">
        <Outlet />
      </main>
      <div className="relative z-40">
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
        {!hideFooter && (
          <Suspense fallback={<div>Loading Footer...</div>}>
            <Footer />
          </Suspense>
        )}
      </div>
    </div>
  );
}
