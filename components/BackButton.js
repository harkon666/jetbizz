import Link from "next/link";
import BackIcon from "./icons/BackIcon";

export default function BackButton(props) {
  return (
    <>
      <Link href={props.href} className="m-4 flex items-center p-2 text-gold rounded-lg border border-gold hover:text-light-gray hover:bg-gold duration-500">
        <BackIcon /> <span className="text-lg font-semibold hover:ml-4">Back</span>
      </Link>
    </>
  );
}
