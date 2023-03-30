import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 items-end lg:items-start gap-10">
          <div className="max-h-full max-w-full">
            <Logo />

            <p>
              Jetbizz Aviation is one of exclusive aviation services in Indonesia. Our
              professional focus is providing our clients exceptional jet
              charter service through making every air travel experience as time
              saving, enjoyable, and cost-effective as possible.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              About Us
            </h1>
            <a href="" className="hover:text-gold">
              About Us
            </a>
            <a href="#package" className="hover:text-gold">
              Packages
            </a>
            <a href="#service" className="hover:text-gold">
              Service
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              Private Jets
            </h1>
            <Link href="./hawker-400xp" className="hover:text-gold">
              Hawker 400XP
            </Link>
            <Link href="./hawker-800xp" className="hover:text-gold">
              Hawker 800XP
            </Link>
            <Link href="./hawker-900xp" className="hover:text-gold">
              Hawker 900XP
            </Link>
            <Link href="./cessna-citation-xls" className="hover:text-gold">
              Cessna Citation XLS
            </Link>
            <Link href="./embraer-phenom-300" className="hover:text-gold">
              Embraer Phenom 300
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              Helicopters
            </h1>
            <Link href="./airbus-helicopter-ec" className="hover:text-gold">
              Airbus Helicopter EC
            </Link>
            <Link href="./bell-407" className="hover:text-gold">
              Bell 407
            </Link>
            <Link href="./bell-412" className="hover:text-gold">
              Bell 412
            </Link>
            <Link href="./bell-206-l-4" className="hover:text-gold">
              Bell 206 L-4
            </Link>
            <Link href="./bell-429" className="hover:text-gold">
              Bell 429
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-20 p-10 bg-white text-semi-black">
          <div className="w-1/2">
            <h1 className="mb-4 font-semibold text-xl">Corporation office</h1>
            <p>
              Jl. Mekarwangi No.75 RT.02 RW.012 Sariwaingi, Parongpong, Bandung
              Barat Jawa Barat Indonesia 40559
              <br />
              +62 811-9518-983
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="mb-4 font-semibold text-xl">Operation Office</h1>
            <p>
              Bandara Husein Sastranegara Kav.5 Bandung, Jawa Barat Indonesia
              40174
              <br />
              +62 811-9518-983
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <p>@2022 Copyright by Jetbizz.</p>
        </div>
      </footer>
    </>
  );
}
