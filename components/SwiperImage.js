import Image from "next/image";
import Link from "next/link";

export default function SwiperImage(props) {
  const Figcaption = (props) => {
    if (props.author) {
      return (
        <>
          <figcaption className="absolute top-0 m-5">
            <Link
              href={props.href}
              className="px-4 py-3 bg-white rounded-full text-gold text-sm font-bold"
            >
              {props.category}
            </Link>
          </figcaption>
          <figcaption className="hover:cursor-pointer text-left">
            <p className="text-sm">
              By {props.author} <span>|</span> February 28, 2023
            </p>
            <h1 className="text-xl font-semibold my-4 hover:text-gold">
              {props.title}
            </h1>
          </figcaption>
        </>
      );
    } else {
      return (
        <>
          <figcaption className="absolute top-[60%] mx-5 p-5 bg-white">
            <h1 className="text-gold text-xl font-semibold">{props.title}</h1>
            <p>{props.desc}</p>
          </figcaption>
        </>
      );
    }
  };

  return (
    <>
      <figure>
        <img src={props.src} alt={props.alt} />
        {Figcaption(props)}
      </figure>
    </>
  );
}
