import { Navbar, Footer } from "../Layouts";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
