import { Home, Trade, Market, Company, Login, Signup, Potfolio, BuyCrypto, Dashboard, Profile } from "./pages";
import Layout from "./Layouts/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/market" element={<Market />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/portfolio" element={<Potfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buycrypto" element={<BuyCrypto />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
