"use client";
import React, { useState } from "react";
import {  usePathname } from "next/navigation";
import Image from "next/image";


import Link from "next/link";
import DashboardIcon from "../icons/DashboardIcon";
import EnterIcon from "../icons/EnterIcon";
import GroupIcon from "../icons/GroupIcon";
import HomeIcon from "../icons/HomeIcon";

import ReportingIcon from "../icons/ReportingIcon";
import SearchIcon from "../icons/SearchIcon";
import SettingsIcon from "../icons/SettingsIcon";
import SupportIcon from "../icons/SupportIcon";
import TasksIcon from "../icons/TasksIcon";
import ProjectsIcon from "../icons/ProjectsIcon";

import newFeatureImage from "../../public/Image.png";
import avatar from "../../public/avatar.svg";
import Logo from "../../public/Logomark.svg";

export default function Navigation() {
  const pathname = usePathname();
  const [isAd, setIsAd] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-1 items-center">
          <span>
            <Image src={Logo} alt="Logo" />
          </span>
          <span className="title-large">Medusa</span>
        </div>
        <div>
          <div className="w-100 relative">
            <input
              className="pl-8 pr-3 rounded-md py-1 outline-none w-full border border-gray-300"
              placeholder="Olivia Rhye"
            />
            <span className="absolute left-2 top-1/2  -translate-y-1/2">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-2 w-full">
          <li
            className={` w-full py-1 ${
              pathname == "/" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <HomeIcon />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <hr className="text-gray-200 " />
          <li
            className={` w-full py-1 ${
              pathname == "/dashboard" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/dashboard"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <DashboardIcon />
              </span>
              <div className="flex items-center justify-between w-full border-gray-500">
                <span>Dashboard</span>
                <span className=" flex justify-center items-center h-5 w-5 rounded-full bg-secondary-default text-gray-600 text-xs">
                  10
                </span>
              </div>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/projects" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/projects"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <ProjectsIcon />
              </span>
              <span>Projects</span>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/tasks" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/tasks"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <TasksIcon />
              </span>
              <span>Tasks</span>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/reporting" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/reporting"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <ReportingIcon />
              </span>
              <span>Reporting</span>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/users" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="users"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <GroupIcon />
              </span>
              <span>Users</span>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/support" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/support"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <SupportIcon />
              </span>
              <span>Support</span>
            </Link>
          </li>
          <li
            className={` w-full py-1 ${
              pathname == "/settings" ? "bg-secondary-default" : ""
            }`}
          >
            <Link
              href="/settings"
              className="flex gap-2 items-center w-100 font-light title-medium"
            >
              <span>
                <SettingsIcon />
              </span>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      {isAd && (
        <div className="bg-secondary-default px-4 py-5">
          <div>
            <p className="text-sm font-medium text-gray-900">
              New features available
            </p>
            <p className="text-sm font-normal text-gray-400">
              Check out the new dashboard view. Pages now load faster.
            </p>
          </div>
          <div className="w-full">
            <Image
              src={newFeatureImage}
              alt="new feature image"
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mt-3">
            <p className="text-primary-default cursor-pointer" onClick={() => setIsAd(false)}>Dismiss</p>
            <p>What's new ?</p>
          </div>
        </div>
      )}

      <hr className="text-gray-200 " />

      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Image src={avatar} alt="avatar" />
          <div>
            <p className="text-xs font-normal text-gray-500">Olivia Rhye</p>
            <p className="text-xs font-normal text-gray-300">
              olivia@gmail.com
            </p>
          </div>
        </div>
        <div>
          <EnterIcon />
        </div>
      </div>
    </div>
  );
}
