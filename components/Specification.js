export default function Specification(props) {
  return (
    <>
      <div className="flex flex-col items-center p-10 w-full rounded-lg shadow-md border border-light-purple">
        {props.icon}

        <div className="flex flex-col items-center space-y-4 mt-6">
          <h1 className="text-3xl font-bold">
            {props.value} <span className="text-sm">{props.unit}</span>
          </h1>
          <p className="text-base">{props.title}</p>
        </div>
      </div>
    </>
  );
}
