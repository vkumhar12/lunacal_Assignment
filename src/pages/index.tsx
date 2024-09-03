/* eslint-disable @next/next/no-img-element */
import { Gallery, ProfileComponent } from "@/components";
import Head from "next/head";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lunacal Assignment</title>
        <meta name="description" />
        <meta name="author" content="Vikash Kumhar" />
        <meta property="og:title" content="Lunacal Assignment" />
        <meta property="og:description" content="Assignment description" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>

      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full px-5 md:px-10 lg:px-7 2xl:px-9 bg-[#24292F] lg:h-screen md:h-[77rem]">
        <div className="w-full lg:w-1/2">
          <div className="bg-[#565659] h-[400px] md:h-[500px] lg:h-[689px] rounded-2xl"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-[400px] md:h-[500px] lg:h-[689px] flex flex-col gap-10">
            <div className="w-full lg:w-[720px]  bg-[#373D43] flex justify-center items-center rounded-xl h-full relative">
              <div className="absolute top-6 lg:left-3 md:left-1">
                <AiOutlineQuestionCircle className="text-xl text-gray-400" />
              </div>
              <div className="grid grid-cols-2  gap-1 absolute top-1/2 lg:left-3 md:left-1">
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
              </div>
              <ProfileComponent />
            </div>
            <div className="w-full lg:w-[720px] bg-[#373D43] flex justify-center items-center rounded-xl h-full relative">
              <div className="absolute top-6 lg:left-3 md:left-1">
                <AiOutlineQuestionCircle className="text-xl text-gray-400" />
              </div>
              <div className="grid grid-cols-2  gap-1 absolute lg:left-3 md:left-1">
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
              </div>
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
