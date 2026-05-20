import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import LatestRooms from "./latest-rooms/page";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div className="bg-[#f8f4ea]">
    <Banner></Banner> 
    <div className="text-center my-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Latest <span className="text-[#d8a84f]">Rooms</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore quiet, comfortable, and well-equipped study rooms designed
            for focused learning and group collaboration.
          </p>
        </div>
    <LatestRooms></LatestRooms>
    <HowItWorks></HowItWorks>
    <WhyChooseUs></WhyChooseUs>
    
      
    </div>
  );
}
