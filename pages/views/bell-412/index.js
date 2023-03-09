import Image from "next/image";
import Header from "../../layouts/Header";

import Bell1 from "../../../public/images/Helicopters/BELL 412/412-VIP-seats-cabin.jpg";
import Bell2 from "../../../public/images/Helicopters/BELL 412/Bell-412EP-e1427082029160-1200x718.jpg";
import Bell3 from "../../../public/images/Helicopters/BELL 412/LAFD_Bell_412_(cropped).jpg";

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

export default function Bell412() {
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
                src={Bell2}
                className="h-[300px] w-full object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  Bell 412
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
                  src={Bell1}
                  className="absolute top-0 left-0 z-10 aspect-[1/1] max-w-full max-h-full object-cover object-center rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center sm:px-20 lg:px-0">
                <div className="text-sm font-bold">
                  <p className="uppercase">
                    Jet <span className="text-gold">Specification</span>
                  </p>
                  <h1 className="text-5xl leading-tight mb-4">Bell 412</h1>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Cruise Speed: 226 km/h</div>
                    </li>
                    <li className="flex justify-start items-start space-x-2">
                      <div>
                        <svg
                          className="bg-gold rounded-full h-6 w-6 text-light-gray"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>
                        Flight: Max. Range : 662 km Max. Flight Time : 3.8 hours
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Cabin & Baggage Vol: 6.2 m3 | 0.8 m3</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Overlay */}

            {/* Jet Gallery */}
            <div className="w-full bg-light-gray py-20">
              <div className="text-center">
                <p className="text-sm uppercase font-bold">
                  Jet <span className="text-gold">Gellery</span>
                </p>
                <h1 className="text-4xl font-bold my-4">
                  Bell 412 Photo Gallery
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
                      src={Bell1}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Bell2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Bell3}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Bell1}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Bell2}
                      className="aspect-[2/1] bg-center bg-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={Bell3}
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
