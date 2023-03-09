import Image from "next/image";
import Header from "../../layouts/Header";

import Image1 from "../../../public/images/Jets/Beechcraft 1900D/1574693448.jpg";
import Image2 from "../../../public/images/Jets/Beechcraft 1900D/images.jpeg";
import Image3 from "../../../public/images/Jets/Beechcraft 1900D/RGE_Eastindo_Berry_BeechRGD-02.jpg";

import Shape from "../../../public/images/service-background-shape.png";
import Footer from "@/pages/layouts/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Head from "next/head";
import TravelKitAmenity from "@/pages/components/TravelKitAmenity";
import Contact from "@/pages/components/Contact";
import OverviewList from "@/pages/components/OverviewList";

export default function BeechcraftKingAir350() {
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
              <Image
                src={Image1}
                className="h-[300px] w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Beechcraft 1900 D
                </h1>
              </div>
            </figure>

            {/* Overlay */}
            <div className="bg-white max-w-screen-xl mx-auto my-20 grid lg:grid-cols-2 sm:grid-col-1 gap-10">
              <div className="relative">
                <Image
                  src={Shape}
                  className="absolute -top-10 -left-8 z-0 sm:hidden lg:block"
                />
                <Image
                  src={Image3}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Beechcraft 1900D is the only 19 seat aircraft in the
                    world to meet FAA's stringent turbine engine rotor burst
                    requirement and the FAR 23. The aircraft has all the modern
                    avionics, instruments and airframe including weather radar
                    and EFIS (semi glass cockpit) that are in modern jetliners.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Crew: 1-2" />
                    <OverviewList point="Passengers: 19" />
                    <OverviewList point="Cabin Volume: 760 cu ft" />
                    <OverviewList point="Internal Baggage: 55 cu ft" />
                    <OverviewList point="Exterior Height: 15 ft 5 in" />
                    <OverviewList point="Length: 57 ft 8 in" />
                  </ul>
                </div>
              </div>
            </div>
            {/* Overlay */}

            {/* Specification List */}
            <div className="w-full py-20 lg:px-32 sm:px-10">
              <div className="text-sm font-bold text-center">
                <p className="uppercase">
                  Jet <span className="text-gold">Specification</span>
                </p>
                <h1 className="text-4xl leading-tight mb-4">
                  Beechcraft 1900 D
                </h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2.5 19h19v2h-19v-2m19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10L8 3.57l-1.91.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33l1.6-.42l5.31-1.43l4.35-1.16L21 11.5c.81-.24 1.28-1.06 1.07-1.86Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">
                      3.470 <span className="text-sm">ft</span>
                    </h1>
                    <p className="text-base">Takeoff Distance</p>
                  </div>
                </div>

                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2.5 19h19v2h-19v-2m7.18-5.73l4.35 1.16l5.31 1.42c.8.21 1.62-.26 1.84-1.06c.21-.79-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.03l-1.93-.5v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17l1.6.43l5.31 1.43Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">
                      4.667 <span className="text-sm">ft</span>
                    </h1>
                    <p className="text-base">Landing Distance</p>
                  </div>
                </div>

                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 2h3c.28 0 .53.11.71.29l2.08 2.09l.8-.79C10 3.2 10.5 3 11 3h6c.5 0 1 .2 1.41.59l1 1C19.8 5 20 5.5 20 6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-.5.2-1 .59-1.41l.79-.8L5.59 4H3V2m8 3v2h6V5h-6m.41 6l-2-2H8v1.41l2 2v3.18l-2 2V19h1.41l2-2h3.18l2 2H18v-1.41l-2-2v-3.18l2-2V9h-1.41l-2 2h-3.18m.59 2h2v2h-2v-2Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">
                      4.458 <span className="text-sm">Lb</span>
                    </h1>
                    <p className="text-base">Fuel Capacity</p>
                  </div>
                </div>

                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41c-.39.39-1.03.39-1.42.01A9.969 9.969 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">
                      280 <span className="text-sm">kts</span>
                    </h1>
                    <p className="text-base">Max Speed</p>
                  </div>
                </div>

                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 9c1.31 0 2.42.83 2.83 2h10.34c.41-1.17 1.52-2 2.83-2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">
                      1.356 <span className="text-sm">nm</span>
                    </h1>
                    <p className="text-base">Max Range</p>
                  </div>
                </div>

                <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 bg-light-purple rounded-full p-4 my-2 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7Z"
                    />
                  </svg>

                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <h1 className="text-3xl font-bold">2</h1>
                    <p className="text-base">Total Engines</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Specification List */}

            {/* Jet Gallery */}
            <div className="w-full bg-light-gray py-20">
              <div className="text-center">
                <p className="text-sm uppercase font-bold">
                  Jet <span className="text-gold">Gellery</span>
                </p>
                <h1 className="text-4xl font-bold my-4">
                  Beechcraft 1900 D Photo Gallery
                </h1>
              </div>
              <div className="px-32 flex justify-center items-center">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <SwiperSlide>
                    <Image
                      src={Image1}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Image2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Image3}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Image1}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Image2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Image3}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* Jet Gallery */}

            <TravelKitAmenity />

            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
