import { useEffect } from "react";
import GroupIcon from "../icons/GroupIcon";

interface Props {
  name: string;
  last_active: string;
  isSelected: string;
  setSelected: (selected: string) => void;
}

const RoleCard = ({ name, last_active, isSelected, setSelected }: Props) => {
  return (
    <div className="w-100">
      <div
        className={`rounded-md bg-white p-5 text-gray-600 transition-all shadow ${
          isSelected === name &&
          "text-primary-default ring-primary-default ring-offset-2 ring-1"
        }`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <span className="peer-checked:text-primary-default">
                <GroupIcon />
              </span>
              <div className="flex flex-col gap-2">
                <div>
                  <p
                    className={`text-xs font-[600] text-gray-700 ${
                      isSelected === name && "text-primary-default"
                    }`}
                  >
                    {name}
                  </p>
                  <p className="text-xs font-normal  peer-checked:text-primary-default">
                    Last active {last_active}
                  </p>
                </div>
                <div className="flex gap-2">
                  {isSelected !== name && (
                    <p
                      className="cursor-pointer text-xs font-normal  peer-checked:text-primary-default"
                      onClick={() => setSelected(name)}
                    >
                      Set as default
                    </p>
                  )}

                  <p className="text-xs peer-checked:text-primary-default font-bold">
                    Edit
                  </p>
                </div>
              </div>
            </div>
            <div>
              {isSelected === name ? (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                  />
                </svg>
              ) : (
                <div className="rounded-full bg-base-default border border-gray-200 w-4 h-4"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
