import Image from "next/image";
import Header from "@/layouts/Header";

import Shape from "../../../public/images/service-background-shape.png";
import Footer from "@/layouts/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Head from "next/head";
import Contact from "@/components/Contact";
import CardImage from "@/components/CardImage";

import Hawker400 from "../../../public/images/Jets/Hawker-400XP/beechcraft-hawker-400xp.jpg";
import Hawker800 from "../../../public/images/Jets/Hawker 800XP/hawker-800-xp-1.jpg";
import Hawker900 from "../../../public/images/Jets/Hawker 900XP/Hawker-900XP-Ext-JS.webp";
import BAE146 from "../../../public/images/Jets/BAE 146/BAe-146.jpg";
import BeechcraftKingAir200 from "../../../public/images/Jets/Beechcraft King Air 200/1979-Beechcraft-King-Air-200-01.jpg";
import BeechcraftKingAir350 from "../../../public/images/Jets/Beechcraft King Air 350/Beechcraft-King-Air-350i-1090x500.jpg";
import Beechcraft1900D from "../../../public/images/Jets/Beechcraft 1900D/1574693448.jpg";
import Beechjet400A from "../../../public/images/Jets/Beechjet 400a/Hawker-Beechcraft-Beechjet-400A.jpg";
import CesnaCitationXLS from "../../../public/images/Jets/Cessna Citation XLS/Citation_XLS_Ext3-3-1024x723.jpg";
import EmbraerERJ135 from "../../../public/images/Jets/Embraer ERJ 135/Embraer-ERJ-135BJ-Legacy-650-1.jpg";
import EmbraerPhenom300 from "../../../public/images/Jets/Embraer Phenom 300/AeroBT-aero-bk-embraer-Phenom-300_2880x1440.jpg";
import EmbraerLegacy600 from "../../../public/images/Jets/Embraer Legacy 600/AeroBT-Legacy600_2880x1440.jpg";
import Fokker50 from "../../../public/images/Jets/Fokker 50/72434_palf502_412926.jpg";
import Fokker70 from "../../../public/images/Jets/Fokker 70/fokker-70-1.webp";
import Fokker100 from "../../../public/images/Jets/Fokker 100/Fokker-Executive-Jet-indo-jet-charter.jpg";
import GulfstreamIVSP from "../../../public/images/Jets/Gulfstream IV SP/gulfstream-iv-iv-sp.jpg";
import Gulfstream550 from "../../../public/images/Jets/Gulfstream 550/APERTUS+Jordon+G550.jpg";
import Learjet31A from "../../../public/images/Jets/Learjet 31A/Learjet31A_1.jpg";

import AirbusHelicopterEC from "../../../public/images/Helicopters/Airbus Helicopter EC/84518_1660386405.webp";
import Bell206L4 from "../../../public/images/Helicopters/BELL 206 L 4/18012016-29.jpg";
import Bell407 from "../../../public/images/Helicopters/BELL 407/helicopter-bell_407-1024x768.jpg";
import Bell412 from "../../../public/images/Helicopters/BELL 412/Bell-412EP-e1427082029160-1200x718.jpg";
import Bell429 from "../../../public/images/Helicopters/BELL 429/download.jpeg";
import BK117A4 from "../../../public/images/Helicopters/BK117A-4/maxresdefault.jpg";
import EurocopterAS530B3 from "../../../public/images/Helicopters/Eurocopter AS350B-3/AS350B3+-Squirrel-EN.jpg";
import EurocopterB155b1 from "../../../public/images/Helicopters/Eurocopter B155-B1/Eurocopter-EC155-B1-G-HOTB.jpg";
import KamovKA32A from "../../../public/images/Helicopters/Kamov KA-32A/95e8d6de6e842c7859e01faf026c477a_900.jpg";
import Mi171 from "../../../public/images/Helicopters/MI 171/mi-171e_uganda.jpg";
import Mi26 from "../../../public/images/Helicopters/MI 26/miil-mi-26-1.jpg";
import Mi8 from "../../../public/images/Helicopters/MI 8/Mil_Mi-8P,_Baltic_Airlines_(cropped).jpg";
import SuperPuma from "../../../public/images/Helicopters/Super Puma/superpuma-4.jpg";

export default function AddDeals() {
  return (
    <>
      <Head>
        <title>JetBizz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <div className="min-h-screen bg-white py-20 text-semi-black">
            <figure className="relative">
              <img
                src={Bell407}
                className="h-[300px] object-cover object-center w-full"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  All Deals
                </h1>
              </div>
            </figure>

            {/* Overlay */}
            <div className="bg-white max-w-screen-xl mx-auto my-20 grid lg:grid-cols-2 sm:grid-col-1 gap-10">
              <div className="relative">
                <img
                  src={Shape}
                  className="absolute -top-10 -left-8 z-0 sm:hidden lg:block"
                />
                <img
                  src={Fokker70}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <p className="uppercase">
                    Jet <span className="text-gold">Specification</span>
                  </p>
                  <h1 className="text-5xl leading-tight mb-4">Bell 407</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    Ut non augue egestas, commodo velit eget, vestibulum tellus.
                    Curabitur vulputate justo elit, at elementum orci pulvinar
                    vel.
                  </p>
                  <p>
                    The development of center-aisle cabin business jets was
                    accelerated by an August 1956 United States Air Force (USAF)
                    letter of the requirement for two "off-the-shelf" aircraft:
                    the larger UCX (cargo) and smaller UTX (trainer). These
                    requirements differed from standard Air Force.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 space-y-4">
                    <li className="flex justify-start items-start space-x-2">
                      <div>
                        <svg
                          className="bg-gold rounded-full h-6 w-6 text-light-gray"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Seating: 4 Pax</div>
                    </li>
                    <li className="flex justify-start items-start space-x-2">
                      <div>
                        <svg
                          className="bg-gold rounded-full h-6 w-6 text-light-gray"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Cruise Speed: 220 km/h, utilitas sipil</div>
                    </li>
                    <li className="flex justify-start items-start space-x-2">
                      <div>
                        <svg
                          className="bg-gold rounded-full h-6 w-6 text-light-gray"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>
                        Flight: Max. Range : 612 km Max. Flight Time : 3 hours
                        Base : HLP
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-2">
                      <div>
                        <svg
                          className="bg-gold rounded-full h-6 w-6 text-light-gray"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Cabin dimension: 150x120x120 cm (LWH)</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Overlay */}

            <div className="lg:mx-32 my-20 sm:mx-20">
              <div className="font-bold text-semi-black mb-10">
                <p className="uppercase">
                  Our <span className="text-gold">Luxury</span> Jets
                </p>
                <h2 className="text-2xl w-2/3">From 5 up to 40 seater</h2>
                <p>
                  executive jets with luxurious seating configuration and
                  in-flight facilities.
                </p>
              </div>

              <div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                  <CardImage
                    src={Hawker400}
                    product="Hawker-400XP"
                    capacity="6 Seats"
                    href="./hawker-400xp"
                  />
                  <CardImage
                    src={Hawker800}
                    product="Hawker 800XP"
                    capacity="8 Seats"
                    href="./hawker-800xp"
                  />
                  <CardImage
                    src={Hawker900}
                    product="Hawker 900XP"
                    capacity="8 Seats"
                    href="./hawker-900xp"
                  />
                  <CardImage
                    src={BAE146}
                    product="BAE 146 Series"
                    capacity="70 - 112 Seats"
                    href="./bae-146-series"
                  />
                  <CardImage
                    src={BeechcraftKingAir200}
                    product="Beechcraft King Air 200"
                    capacity="6 Seats"
                    href="./beechcraft-king-air-200"
                  />
                  <CardImage
                    src={BeechcraftKingAir350}
                    product="Beechcraft King Air 350"
                    capacity="9-11 Seats"
                    href="./beechcraft-king-air-350"
                  />
                  <CardImage
                    src={Beechcraft1900D}
                    product="Beechcraft 1900D"
                    capacity="19 Seats"
                    href="./beechcraft-1900-d"
                  />
                  <CardImage
                    src={Beechjet400A}
                    product="Beechjet 400A"
                    capacity="7-9 Seats"
                    href="./beechjet-400a"
                  />
                  <CardImage
                    src={CesnaCitationXLS}
                    product="Cessna Citation XLS"
                    capacity="9 Seats"
                    href="./cessna-citation-xls"
                  />
                  <CardImage
                    src={EmbraerERJ135}
                    product="Embraer ERJ 135"
                    capacity="16 Seats"
                    href="./embraer-erj-135"
                  />
                  <CardImage
                    src={EmbraerPhenom300}
                    product="Embraer Phenom 300"
                    capacity="7 Seats"
                    href="./embraer-phenom-300"
                  />
                  <CardImage
                    src={EmbraerLegacy600}
                    product="Embraer Legacy 600"
                    capacity="14 Seats"
                    href="./embraer-legacy-600"
                  />
                  <CardImage
                    src={Fokker50}
                    product="Fokker 50"
                    capacity="46 Seats"
                    href="./fokker-50"
                  />
                  <CardImage
                    src={Fokker70}
                    product="Fokker 70"
                    capacity="85 Seats"
                    href="./fokker-70"
                  />
                  <CardImage
                    src={Fokker100}
                    product="Fokker 100"
                    capacity="107 Seats"
                    href="./fokker-100"
                  />
                  <CardImage
                    src={GulfstreamIVSP}
                    product="Gulfstream IV SP"
                    capacity="14 Seats"
                    href="./gulfstream-iv-sp"
                  />
                  <CardImage
                    src={Gulfstream550}
                    product="Gulfstream 550"
                    capacity="19 Seats"
                    href="./gulfstream-550"
                  />
                  <CardImage
                    src={Learjet31A}
                    product="Learjet 31 A"
                    capacity="6 Seats"
                    href="./learjet-31a"
                  />
                </div>

                <div className="my-20">
                  <div className="font-bold text-semi-black mb-10">
                    <p className="uppercase">
                      Our <span className="text-gold">Luxury</span> Helicopters
                    </p>
                    <h2 className="text-2xl w-2/3">From 5 up to 15 seater</h2>
                    <p>
                      executive helicopters with luxurious seating configuration
                      and in-flight facilities.
                    </p>
                  </div>

                  <div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                      <CardImage
                        src={AirbusHelicopterEC}
                        product="Airbus Helicopter EC"
                        capacity="8 Seats"
                        href="./airbus-helicopter-ec"
                      />
                      <CardImage
                        src={Bell206L4}
                        product="Bell 206 L-4"
                        capacity="4 Seats"
                        href="./bell-206-l-4"
                      />
                      <CardImage
                        src={Bell407}
                        product="Bell 407"
                        capacity="5 Seats"
                        href="./bell-407"
                      />
                      <CardImage
                        src={Bell412}
                        product="Bell 412"
                        capacity="6 Seats"
                        href="./bell-412"
                      />
                      <CardImage
                        src={Bell429}
                        product="Bell 429"
                        capacity="5 Seats"
                        href="./bell-429"
                      />
                      <CardImage
                        src={BK117A4}
                        product="BK 117A-4"
                        capacity="up to 10 Seats"
                        href="./bk-117a-4"
                      />
                      <CardImage
                        src={EurocopterAS530B3}
                        product="Eurocopter AS350-B3"
                        capacity="4 Seats"
                        href="./eurocopter-as350-b3"
                      />
                      <CardImage
                        src={EurocopterB155b1}
                        product="Eurocopter B155-B1"
                        capacity="4-8 Seats"
                        href="./eurocopter-b155-b1"
                      />
                      <CardImage
                        src={KamovKA32A}
                        product="Kamov KA-32A"
                        capacity="13 Seats"
                        href="./kamov-ka-32a"
                      />
                      <CardImage
                        src={Mi171}
                        product="MI 171"
                        capacity="4-8 Seats"
                        href="./mi-171"
                      />
                      <CardImage
                        src={Mi8}
                        product="MI 8"
                        capacity="4-8 Seats"
                        href="./mi-8"
                      />
                      <CardImage
                        src={Mi26}
                        product="MI 26"
                        capacity="4-8 Seats"
                        href="./mi-26"
                      />
                      <CardImage
                        src={SuperPuma}
                        product="Super Puma"
                        capacity="20-24 Seats"
                        href="./super-puma"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
