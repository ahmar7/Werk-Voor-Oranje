import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ZZPBemiddeling from "../Pages/ZZPBemiddeling";
import Detachering from "../Pages/Detachering";
import Nieuws from "../Pages/Nieuws";
import Vacatures from "../Pages/Vacatures";
import VacantDetail from "../Pages/VacantDetail";
import NieuwsDetail from "../Pages/NieuwsDetail";
import AllFaq from "../Pages/Faq";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/zzpbemiddeling" element={<ZZPBemiddeling />} />
        <Route path="/detachering" element={<Detachering />} />
        <Route path="/nieuws" element={<Nieuws />} />
        <Route path="/vacatures" element={<Vacatures />} />
        <Route path="/vacancy-detail" element={<VacantDetail />} />
        <Route path="/nieuws-detail" element={<NieuwsDetail />} />
        <Route path="/faqs" element={<AllFaq />} />
      </Routes>
    </BrowserRouter>
  );
}
