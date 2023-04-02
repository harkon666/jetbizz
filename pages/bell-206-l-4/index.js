import Image from "next/image";
import Header from "@/layouts/Header";

import Footer from "@/layouts/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Head from "next/head";
import TravelKitAmenity from "@/components/TravelKitAmenity";
import Contact from "@/components/Contact";
import OverviewList from "@/components/OverviewList";
import Specification from "@/components/Specification";
import TakeoffIcon from "@/components/icons/TakeoffIcon";
import LandingIcon from "@/components/icons/LandingIcon";
import FuelIcon from "@/components/icons/FuelIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import RangeIcon from "@/components/icons/RangeIcon";
import EngineIcon from "@/components/icons/EngineIcon";
import BackButton from "@/components/BackButton";

export default function Bell206L4() {
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
                src={"images/Helicopters/BELL 206 L 4/18012016-29.jpg"}
                className="h-[300px] w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Bell 206 L-4
                </h1>
              </div>
            </figure>

            {/* Overlay */}
            <div className="flex justify-end">
              <BackButton href="../all-deals" />
            </div>
            <div className="bg-white max-w-screen-xl mx-auto my-20 grid lg:grid-cols-2 sm:grid-col-1 gap-10">
              <div className="relative">
                <img
                  src={"images/service-background-shape.png"}
                  className="absolute -top-10 -left-8 z-0 sm:hidden lg:block"
                />
                <img
                  src={
                    "images/Helicopters/Bell 206 L 4/iyNL4qS0mFRlBjcQMOgJHKU3Y6nMUmdr4gG8r9kfYv2aa.jpg"
                  }
                  className="absolute top-0 left-0 z-10 aspect-[2/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center px-10 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Bell 206 is a family of two-bladed, single- and
                    twin-engined helicopters, manufactured by Bell Helicopter at
                    its Mirabel, Quebec, plant. Originally developed as the Bell
                    YOH-4 for the United States Army's Light Observation
                    Helicopter program, it was not selected by the Army. Bell
                    redesigned the airframe and successfully marketed the
                    aircraft commercially as the five-place Bell 206A JetRanger.
                    The new design was eventually selected by the Army as the
                    OH-58 Kiowa.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 space-y-4">
                    <OverviewList point="Crew: 1" />
                    <OverviewList point="Passengers: 4" />
                    <OverviewList point="Cabin Volume: 73 cu ft" />
                    <OverviewList point="Cabin Width: 3 ft 9 In" />
                    <OverviewList point="Cabin Height: 4 ft 2 In" />
                    <OverviewList point="Internal Baggage: 2 cu ft" />
                  </ul>
                </div>
              </div>
            </div>
            {/* Overlay */}

            <div className="w-full py-20 lg:px-32 px-10">
              <div className="text-sm font-bold text-center">
                <p className="uppercase">
                  Heli <span className="text-gold">Specification</span>
                </p>
                <h1 className="text-4xl leading-tight mb-4">Bell 206 L-4</h1>
              </div>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<FuelIcon />}
                  value="742"
                  unit="Lb"
                  title="Fuel Capacity"
                />

                <Specification
                  icon={<SpeedIcon />}
                  value="110"
                  unit="kts"
                  title="Max Speed"
                />

                <Specification
                  icon={<RangeIcon />}
                  value="270"
                  unit="nm"
                  title="VFR Max Range"
                />

                <Specification
                  icon={<EngineIcon />}
                  value="1"
                  unit=""
                  title="Total Engines"
                />
              </div>
            </div>

            {/* Jet Gallery */}
            <div className="w-full bg-light-gray py-20">
              <div className="text-center">
                <p className="text-sm uppercase font-bold">
                  Jet <span className="text-gold">Gellery</span>
                </p>
                <h1 className="text-4xl font-bold my-4">
                  Bell 206 L-4 Photo Gallery
                </h1>
              </div>
              <div className="xs:px-10 sm:px-32 flex justify-center items-center">
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
                    <img
                      src={"images/Helicopters/BELL 206 L 4/18012016-29.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Helicopters/Bell 206 L 4/18012016-57.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Helicopters/Bell 206 L 4/iyNL4qS0mFRlBjcQMOgJHKU3Y6nMUmdr4gG8r9kfYv2aa.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Helicopters/BELL 206 L 4/18012016-29.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Helicopters/Bell 206 L 4/18012016-57.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Helicopters/Bell 206 L 4/iyNL4qS0mFRlBjcQMOgJHKU3Y6nMUmdr4gG8r9kfYv2aa.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* Jet Gallery */}

            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
