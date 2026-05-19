"use client"

import { addRoom } from "@/lib/room/action";
import { Button, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddRoomForm = () => {
  const router = useRouter();
 const handleAddRoom = async (e) => {

  

   e.preventDefault();
    const formData = new FormData(e.currentTarget);
     await addRoom(formData)
    
   if(DataTransfer.insertedId){
    router.push("/rooms")
   };
};

  const amenitiesOptions = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <section className="min-h-screen bg-[#f8f4ea] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
       

        {/* Form Card */}
        <div className="rounded-3xl border border-[#eadfca] bg-white p-6 md:p-10 shadow-xl">
          <Form 
          onSubmit={handleAddRoom}
          className="flex flex-col gap-5">
            {/* Room Name */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Room Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="roomName"
                type="text"
                placeholder="Type Your Room Name"
                className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="description"
                rows="4"
                placeholder="Type a short description."
                className="w-full resize-none rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              ></textarea>
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="image"
                type="url"
                placeholder="Type URL"
                className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />
            </div>

            {/* Floor, Capacity, Hourly Rate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Floor <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="floor"
                  type="text"
                  placeholder="Type which floor is it? "
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="capacity"
                  type="number"
                  min="1"
                  placeholder="Type capacity"
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Hourly Rate <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="hourlyRate"
                  type="number"
                  min="1"
                  placeholder="Type hourly rate"
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
                />
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-[#0f172a]">
                Amenities <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenitiesOptions.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] transition hover:border-[#d8a84f] hover:bg-[#d8a84f]/10"
                  >
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      className="h-4 w-4 accent-[#d8a84f]"
                    />
                    <span className="text-sm font-medium">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="w-full rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-[#f5ecd7] transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a]"
              >
                Add Room
              </Button>

              <Button
                type="reset"
                className="w-full rounded-xl border border-[#0f172a]/20 bg-transparent px-6 py-3 font-semibold text-[#0f172a] transition duration-300 hover:border-[#d8a84f] hover:bg-[#d8a84f]/20"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AddRoomForm;