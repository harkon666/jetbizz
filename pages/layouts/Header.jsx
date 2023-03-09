import Logo from "./Logo";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const data = [
    {
      route: "/",
      href: "#section-1",
      name: "Home",
    },
    
  ];

  return (
    <>
      <header>
        <a href="#home">
          <figure>
            <Logo />
          </figure>
        </a>

        <nav>
          <ul className="flex justify-between space-x-5 font-semibold">
            <li>
              {router.pathname === "/" ? (
                <a href="/#home">Home</a>
              ) : (
                <Link href="/">Home</Link>
              )}
            </li>
            <li>
              <a href="/#pages">Pages</a>
            </li>
            <li>
              <a href="/#service">Service</a>
            </li>
            <li>
              <a href="/#our-deals">Our Deals</a>
            </li>
            <li>
              <a href="/#packages">Packages</a>
            </li>
            <li>
              <a href="/#our-blogs">Our Blogs</a>
            </li>
          </ul>
        </nav>

        <div></div>
      </header>
    </>
  );
}
