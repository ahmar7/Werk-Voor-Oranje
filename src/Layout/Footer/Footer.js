import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import Logo from "../../Assets/img/Werkvoororanje-logowhite.webp";
import Linkdin from "../../Assets/img/Followus.png";
const Footer = () => {
  return (
    <div data-v-4d4e8e34 className="footer-area">
      {/* <div className="  div-sec">
        <div className="py-24">&nbsp;</div>  
        <div className="divider divider-bottom bg-gray-800" />
      </div> */}
      <footer className="bg-footer">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="dmflex">
            <div className="space-y-8 xl:col-span-1">
              <NavLink
                to="/"
                className="flex logoMy text-white nuxt-link-exact-active nuxt-link-active"
                aria-current="page"
              >
                <img src={Logo} alt="" />
              </NavLink>
              <p className="text-white text-base boldi footer-darmyan leading-6">
                <span className="theme-color ">Sterk</span> in talent <br />
                <span className="theme-color">Krachtig </span> in succes
                <span className="theme-color">.</span>
              </p>
              <div className="leading-relaxed footer-darmyan  mt-2 text-white">
                <span className="theme-color boldi">Werk Voor Oranje </span>
                <br />
                <span className="light-g">
                  <span className="block">Gustav Mahlerplein 2B </span>
                  <span className="block">1080 LS Amsterdam</span>
                  <span className="block">
                    <a href="mailto:recruitment@werkvoororanje.nl">
                      Recruitment@werkvoororanje.nl
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div className="space-y-8 xl:col-span-1">
              <div className="msif">
                <div className="text-sm theme-color boldi leading-5 font-semibold text-white tracking-wider uppercase">
                  Informatie
                </div>
                <ul className="mt-3 foter-ul space-y-4">
                  <li>
                    <NavLink
                      to="/zzpbemiddeling"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      ZZP Bemiddeling
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/detachering"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      Detachering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/nieuws"
                      title="Nieuws"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      Interiem Opdrachten
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/nieuws"
                      title="Nieuws"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      Nieuws
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/vacatures"
                      title="Werk Voor Oranje groeit, groei jij mee?"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      Werk voor ons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faqs"
                      title="Werk Voor Oranje groeit, groei jij mee?"
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      veelgestelde Vragen
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      title="privacy verklaring "
                      className="text-base leading-6 text-white hover:text-gray-200"
                    >
                      Privacy verklaring
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8 linssa xl:col-span-1">
              <div className="cby">
                <div className="msif">
                  <a
                    href="https://www.linkedin.com/company/werkvoororanje"
                    target="_blank"
                    className="footer-linkdin"
                    rel="noopener noreferrer"
                  >
                    <img src={Linkdin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-12 mb-6" />
          <p className="text-center text-white">
            ©️Werk Voor Oranje 2024 | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
