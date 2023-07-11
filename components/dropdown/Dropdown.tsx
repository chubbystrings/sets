import React from "react";

export default function Dropdown({
  list,
  title,
  setValue,
}: {
  list: string[];
  title: string;
  setValue: (value: string) => void;
  value: string;
}) {
  return (
    <div className="">
      <div className="dropdown inline-block relative z-10">
        <button className=" text-gray-700 font-semibold rounded inline-flex items-center">
          <span className="mr-1 text-gray-500 text-sm">{title} </span>
        </button>

        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 shadow-md">
          {list.length &&
            list.map((l, i) => {
              return (
                <li className="" key={i} onClick={() => setValue(l)}>
                  <p
                    className="rounded-t bg-base-default hover:bg-secondary-default py-2 px-4 block whitespace-no-wrap"
                  >
                    {l}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
