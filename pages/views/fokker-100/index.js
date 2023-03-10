import Image from "next/image";
import Header from "../../layouts/Header";

import Image1 from "../../../public/images/Jets/Fokker 100/Fokker-Executive-Jet-indo-jet-charter.jpg";
import Image2 from "../../../public/images/Jets/Fokker 100/VH-FNN-Virgin-Australia-Regional-Fokker-100-Cape-Naturaliste-at-Perth-Airport.jpg";
import Image3 from "../../../public/images/Jets/Fokker 100/VH-FZH-Virgin-Australia-Regional-Fokker-F100-in-the-standard-livery-at-Adelaide-West-Beach-Airport.jpg";

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
import LandingIcon from "@/pages/components/icons/LandingIcon";
import FuelIcon from "@/pages/components/icons/FuelIcon";
import SpeedIcon from "@/pages/components/icons/SpeedIcon";
import RangeIcon from "@/pages/components/icons/RangeIcon";
import EngineIcon from "@/pages/components/icons/EngineIcon";
import Specification from "@/pages/components/Specification";

export default function Fokker50() {
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
                src={Image2}
                className="h-[300px] w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Fokker 100
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
                  src={Image1}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <h1 className="text-4xl leading-tight mb-4">Overview</h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The Fokker 100 is a regional jet produced by Fokker in the
                    Netherlands. The Fokker 100 is based on the Fokker F28 with
                    a fuselage stretched by 18.8 ft to seat up to 109
                    passengers, up from 85.
                  </p>
                </div>
                <div>
                  <ul className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <OverviewList point="Crew: 2" />
                    <OverviewList point="Passengers: 107" />
                    <OverviewList point="Cabin Height: 6 ft 7 In" />
                    <OverviewList point="Cabin Width: 10 ft 2 In" />
                    <OverviewList point="Exterior Height: 27 ft 11 in" />
                    <OverviewList point="Wing Span: 92 ft 2 in" />
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
                <h1 className="text-4xl leading-tight mb-4">Fokker 100</h1>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                <Specification
                  icon={<TakeoffIcon />}
                  value="6000"
                  unit="ft"
                  title="Takeoff Distance"
                />
                <Specification
                  icon={<LandingIcon />}
                  value="4.500"
                  unit="ft"
                  title="Landing Distance"
                />
                <Specification
                  icon={<FuelIcon />}
                  value="3.531"
                  unit="gal Lb"
                  title="Fuel Capacity"
                />
                <Specification
                  icon={<SpeedIcon />}
                  value="546"
                  unit="kts"
                  title="Max Speed"
                />
                <Specification
                  icon={<RangeIcon />}
                  value="1.323"
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
                  Fokker 100 Photo Gallery
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
