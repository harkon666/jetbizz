import Image from "next/image";
import Header from "../../layouts/Header";
import Hawker1 from "../../../public/images/main-banner-min.png";
import Hawker2 from "../../../public/images/Jets/Hawker 800XP/hawker-800-xp-1.jpg";
import Hawker3 from "../../../public/images/Jets/Hawker 800XP/hawker-800xp-Exterior-NEW-jS.jpg";
import Hawker4 from "../../../public/images/Jets/Hawker 800XP/N92UP_07.webp";

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
import Specification from "@/pages/components/Specification";
import TakeoffIcon from "@/pages/components/icons/TakeoffIcon";
import LandingIcon from "@/pages/components/icons/LandingIcon";
import FuelIcon from "@/pages/components/icons/FuelIcon";
import SpeedIcon from "@/pages/components/icons/SpeedIcon";
import RangeIcon from "@/pages/components/icons/RangeIcon";

export default function Hawker800XP() {
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
              <Image src={Hawker1} />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Hawker 800XP
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
                  src={Hawker4}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Hawker 800 is a mid-size twinjet corporate aircraft. It
                    is a development of the British Aerospace BAe 125, and was
                    assembled by Hawker Beechcraft.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Seating: 8 VIP" />
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
                      point=" Facility: Cabin Sound System, Fully-Stocked Galley,
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
                <h1 className="text-4xl leading-tight mb-4">Hawker 800XP</h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<TakeoffIcon />}
                  value="5.032"
                  unit="ft"
                  title="Takeoff at Sea Level"
                />
                <Specification
                  icon={<TakeoffIcon />}
                  value="25??C: 7,952"
                  unit="ft"
                  title="Takeoff at 5000???"
                />

                <Specification
                  icon={<LandingIcon />}
                  value="41.000"
                  unit="ft"
                  title="Landing Distance"
                />

                <Specification
                  icon={<FuelIcon />}
                  value="250"
                  unit="gal/h"
                  title="Fuel Consumption"
                />

                <Specification
                  icon={<SpeedIcon />}
                  value="447"
                  unit="kts"
                  title="High Speed Cruise"
                />

                <Specification
                  icon={<RangeIcon />}
                  value="2.540"
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
                  Hawker 800XP Photo Gallery
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
                      src={Hawker2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Hawker3}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Hawker4}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Hawker2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Hawker3}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Hawker4}
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

            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
