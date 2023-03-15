import Image from "next/image";
import ContactBackground from "../../public/images/business-min.jpg";

export default function Contact() {
  return (
    <>
      <div className="lg:px-20 sm:px-0 xl:px-20 xl:mx-36 2xl:mx-32">
        <div className="relative">
          <Image
            src={ContactBackground}
            alt="Bg-Contact"
            className="rounded-lg w-full sm:h-[70rem] lg:h-[55rem]"
          />
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-slate-700 opacity-70 lg:rounded-lg sm:rounded-none"></div>
          <div className="absolute top-0 z-40 w-full lg:my-20 sm:my-10">
            <div className="font-bold text-light-gray text-center">
              <p className="uppercase text-sm">
                Instant <span className="text-gold">Query</span>
              </p>
              <h1 className="text-4xl">Contact With JetBizz</h1>
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 p-20 text-light-gray opacity-70">
              <input
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="text"
                name="name"
                placeholder="Name*"
              />
              <input
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="email"
                name="email"
                placeholder="Email*"
              />
              <input
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="tel"
                name="phone"
                placeholder="Phone*"
              />
              <select
                name="subject"
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
              >
                <option value="" key="" selected hidden>
                  Subject 1
                </option>
                <option value="" key="">
                  Subject 2
                </option>
                <option value="" key="">
                  Subject 3
                </option>
                <option value="" key="">
                  Subject 4
                </option>
                <option value="" key="">
                  Subject 5
                </option>
              </select>
              <textarea
                className="lg:col-span-2 sm:col-span-1 p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gold hover:bg-transparent duration-500 hover:text-gold hover:ring hover:ring-gold px-3 py-2 text-lg rounded-full font-semibold"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
