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
import BackButton from "@/components/BackButton";

export default function Hawker40000XP() {
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
              <img src={"images/main-banner-min.png"} />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Hawker-400XP
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
                  src={"images/Jets/Hawker-400XP/hawker-400xp-interior-1.jpg"}
                  className="absolute top-0 left-0 z-10 aspect-[2/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Hawker 400 is a light business jet. Initially designed
                    and built by Mitsubishi, it has been further developed and
                    updated by the Beech Aircraft Company, now part of Textron
                    Aviation.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Seating: 6 VIP" />
                    <OverviewList point="Air Crew: 2 cockpit, 1 cabin" />
                    <OverviewList point="Cruise Speed: 700 km/h" />
                    <OverviewList
                      point=" Flight: Max. Range : 2.800 km Max. Flight Time : 3 hours
                        Base : HLP"
                    />
                    <OverviewList
                      point=" Cargo: Door Dimension : 0,76 x 1,21 m. Baggage Volume :
                        up to 0,8 m3"
                    />
                    <OverviewList
                      point="Facility: Cabin Sound System, Fully-Stocked Galley,
                        Full-Enclosed Lavatory, Hot Meals, Service, Hot & Cold
                        Water Dispenser, Refrigerator & Coffee Machine."
                    />
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
                <h1 className="text-4xl leading-tight mb-4">Hawker-400XP</h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<TakeoffIcon />}
                  value="3.950"
                  unit="ft"
                  title="Takeoff at Sea Level"
                />
                <Specification
                  icon={<TakeoffIcon />}
                  value="25°C: 6,311"
                  unit="ft"
                  title="Takeoff at 5000’"
                />

                <Specification
                  icon={<LandingIcon />}
                  value="45.000"
                  unit="ft"
                  title="Landing Distance"
                />

                <Specification
                  icon={<FuelIcon />}
                  value="191"
                  unit="gal/h"
                  title="Fuel Consumption"
                />

                <Specification
                  icon={<SpeedIcon />}
                  value="450"
                  unit="kts"
                  title="High Speed Cruise"
                />

                <Specification
                  icon={<RangeIcon />}
                  value="1.333"
                  unit="nm"
                  title="Range"
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
                  Hawker-400XP Photo Gallery
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
                    <img
                      src={
                        "images/Jets/Hawker-400XP/hawker-400xp-interior-1.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Jets/Hawker-400XP/beechcraft-hawker-400xp.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Jets/Hawker-400XP/Starmedevac-hawker-400.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Jets/Hawker-400XP/hawker-400xp-interior-1.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Jets/Hawker-400XP/beechcraft-hawker-400xp.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={
                        "images/Jets/Hawker-400XP/Starmedevac-hawker-400.jpg"
                      }
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* Jet Gallery */}

            {/* Travel Kit Amenity */}
            <TravelKitAmenity />
            {/* Travel Kit Amenity */}

            {/* Contact */}
            <Contact />
            {/* Contact */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
