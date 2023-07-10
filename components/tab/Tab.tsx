"use client";


const Tab = ({ view, setView}: { view: string, setView: (value: string) => void}) => {

    const tabs = [
      { name: "My details", value: "details" },
      { name: "Profile", value: "profile" },
      { name: "Password", value: "password" },
      { name: "Team", value: "team" },
      { name: "Plan", value: "paln" },
      { name: "Roles", value: "role" },
      { name: "Notifications", value: "notifications" },
      { name: "Integrations", value: "integrations" },
      { name: "API", value: "api" },
    ];

  
    return (
      <ul className="flex  bg-base-default  lg:w-fit rounded-xl w-full max-w-[800px] overflow-y-hidden md:overflow-x-scroll no-scrollbar ">
        {tabs.map((tab, i) => {
          return (
            <li
              className={`border border-gray-200 bg-base-default cursor-pointer flex-shrink-0 ${
                i === 0 && "rounded-l-xl"
              } ${i === tabs.length - 1 && "rounded-r-xl"}`}
              key={i}
            >
              <p
                onClick={() => setView(tab.value)}
                className={`tab-link ${view === tab.value && "link-active"}`}
              >
                {tab.name}
              </p>
            </li>
          );
        })}
      </ul>
    );
}

export default Tab