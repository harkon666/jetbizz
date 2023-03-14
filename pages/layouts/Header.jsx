import Logo from "./Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavIcon } from "../components/icons/NavIcon";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const data = [
    {
      route: "/#home",
      href: "#home",
      name: "Home",
    },
    {
      route: "/#pages",
      href: "#pages",
      name: "Pages",
    },
    {
      route: "/#service",
      href: "#service",
      name: "Service",
    },
    {
      route: "/#our-deals",
      href: "#our-deals",
      name: "Our Deals",
    },
    {
      route: "/#packages",
      href: "#packages",
      name: "Packages",
    },
    {
      route: "/#our-blogs",
      href: "#our-blogs",
      name: "Our Blogs",
    },
  ];

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
          <ul className="flex justify-between space-x-5 font-semibold">
            {data.map((data) => {
              if (router.pathname === "/") {
                return (
                  <li>
                    <a href={data.href}>{data.name}</a>
                  </li>
                );
              } else {
                return (
                  <li>
                    <Link href={data.route}>{data.name}</Link>
                  </li>
                );
              }
            })}
          </ul>
          <div></div>
        </nav>

        <nav className="lg:hidden sm:block w-full z-[100px]">
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
            {data.map((data) => {
              if (router.pathname === "/") {
                return (
                  <li className="p-2">
                    <a href={data.href}>{data.name}</a>
                  </li>
                );
              } else {
                return (
                  <li className="p-2">
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
