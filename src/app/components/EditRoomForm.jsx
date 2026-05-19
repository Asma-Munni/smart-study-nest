"use client";

import { updateRoom } from "@/lib/room/action";
import { Button, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const EditRoomForm = ({ room }) => {
  const {
    _id,
    roomName,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities,
  } = room;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = await updateRoom(_id, formData);

    console.log("Update result:", data);

    if (data.acknowledged && data.matchedCount > 0) {
      router.push("/rooms");
      router.refresh();
    }
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
        <div className="rounded-3xl border border-[#eadfca] bg-white p-6 md:p-10 shadow-xl">
          <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Room Name <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={roomName}
                required
                name="roomName"
                type="text"
                placeholder="Type Your Room Name"
                className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                defaultValue={description}
                required
                name="description"
                rows="4"
                placeholder="Type a short description."
                className="w-full resize-none rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#0f172a]">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={image}
                required
                name="image"
                type="url"
                placeholder="Type URL"
                className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Floor <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue={floor}
                  required
                  name="floor"
                  type="text"
                  placeholder="Type which floor is it?"
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue={capacity}
                  required
                  name="capacity"
                  type="number"
                  min="1"
                  placeholder="Type capacity"
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#0f172a]">
                  Hourly Rate <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue={hourlyRate}
                  required
                  name="hourlyRate"
                  type="number"
                  min="1"
                  placeholder="Type hourly rate"
                  className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-semibold text-[#0f172a]">
                Amenities <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenitiesOptions.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a]"
                  >
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      defaultChecked={amenities?.includes(amenity)}
                      className="h-4 w-4 accent-[#d8a84f]"
                    />
                    <span className="text-sm font-medium">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="w-full rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-[#f5ecd7]"
              >
                Update Room
              </Button>

              <Button
                type="reset"
                className="w-full rounded-xl border border-[#0f172a]/20 bg-transparent px-6 py-3 font-semibold text-[#0f172a]"
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

export default EditRoomForm;