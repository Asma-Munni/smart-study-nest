import { getRoomDetails } from "@/lib/room/data";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";
import React from "react";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const roomDetails = await getRoomDetails(id);
  console.log(roomDetails);

  if (!roomDetails) {
    return (
      <section className="min-h-screen bg-[#f8f4ea] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0f172a]">
            Room Not Found
          </h1>
          <p className="mt-3 text-gray-600">
            The room you are looking for does not exist.
          </p>

          <Link
            href="/rooms"
            className="mt-6 inline-block rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-[#f5ecd7] hover:bg-[#d8a84f] hover:text-[#0f172a]"
          >
            Back to Rooms
          </Link>
        </div>
      </section>
    );
  }

  const roomId = roomDetails._id?.toString();

  return (
    <section className="min-h-screen bg-[#f8f4ea] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Room <span className="text-[#d8a84f]">Details</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600">
            Explore complete information about this study room.
          </p>
        </div>

        {/* Details Card */}
        <Card className="overflow-hidden rounded-3xl border border-[#eadfca] bg-white shadow-xl">
          
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-[320px] lg:h-full min-h-[420px] overflow-hidden">
                <img
                  src={roomDetails.image}
                  alt={roomDetails.roomName}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#0f172a]/25"></div>

                <div className="absolute top-5 right-5 rounded-full bg-[#0f172a]/90 px-5 py-2 text-sm font-semibold text-[#f5ecd7] backdrop-blur-md">
                  ${roomDetails.hourlyRate}/hr
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10">
                <p className="mb-3 inline-block rounded-full bg-[#d8a84f]/20 px-4 py-1 text-sm font-medium text-[#8a661f]">
                  Premium Study Space
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                  {roomDetails.roomName}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {roomDetails.description}
                </p>

                {/* Room Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-[#f8f4ea] p-4 border border-[#eadfca]">
                    <p className="text-sm text-gray-500">Floor</p>
                    <h3 className="mt-1 font-bold text-[#0f172a]">
                      {roomDetails.floor}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-[#f8f4ea] p-4 border border-[#eadfca]">
                    <p className="text-sm text-gray-500">Capacity</p>
                    <h3 className="mt-1 font-bold text-[#0f172a]">
                      {roomDetails.capacity} People
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-[#f8f4ea] p-4 border border-[#eadfca]">
                    <p className="text-sm text-gray-500">Hourly Rate</p>
                    <h3 className="mt-1 font-bold text-[#d8a84f]">
                      ${roomDetails.hourlyRate}
                    </h3>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    Amenities
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {roomDetails.amenities?.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full border border-[#d8a84f]/40 bg-[#d8a84f]/15 px-4 py-2 text-sm font-medium text-[#0f172a]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={`/book-room/${roomId}`}
                    className="rounded-xl bg-[#0f172a] px-7 py-3 font-semibold text-[#f5ecd7] shadow-md transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a]"
                  >
                    Book This Room
                  </Link>

                  <Link
                    href="/rooms"
                    className="rounded-xl border border-[#0f172a]/20 px-7 py-3 font-semibold text-[#0f172a] transition duration-300 hover:border-[#d8a84f] hover:bg-[#d8a84f]/20"
                  >
                    Back to Rooms
                  </Link>
                </div>
              </div>
            </div>
          
        </Card>
      </div>
    </section>
  );
};

export default RoomDetailsPage;