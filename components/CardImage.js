import Image from "next/image";
import Link from "next/link";

export default function CardImage(props) {
  return (
    <>
      <figure className="w-full bg-white rounded-xl shadow-md">
        <img src={props.src} className="rounded-t-xl aspect-[1/1] object-center object-cover" />
        <figcaption className="">
          <h1 className="text-lg p-4 font-bold">{props.product}</h1>
          <div className="font-semibold p-4">
            <p>{props.capacity}</p>
          </div>
          <div className="font-semibold border-t border-slate-300 p-4">
            <span href="#" className="hover:text-gold hover:ml-2 duration-500">
              {!props.capacity ? <Link href={props.href}>Read More</Link> : <Link href={props.href}>Book Now</Link>}
            </span>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
