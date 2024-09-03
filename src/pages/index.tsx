/* eslint-disable @next/next/no-img-element */
import { Gallery, ProfileComponent } from "@/components";
import Head from "next/head";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta
          name="description"
          content="A brief description of your page for SEO purposes."
        />
        <meta name="author" content="Vikash Kumhar" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Assignment description" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lunacal Assignment" />
        <meta
          name="twitter:description"
          content="A brief description of your page for Twitter."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>

      <div className="flex gap-5 justify-center items-center w-full px-10 md:px-5 lg:px-7 2xl:px-9 bg-[#24292F] min-h-screen">
        <div className="w-1/2">
          <div className="bg-[#565659] h-[689px] rounded-2xl"></div>
        </div>
        <div className="w-1/2">
          <div className="h-[689px] flex flex-col gap-10">
            <div className="w-[720px] bg-[#373D43] flex justify-center items-center rounded-xl h-full relative">
              <div className="absolute top-11 left-3">
                <AiOutlineQuestionCircle className="text-xl text-gray-400" />
              </div>
              <div className="grid grid-cols-2 absolute top-1/2 left-3">
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
                <img src="/rectangle.png" alt="" className="w-2" />
              </div>
              <ProfileComponent />
            </div>
            <div className="w-[720px] bg-[#373D43] flex justify-center items-center rounded-xl h-full relative">
              <div className="absolute top-6 left-3">
                <AiOutlineQuestionCircle className="text-xl text-gray-400" />
              </div>
              <div className="grid grid-cols-2 absolute top-1/2 left-3">
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
