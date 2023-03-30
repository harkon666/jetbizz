import Logo from "./Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import NavIcon from "../components/icons/NavIcon";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const data = [
    {
      route: "/#home",
      href: "#home",
      name: "Home",
    },
    {
      route: "/#services",
      href: "#services",
      name: "Services",
    },
    {
      route: "/#our-deals",
      href: "#our-deals",
      name: "Our Deals",
    },
  ];

  const [section, setSection] = useState([]);

  const [mobile, setMobile] = useState(true);

  const handleClick = () => {
    const target = document.getElementById("navMobile");

    if (mobile) {
      target.classList.remove("hidden");
      target.classList.add("flex");
      setMobile(false);
    }

    if (!mobile) {
      target.classList.remove("flex");
      target.classList.add("hidden");
      setMobile(true);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    setSection(sections);
    window.onscroll = activeNavbar;
  }, []);

  const activeNavbar = () => {
    let scrollY = Math.round(window.pageYOffset);

    section.forEach((element) => {
      const sectionHeight = element.offsetHeight;
      const sectionTop = element.offsetTop;
      let sectionId = element.getAttribute("id");
      const active = document.querySelector(
        ".navigation a[href*=" + sectionId + "]"
      );

      if (scrollY == sectionTop && scrollY <= sectionTop + sectionHeight) {
        active.classList.remove("text-light-gray");
        active.classList.add("text-gold");
      }
    });
  };

  return (
    <>
      <header>
        <nav className="lg:flex justify-between items-center w-full sm:hidden">
          <div>
            <a href="#home">
              <figure>
                <Logo />
              </figure>
            </a>
          </div>
          <ul className="navigation flex justify-between space-x-5 font-semibold">
            {data.map((data, i) => {
              if (router.pathname === "/") {
                return (
                  <li key={i}>
                    <a
                      className="text-light-gray hover:text-gold
                  "
                      href={data.href}
                    >
                      {data.name}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={i}>
                    <Link
                      className="text-light-gray hover:text-gold
                    "
                      href={data.route}
                    >
                      {data.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
          <div></div>
        </nav>

        <nav className="lg:hidden sm:block w-full z-[100]">
          <div className="flex justify-between items-center w-full">
            <a href="#home">
              <figure>
                <Logo />
              </figure>
            </a>

            <button
              onClick={handleClick}
              className="bg-gold text-light-gray rounded-lg"
            >
              <NavIcon />
            </button>
          </div>
          <ul id="navMobile" className="hidden flex-col font-semibold">
            {data.map((data, i) => {
              if (router.pathname === "/") {
                return (
                  <li className="p-2" key={i}>
                    <a href={data.href}>{data.name}</a>
                  </li>
                );
              } else {
                return (
                  <li className="p-2" key={i}>
                    <Link href={data.route}>{data.name}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
