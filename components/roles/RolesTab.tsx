import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";
import RoleCard from "../card/Role";
import MailIcon from "../icons/MailIcon";
import { FiDownloadCloud } from "react-icons/fi";
import Table from "../table/Table";
import Dropdown from "../dropdown/Dropdown";

const RolesTab = ({
  isLoading,
  roles,
}: {
  isLoading?: boolean;
  roles: Record<string, any>[];
}) => {
  const [checked, setChecked] = useState("my-account");
  const [addRole, setAddRole] = useState("");

  const handleAddRole = (role: string) => {

    const isExist = userRoles.some((r) => r.name === role )

    if (isExist) {
      notify("This role already added to user")
    } else {
      let newRole = roles.filter((r) => r.name === role)
      if (newRole[0]) {
       const r = { ...newRole[0], name: newRole[0].name, last_active: "06/2023" }
        setUserRoles((prev) => [r, ...prev]);
        notify("Role added to user", true);
      }
    }

  }

  const [userRoles, setUserRoles] = useState<
    { name: string; last_active: string }[]
  >([]);

  const [selected, setIsSelected] = useState("Sales personnel");

  const notify = (msg: string, type?: boolean) => {
    if (!type) {
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (roles) {
      setUserRoles((prev) =>
        roles
          .slice(3)
          .map((role) => ({ ...role, name: role.name, last_active: "06/2023" }))
      );
    }
  }, [isLoading]);
  return (
    <>
      <div>
        <h2 className="title-large">User Roles</h2>
        <p className="text-gray-400 text-sm font-normal">
          Manage your team and preferences here.
        </p>
      </div>
      <hr className="text-gray-200 " />

      <div className="flex gap-5 mt-3">
        <div className="flex flex-wrap items-start  flex-col md:flex-row gap-5 w-[100%] sm:w-[80%] md:w-[60%]">
          <div>
            <p className="text-sm font-normal text-gray-700">Connected email</p>
            <p className="text-sm font-normal text-gray-400">
              Select role account
            </p>
          </div>
          <div className="flex-col flex gap-3 flex-1 py-1">
            <label className="form-control">
              <input
                type="radio"
                name="radio"
                value="my-account"
                checked={checked === "my-account"}
                onChange={() => setChecked("my-account")}
              />
              <div className=" font-medium">
                <p className=" font-normal text-gray-700">My account email</p>
                <p className="text-sm font-normal text-gray-400">
                  olivia@untitledui.com
                </p>
              </div>
            </label>

            <label className="form-control">
              <input
                type="radio"
                name="radio"
                value="alternative"
                checked={checked === "alternative"}
                onChange={() => setChecked("alternative")}
              />
              <div className="flex flex-col gap-2 w-full">
                <p className=" text-gray-700">An alternative email</p>
                <div className="w-100 relative">
                  <span className="absolute left-2 top-1/2  -translate-y-1/2 font-bold">
                    <MailIcon />
                  </span>
                  <input
                    className="pl-8 pr-3 rounded-md py-2 outline-none w-full border border-gray-300"
                    placeholder="billing@untitledui.com"
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 " />

      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div>
          <p className="text-sm font-normal text-gray-700">Active Role</p>
          <p className="text-sm font-normal text-gray-400">
            Select active role available to the user.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-3">
            {userRoles.map((v, i) => {
              return (
                <RoleCard
                  key={i}
                  {...v}
                  setSelected={(name) => setIsSelected(name)}
                  isSelected={selected}
                />
              );
            })}
            <div
              className="flex gap-1 items-center text-gray-500 text-sm cursor-pointer"
            >
              <span className="text-gray-500 text-lg">
                <IoIosAdd />
              </span>
              <Dropdown
                setValue={handleAddRole}
                value={addRole}
                title="Add role to user"
                list={roles.map((l) => l.name)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-start sm:items-center w-100 mt-4">
        <h2 className="text-gray-900 font-medium text-lg">User Roles</h2>
        <div>
          <button
            type="button"
            className="outline-none border border-gray-300 rounded-lg bg-base-default flex gap-2 justify-center items-center text-gray-700 px-3 py-2"
            onClick={() => notify("Oops cannot download try later")}
          >
            <span className="text-gray-700">
              <FiDownloadCloud />
            </span>
            <span>Download all</span>
          </button>
        </div>
      </div>

      <div className="mt-4 -mb-3">
        <Table roles={roles} isLoading={isLoading} />
      </div>
    </>
  );
};

export default RolesTab;
