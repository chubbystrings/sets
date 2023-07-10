import React, { useState, useEffect, SyntheticEvent } from "react";
import Image from "next/image";
import ActiveUsers from "../../public/avatar_group.svg";
import { FiDownloadCloud } from "react-icons/fi";
import { BsCheck, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

export default function Table({ roles, isLoading}: {roles: Record<string, any>[], isLoading?: boolean}) {
  const [sortType, setSortType] = useState('asc')
  const [sortedRoles, setSortedRoles] = useState<Record<string, any>[]>([]);
  // const [checkAll, setCheckAll] = useState(false);
  const [checks, setChecks] = useState<string[]>([])

  const handleCheckAll = (e: any) => {
    if (e.target.checked) {
      setChecks(() => roles.map((role) => role.name ))
    } else {
      setChecks([])
    }
  }

  const handleSingleCheck = (e: any) => {
    if (checks.includes(e as string)) {
      setChecks(() => checks.filter((check) => check !== e));
    } else {
      setChecks((prev) => [...prev, e])
    }
  }

  const handleSortAsc = () => {
    sortedRoles.sort((a, b) => a.name.localeCompare(b.name));
    setSortType("asc");
  }

  const handleSortDesc = () => {
    sortedRoles.sort((a, b) => b.name.localeCompare(a.name));
    setSortType("desc");
  };

  

  useEffect(() => {
    if (!isLoading) {
      const newRoles = [...roles].sort((a, b) => a.name.localeCompare(b.name));
      setSortedRoles([...newRoles])
    }
  }, [isLoading]);

  

  
  return (
    <>
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden  hidden md:block">
        <div></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden mb-8 mt-4">
            <table className="border-collapse table-auto w-full title-small">
              <thead>
                <tr>
                  <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400  text-left">
                    <input
                      type="checkbox"
                      value="all"
                      onChange={handleCheckAll}
                    />
                  </th>
                  <th className="border-b  font-medium p-4 pt-0 pb-3 text-slate-400  text-left">
                    <div className="flex items-center title-small gap-2">
                      <span className="text-slate-400">Name</span>
                      {sortType === "desc" ? (
                        <span className="flex items-center title-medium cursor-pointer text-slate-400">
                          <BsArrowDownShort onClick={() => handleSortAsc()} />
                        </span>
                      ) : (
                        <span className="flex items-center title-medium cursor-pointer text-slate-400">
                          <BsArrowUpShort onClick={() => handleSortDesc()} />
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="border-b  font-medium p-4 pr-8 pt-0 pb-3 text-slate-400  text-left">
                    Type
                  </th>
                  <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                    Date created
                  </th>
                  <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400  text-left">
                    Status
                  </th>
                  <th className="border-b  font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                    Role Users
                  </th>
                  <th className="border-b  font-medium p-4 pr-8 pt-0 pb-3 text-slate-400text-left"></th>
                </tr>
              </thead>
              <tbody className="bg-white  title-small">
                {sortedRoles.map((data: any, i: number) => {
                  return (
                    <tr key={i}>
                      <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
                        <input
                          type="checkbox"
                          value={data.name}
                          onChange={() => handleSingleCheck(data.name)}
                          checked={checks.includes(data.name)}
                        />
                      </td>
                      <td className="border-b border-slate-100  p-4 text-slate-500 title-small ">
                        {data.name}
                      </td>
                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 uppercase title-small">
                        {data.type}
                      </td>
                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 title-small">
                        {data.created_at}
                      </td>
                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">
                        <div className={`pill  ${data.status}`}>
                          <span>{data.status === "active" && <BsCheck />}</span>
                          <span className="text-xs">{data.status}</span>
                        </div>
                      </td>
                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">
                        <Image src={ActiveUsers} alt="active users" />
                      </td>
                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">
                        <FiDownloadCloud />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl "></div>
      </div>
      <div className="not-prose relative bg-secondary-default rounded-xl overflow-hidden md:hidden block">
        <div></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden mb-8 mt-4">
            <table className="border-collapse w-full table-fixed title-small">
              <thead>
                <tr>
                  <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400  text-left w-1">
                    <input
                      type="checkbox"
                      value="all"
                      onChange={handleCheckAll}
                    />
                  </th>
                  <th className="border-b  font-medium p-4 pt-0 pb-3 text-slate-400  text-left">
                    <div className="flex items-center title-small gap-2">
                      <span className="text-slate-400">Name</span>
                      {sortType === "desc" ? (
                        <span className="flex items-center title-medium cursor-pointer text-slate-400">
                          <BsArrowDownShort onClick={() => handleSortAsc()} />
                        </span>
                      ) : (
                        <span className="flex items-center title-medium cursor-pointer text-slate-400">
                          <BsArrowUpShort onClick={() => handleSortDesc()} />
                        </span>
                      )}
                    </div>
                  </th>

                  <th className="border-b  font-medium p-4 pr-8 pt-0 pb-3 text-slate-400  text-left">
                    Date created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {sortedRoles.map((data, i) => {
                  return (
                    <tr key={`${data}-${i}`}>
                      <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
                        <input
                          type="checkbox"
                          value={data.name}
                          onChange={() => handleSingleCheck(data.name)}
                          checked={checks.includes(data.name)}
                        />
                      </td>
                      <td className="border-b border-slate-100  p-4 text-slate-500 title-small ">
                        {data.name}
                      </td>

                      <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">
                        {data.created_at}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"></div>
      </div>
    </>
  );
}
