import React from "react";
import PopularRooms from "../components/PopularRooms";

const SeeAllRoom = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";

  return (
    <div className="bg-[#f8f4ea] min-h-screen">
      <div className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          See All <span className="text-[#d8a84f]">Rooms</span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore quiet, comfortable, and well-equipped study rooms designed
          for focused learning and group collaboration.
        </p>
      </div>

      {/* Search Box */}
      <form
        action="/rooms"
        method="GET"
        className="max-w-3xl mx-auto px-4 mb-10 flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by room name..."
          className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#d8a84f] bg-white text-gray-800"
        />

        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-[#d8a84f] text-white font-semibold hover:bg-[#c7983f] transition"
        >
          Search
        </button>
      </form>

      <PopularRooms searchQuery={search} />
    </div>
  );
};

export default SeeAllRoom;