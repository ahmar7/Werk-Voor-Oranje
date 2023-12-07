import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import Logo from "../../Assets/img/WerkVoorOranjeLogo.webp";
const Footer = () => {
  return (
    <div data-v-4d4e8e34 className="footer-area">
      {/* <div className="  div-sec">
        <div className="py-24">&nbsp;</div>  
        <div className="divider divider-bottom bg-gray-800" />
      </div> */}
      <footer className="bg-footer">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <NavLink
                to="/"
                className="flex logoMy text-white nuxt-link-exact-active nuxt-link-active"
                aria-current="page"
              >
                <img src={Logo} alt="" />
              </NavLink>
              <p className="text-white text-base leading-6">
                Al meer dan 10 jaar is Werk Voor Oranje professionals.
                Professionals die het verschil maken binnen de overheid. We
                helpen ze bij het vinden van een geschikte opdracht.
              </p>
              <div className="leading-relaxed  mt-2 text-white">
                Werk Voor Oranje <br />
                Startbaan 6, 1185 XR Amstelveen
                <br />
                KVK: 72133082
                <br />
                <hr className="my-4 border-2 border-gray-700" />{" "}
                <a
                  href="mailto:"
                  title="mail Werk Voor Oranje"
                  className="underline"
                >
                  Werk Voor Oranje
                </a>
                <br />
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/company/freep-nl"
                  target="_blank"
                  rel="noopener"
                  className="text-white font-bold hover:bg-gray-500 bg-gray-600 px-2 py-1 rounded-sm"
                >
                  <span>in</span>
                </a>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <div className="text-sm leading-5 font-semibold text-white tracking-wider uppercase">
                    Direct naar
                  </div>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        title="Overzicht van interim opdrachten binnen de overheid"
                        className="text-base leading-6 text-white hover:text-gray-200 nuxt-link-exact-active nuxt-link-active"
                        aria-current="page"
                      >
                        Alle interim opdrachten
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href="/interim-opdrachten-statistiek"
                        title="Volg de interim marktontwikkelingen "
                        className="text-base leading-6 text-white hover:text-gray-200"
                      >
                        Interim opdrachten statistiek
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Overheidsorganisaties die interim opdrachten beschikbaar stellen"
                        className="text-base leading-6 text-white hover:text-gray-200"
                      >
                        Inhurende organisaties
                      </a>
                    </li>
                    <li>
                      <a
                        href="/reviews"
                        title="Help je mee de inhuurmarkt transparant te maken? Beoordeel inhurende organisaties..."
                        className="text-base leading-6 text-white hover:text-gray-200 flex justify-between items-center"
                      >
                        <span>Reviews</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/zzp-starten"
                        title="Starten als zzp'er of freelancer? Deze gids geeft je alle informatie die je nodig hebt! "
                        className="text-base leading-6 text-white hover:text-gray-200 flex justify-between items-center"
                      >
                        <span>zzp startersgids</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="text-sm leading-5 font-semibold text-white tracking-wider uppercase">
                    Informatie
                  </div>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <NavLink
                        to="/over-freep"
                        title="Alles wat je moet weten over de dienstverlening van "
                        className="text-base leading-6 text-white hover:text-gray-200"
                      >
                        Werk Voor Oranje
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
                        to="/detachering"
                        title="Werk Voor Oranje Detachering - dienstverband met de vrijheid van een ondernemer"
                        className="text-base leading-6 text-white hover:text-gray-200"
                      >
                        Werk Voor Oranje Detachering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/vacatures"
                        title="Werk Voor Oranje groeit, groei jij mee?"
                        className="text-base leading-6 text-white hover:text-gray-200"
                      >
                        Werken bij
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
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base leading-6 text-white xl:text-center">
              © Werk Voor Oranje v2.2 : 2023 copyright all right reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
