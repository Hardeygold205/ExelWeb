import { Navbar, Footer } from "../Layouts";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
