import { Navbar, Footer } from "../Layouts";
import Contact from "../constant/Contact";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="">
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Contact />
      {!hideFooter && <Footer />}
    </div>
  );
}
