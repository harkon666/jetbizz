import Image from "next/image";
import Link from "next/link";

export default function CardImage(props) {
  return (
    <>
      <figure className="w-full bg-white rounded-xl shadow-md">
        <Image src={props.src} className="rounded-t-xl aspect-[1/1] object-center object-cover" />
        <figcaption className="px-5 font-semibold">
          <h1 className="text-xl pt-5">{props.product}</h1>
          <div className="flex justify-between items-center mt-4">
            <p>{props.capacity}</p>
          </div>
          <div className="py-5 w-full border-t border-gray-300 my-4">
            <a href="#" className="hover:text-gold hover:ml-2 duration-500">
              {!props.capacity ? <Link href={props.href}>Read More</Link> : <Link href={props.href}>Book Now</Link>}
            </a>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
