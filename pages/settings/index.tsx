"use client";
import { useState, useEffect } from "react";
import { usePageName } from "../../hooks/usePageName";

import Tab from "@/components/tab/Tab";

import RolesTab from "@/components/roles/RolesTab";

export default function Home() {
  const [view, setView] = useState("role");
  const { pathname } = usePageName()

  const handleSetView = (value: string) => {
    setView(value);
  };

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/route");
        const data = await res.json();

        setTableData(data.data.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={` flex flex-col gap-6 ${isLoading && "skeleton-loader"}`}>
      <div>
        <h2 className="display-medium capitalize">{ pathname}</h2>
        <p className="text-gray-400 text-sm font-normal">
          Manage your team and preferences here.
        </p>
      </div>

      <div className="w-full">
        <Tab view={view} setView={(value: string) => handleSetView(value)} />
      </div>

      {view === "role" ? (
        <RolesTab isLoading={isLoading} roles={tableData} />
      ) : (
        <h2>Under Construction</h2>
      )}
    </div>
  );
}
