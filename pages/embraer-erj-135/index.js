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
import TakeoffIcon from "@/components/icons/TakeoffIcon";
import LandingIcon from "@/components/icons/LandingIcon";
import FuelIcon from "@/components/icons/FuelIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import RangeIcon from "@/components/icons/RangeIcon";
import EngineIcon from "@/components/icons/EngineIcon";
import Specification from "@/components/Specification";
import BackButton from "@/components/BackButton";

export default function EmbraerERJ135() {
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
                src={
                  "images/Jets/Embraer ERJ 135/Embraer-ERJ-135BJ-Legacy-650-1.jpg"
                }
                className="h-[300px] w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Embraer ERJ 135
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
                  src={"images/Jets/Embraer ERJ 135/cl-erj-conversions-7.jpg"}
                  className="absolute top-0 left-0 z-10 aspect-[2/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Embraer ERJ family are regional jets designed and
                    produced by the Brazilian aerospace company Embraer. The
                    family includes the ERJ135, ERJ140, and ERJ145, as well as
                    the Legacy 600 business jet and the R-99 family of military
                    aircraft.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Crew: 2" />
                    <OverviewList point="Passengers: 16" />
                    <OverviewList point="Cabin Volume: 1425 cu ft" />
                    <OverviewList point="Cabin Width: 6 ft 11 In" />
                    <OverviewList point="Exterior Height: 22 ft 2 in" />
                    <OverviewList point="Internal Baggage: 42 cu ft" />
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
                <h1 className="text-4xl leading-tight mb-4">Embraer ERJ 135</h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<TakeoffIcon />}
                  value="5.774"
                  unit="ft"
                  title="Takeoff Distance"
                />
                <Specification
                  icon={<LandingIcon />}
                  value="4.462"
                  unit="ft"
                  title="Landing Distance"
                />

                <Specification
                  icon={<FuelIcon />}
                  value="11.321"
                  unit="Lb"
                  title="Fuel Capacity"
                />

                <Specification
                  icon={<SpeedIcon />}
                  value="447"
                  unit="kts"
                  title="Max Speed"
                />

                <Specification
                  icon={<RangeIcon />}
                  value="2.034"
                  unit="nm"
                  title="Max Range"
                />
                <Specification
                  icon={<EngineIcon />}
                  value="2"
                  unit=""
                  title="Total Engines"
                />
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
                  Embraer ERJ 135 Photo Gallery
                </h1>
              </div>
              <div className="px-32 flex justify-center items-center">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,}}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },}}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/cl-erj-conversions-7.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/Embraer-ERJ-135BJ-Legacy-650-1.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/ERJ145-Exterior-5.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/cl-erj-conversions-7.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/Embraer-ERJ-135BJ-Legacy-650-1.jpg"}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={"images/Jets/Embraer ERJ 135/ERJ145-Exterior-5.jpg"}
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
