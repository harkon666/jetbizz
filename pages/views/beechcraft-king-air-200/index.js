import Image from "next/image";
import Header from "../../layouts/Header";

import Image1 from "../../../public/images/Jets/Beechcraft King Air 200/1979-Beechcraft-King-Air-200-01.jpg";
import Image2 from "../../../public/images/Jets/Beechcraft King Air 200/Beechcraft King Air 200 - Cabin 2_0.jpg";
import Image3 from "../../../public/images/Jets/Beechcraft King Air 200/King-Air-200-Charter.jpg";

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
import TakeoffIcon from "@/pages/components/icons/TakeoffIcon";
import FuelIcon from "@/pages/components/icons/FuelIcon";
import SpeedIcon from "@/pages/components/icons/SpeedIcon";
import EngineIcon from "@/pages/components/icons/EngineIcon";
import Specification from "@/pages/components/Specification";
import LandingIcon from "@/pages/components/icons/LandingIcon";
import RangeIcon from "@/pages/components/icons/RangeIcon";

export default function BeechcraftKingAir200() {
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
                  Beechcraft King Air 200
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
                  src={Image2}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Beechcraft Super King Air family is part of a line of
                    twin-turboprop aircraft produced by Beechcraft. The Model
                    200 and Model 300 series were originally marketed as the
                    "Super King Air" family; the "Super" designation was dropped
                    in 1996
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Crew: 2" />
                    <OverviewList point="Passanger: 6" />
                    <OverviewList point="Cabin Volume: 303 cu ft" />
                    <OverviewList point="Bagage: 54 cu ft" />
                    <OverviewList point="Exterior Height: 14 ft 8 in" />
                    <OverviewList point="Length: 43 ft 8 in" />
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
                  Beechcraft King Air 200
                </h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<TakeoffIcon />}
                  value="2.479"
                  unit="ft"
                  title="Takeoff Distance"
                />

                <Specification
                  icon={<LandingIcon />}
                  value="4.417"
                  unit="ft"
                  title="Landing Distance"
                />

                <Specification
                  icon={<FuelIcon />}
                  value="3,645"
                  unit="Lb"
                  title="Fuel Capacity"
                />

                <Specification
                  icon={<SpeedIcon />}
                  value="290"
                  unit="kts"
                  title="Max Speed"
                />

                <Specification
                  icon={<RangeIcon />}
                  value="1.500"
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
                  Beechcraft King Air 200 Photo Gallery
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
