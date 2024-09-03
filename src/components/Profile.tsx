import { useState } from "react";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

export const aboutArray = [
  {
    id: "1",
    name: "About Me",
    nameColor: "bg-[#29282F] text-white rounded-2xl ",
  },
  {
    id: "2",
    name: "Experience",
    nameColor: "bg-[#29282F] text-white rounded-2xl",
  },
  {
    id: "3",
    name: "Recommended",
    nameColor: "bg-[#29282F] text-white rounded-2xl",
  },
];

export default function ProfileComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (id: number) => {
    setActiveIndex(id);
  };
  let data;
  switch (activeIndex) {
    case 0:
      data = <AboutMe />;
      break;
    case 1:
      data = <Experiences />;
      break;
    case 2:
      data = <Recommended />;
      break;
    default:
      data = <AboutMe />;
  }
  return (
    <div className="flex justify-center items-center ">
      <div className=" flex flex-col text-white w-full justify-center items-center pt-2">
        <div className="flex justify-evenly items-center overflow-x-scroll bg-black p-2 rounded-2xl example sticky top-0 ">
          {aboutArray.map((item, index) => {
            return (
              <p
                onClick={() => handleClick(index)}
                key={item.id}
                className={`md:px-14 md:py-2 cursor-pointer h-12 whitespace-nowrap flex justify-center items-center duration-300 ease-in-out transition-all ${
                  activeIndex === index
                    ? item.nameColor
                    : " bg-black text-gray-300"
                }`}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col admin-gap  w-[612px] h-[175px] pt-6 ">
          <div className="">{data}</div>
        </div>
      </div>
    </div>
  );
}
