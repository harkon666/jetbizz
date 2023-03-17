import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="grid lg:grid-cols-4 sm:grid-cols-1 items-end lg:items-start gap-10">
          <section>
            <Logo />

            <p>
              Flynext was founded in 1991 by a group of safety-focused
              professionals who created The Wingman Standard for rigorously
              vetting air charter operators.
            </p>
          </section>
          <section className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              About Us
            </h1>
            <a href="" className="hover:text-gold">
              About Us
            </a>
            <a href="" className="hover:text-gold">
              Our Course
            </a>
            <a href="" className="hover:text-gold">
              Packages
            </a>
            <a href="" className="hover:text-gold">
              Service
            </a>
            <a href="" className="hover:text-gold">
              Contacts
            </a>
          </section>
          <section className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              How It Works
            </h1>
            <a href="" className="hover:text-gold">
              Air Ambulance
            </a>
            <a href="" className="hover:text-gold">
              Business Jet Charter
            </a>
            <a href="" className="hover:text-gold">
              {" "}
              Private Helicopter
            </a>
            <a href="" className="hover:text-gold">
              Global Jet Charter
            </a>
            <a href="" className="hover:text-gold">
              Cessna Citation CJ2
            </a>
          </section>
          <section className="flex flex-col space-y-4">
            <h1 className="border-b-2 text-semibold text-xl border-gold">
              Get Started
            </h1>
            <a href="" className="hover:text-gold">
              Dubai Special Tour Package
            </a>
            <a href="" className="hover:text-gold">
              Tokyo Japan Tour Package
            </a>
            <a href="" className="hover:text-gold">
              Maldives Sea Beach Tour
            </a>
            <a href="" className="hover:text-gold">
              Nepal Kathmandu Package
            </a>
            <a href="" className="hover:text-gold">
              Mord of Goods Package
            </a>
          </section>
        </section>
        <section className="grid lg:grid-cols-4 sm:grid-cols-2 mt-20 p-10 bg-white text-semi-black">
          <section>
            <h1 className="mb-4 font-semibold text-xl">Canada Address</h1>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 (0)20 3671 5709</p>
          </section>
          <section>
            <h1 className="mb-4 font-semibold text-xl">Canada Address</h1>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 (0)20 3671 5709</p>
          </section>
          <section>
            <h1 className="mb-4 font-semibold text-xl">Canada Address</h1>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 (0)20 3671 5709</p>
          </section>
          <section>
            <h1 className="mb-4 font-semibold text-xl">Canada Address</h1>
            <p>Europe 45 Gloucester Road</p>
            <p>London DT1M 3BF</p>
            <p>+44 (0)20 3671 5709</p>
          </section>
        </section>
        <section className="flex justify-end mt-20">
          <p>@2022 Copyright by Flynext. All rights reserved Themeim</p>
        </section>
      </footer>
    </>
  );
}
