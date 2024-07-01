import { Navbar, Footer } from "../Layouts";
import Contact from "../constant/Contact";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
