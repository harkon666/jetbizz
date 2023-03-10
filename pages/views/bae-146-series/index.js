import Image from "next/image";
import Header from "../../layouts/Header";
import Image1 from "../../../public/images/main-banner-min.png";
import Image2 from "../../../public/images/jets/BAE 146/BAe-146.jpg";
import Image3 from "../../../public/images/jets/BAE 146/bae_146_200-int-1-1024x679.jpg";
import Image4 from "../../../public/images/jets/BAE 146/Microsoft-Flight-Simulator-3-3.webp";

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

export default function BAE146Series() {
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
                className="h-[300px] object-cover object-center"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-transparent"></div>

              <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <h1 className="text-5xl text-light-gray font-semibold">
                  BAE 146 Series
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
                  <h1 className="text-5xl leading-tight mb-4">
                    Overview
                  </h1>
                </div>
                <div className="space-y-2 mb-4 text-base leading-relaxed tracking-wide">
                  <p>
                    The British Aerospace 146 is a short-haul and regional
                    airliner that was manufactured in the United Kingdom by
                    British Aerospace, later part of BAE Systems. Production ran
                    from 1983 until 2001. Manufacture by Avro International
                    Aerospace of an improved version known as the Avro RJ began
                    in 1992.
                  </p>
                </div>
              </div>
            </div>
            {/* Overlay */}

            {/* Specification List */}
            <div className="w-full py-20 lg:px-32 sm:px-10 md:px-20">
              <div className="text-sm font-bold text-center">
                <p className="uppercase">
                  Jet <span className="text-gold">Specification</span>
                </p>
                <h1 className="text-5xl leading-tight mb-4">BAE 146 Series</h1>
              </div>
              <div>
                <table className="table border-collapse border border-slate-300 w-full rounded-lg shadow-lg">
                  <thead>
                    <tr>
                      <th className="p-4">#</th>
                      <th className="p-4">BAE 146-100</th>
                      <th className="p-4">BAE 146-200</th>
                      <th className="p-4">BAE 146-300</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Seats</th>
                      <td className="text-center">70 - 82</td>
                      <td className="text-center">85 - 100</td>
                      <td className="text-center">97 - 112</td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Cabin</th>
                      <td colSpan={3} className="text-center">
                        342m (11.2 ft
                      </td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Fuel</th>
                      <td colSpan={3} className="text-center">
                        11.728 L
                      </td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Speed</th>
                      <td colSpan={3} className="text-center">
                        Mach 0.739
                      </td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Takeoff SL</th>
                      <td className="text-center">3921 ft</td>
                      <td className="text-center">4560 ft</td>
                      <td className="text-center">5036 ft</td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Landing SL</th>
                      <td className="text-center">3870 ft</td>
                      <td className="text-center">3900 ft</td>
                      <td className="text-center">4170 ft</td>
                    </tr>
                    <tr className="border border-slate-300">
                      <th className="p-3 text-left">Fuel Consumption</th>
                      <td className="text-center">5441 Lb/h</td>
                      <td className="text-center">5474 Lb/h</td>
                      <td className="text-center">5549 Lb/h</td>
                    </tr>
                  </tbody>
                </table>
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
                  Hawker 400XP Photo Gallery
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
                      src={Image4}
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
                      src={Image4}
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
