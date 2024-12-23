import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Trade = React.lazy(() => import("./pages/Trade"));
const Market = React.lazy(() => import("./pages/Market"));
const Company = React.lazy(() => import("./pages/Company"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Potfolio = React.lazy(() => import("./pages/Potfolio"));
const BuyCrypto = React.lazy(() => import("./pages/BuyCrypto"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Profile = React.lazy(() => import("./pages/Profile"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/market" element={<Market />} />
            <Route path="/company" element={<Company />} />
            <Route path="/portfolio" element={<Potfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buycrypto" element={<BuyCrypto />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
