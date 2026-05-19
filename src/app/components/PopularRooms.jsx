import { getAllRooms } from "@/lib/room/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularRooms = async () => {
  const roomsData = await getAllRooms();

  return (
    <section className="bg-[#f8f4ea] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Popular <span className="text-[#d8a84f]">Rooms</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore quiet, comfortable, and well-equipped study rooms designed
            for focused learning and group collaboration.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div
              key={room._id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-[#eadfca]"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                
                  src={room.image}
                  alt={room.roomName}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-[#0f172a]/90 px-4 py-2 text-sm font-semibold text-[#f5ecd7] backdrop-blur-sm">
                  ${room.hourlyRate}/hr
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#0f172a]">
                  {room.roomName}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-2">
                  {room.description}
                </p>

                {/* Info */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-[#f8f4ea] p-3">
                    <p className="text-gray-500">Floor</p>
                    <p className="font-semibold text-[#0f172a]">
                      {room.floor}
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#f8f4ea] p-3">
                    <p className="text-gray-500">Capacity</p>
                    <p className="font-semibold text-[#0f172a]">
                      {room.capacity} People
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {room.amenities?.slice(0, 4).map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-[#0f172a]/10 px-3 py-1 text-xs font-medium text-[#0f172a]"
                    >
                      {amenity}
                    </span>
                  ))}

                  {room.amenities?.length > 4 && (
                    <span className="rounded-full bg-[#d8a84f]/20 px-3 py-1 text-xs font-medium text-[#8a661f]">
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link
                    href={`/rooms/${room._id}`}
                    className="block w-full rounded-xl bg-[#0f172a] px-5 py-3 text-center font-medium text-[#f5ecd7] transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRooms;