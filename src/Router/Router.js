import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import OverFreep from "../Pages/OverFreep";
import Detachering from "../Pages/Detachering";
import Nieuws from "../Pages/Nieuws";
import Vacatures from "../Pages/Vacatures";
import VacantDetail from "../Pages/VacantDetail";
import NieuwsDetail from "../Pages/NieuwsDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/over-freep" element={<OverFreep />} />
        <Route path="/detachering" element={<Detachering />} />
        <Route path="/nieuws" element={<Nieuws />} />
        <Route path="/vacatures" element={<Vacatures />} />
        <Route path="/vacancy-detail" element={<VacantDetail />} />
        <Route path="/nieuws-detail" element={<NieuwsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
