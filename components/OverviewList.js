export default function OverviewList(props) {
  return (
    <>
      <li className="flex justify-start items-start space-x-2">
        <div>
          <svg
            className="bg-gold rounded-full h-6 w-6 text-light-gray"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div>{props.point}</div>
      </li>
    </>
  );
}
