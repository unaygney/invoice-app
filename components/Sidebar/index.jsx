"use client";
import { useTheme } from "@/context/Theme/ThemeContext";
import React from "react";

import MoonImg from "./images/moon.svg";
import PointImg from "./images/point.svg";
import { Popconfirm, Avatar } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getFirstLetter } from "@/utils/getFirstLetter";
import { getUserData } from "@/context/Theme/AuthContext";

export default function SideBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { userData } = getUserData();
  console.log(userData);

  const confirm = (e) => {
    router.push("/login");
  };

  const cancel = (e) => {
    console.log("hayir tiklandi");
  };

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <aside className="w-full h-[72px] bg-[#373b53] lg:w-[103px] lg:h-screen ">
      <div className="flex lg:flex-col w-full h-full justify-between ">
        <div className="bg-purple flex items-center justify-center w-[72px] h-[72px] lg:h-[103px] lg:w-full rounded-r-[20px]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 "
            viewBox="0 0 31 29"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.28804 0L15.5 14.3876L22.712 3.41999e-07C27.64 2.57528 31 7.70752 31 13.6185C31 22.1134 24.0604 28.9999 15.5 28.9999C6.93959 28.9999 0 22.1134 0 13.6185C0 7.70752 3.35998 2.57528 8.28804 0Z"
              fill="white"
            />
          </svg>
        </div>
        {/* theme button and profile img */}
        <div className="flex lg:flex-col items-center">
          <div className="mr-6 flex items-center justify-center lg:mr-0 lg:mb-7">
            <button onClick={handleClick}>
              {theme ? <PointImg /> : <MoonImg />}
            </button>
          </div>
          <div className="flex items-center justify-center w-20 h-full border-l lg:border-t lg:border-l-0 border-[#494E6E] lg:w-full lg:h-20 ">
            <div className="w-8 h-8  rounded-full  relative">
              <Popconfirm
                title="Delete the task"
                description="Are you sure you want to log out?"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                okText="Yes"
                cancelText="No"
                onConfirm={confirm}
                onCancel={cancel}
              >
                <button className="w-8 h-8 relative">
                  <Avatar style={{ verticalAlign: "middle" }} size="large">
                    {getFirstLetter("guney")}
                  </Avatar>
                </button>
              </Popconfirm>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
