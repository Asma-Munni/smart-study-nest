"use client";

import { authClient } from "@/lib/auth-client";
import { deleteRoom, getMyListings } from "@/lib/room/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyListingsPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    if (isPending) return;

    if (!user) {
      router.push("/login?redirect=/my-listings");
      return;
    }

    const loadMyListings = async () => {
      try {
        setLoading(true);

        const data = await getMyListings(user.id);

        setRooms(data);
      } catch (error) {
        toast.error(error.message || "Failed to load my listings");
      } finally {
        setLoading(false);
      }
    };

    loadMyListings();
  }, [isPending, user, router]);

  const handleDelete = async () => {
    if (!selectedRoom || !user) return;

    try {
      setDeleteLoading(true);

      const data = await deleteRoom(selectedRoom._id, user.id);

      if (data?.deletedCount > 0) {
        toast.success("Room deleted successfully");

        setRooms((previousRooms) =>
          previousRooms.filter((room) => room._id !== selectedRoom._id)
        );

        setSelectedRoom(null);
      }
    } catch (error) {
      toast.error(error.message || "Failed to delete room");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (isPending || loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8f4ea]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#d8a84f] border-t-transparent"></div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f4ea] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#0f172a] md:text-5xl">
            My <span className="text-[#d8a84f]">Listings</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600">
            Manage all study rooms you have added.
          </p>
        </div>

        {rooms.length === 0 ? (
          <div className="rounded-3xl border border-[#eadfca] bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              No listings found
            </h2>

            <p className="mt-3 text-gray-600">
              You have not added any study room yet.
            </p>

            <Link
              href="/add-room"
              className="mt-6 inline-block rounded-xl bg-[#0f172a] px-7 py-3 font-semibold text-[#f5ecd7] transition hover:bg-[#d8a84f] hover:text-[#0f172a]"
            >
              Add Your First Room
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#eadfca] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.roomName}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-[#0f172a]">
                    {room.roomName}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {room.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-[#f8f4ea] p-3">
                      <p className="text-gray-500">Floor</p>
                      <p className="font-semibold text-[#0f172a]">
                        {room.floor}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f8f4ea] p-3">
                      <p className="text-gray-500">Capacity</p>
                      <p className="font-semibold text-[#0f172a]">
                        {room.capacity} People
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f8f4ea] p-3">
                      <p className="text-gray-500">Rate</p>
                      <p className="font-semibold text-[#d8a84f]">
                        ${room.hourlyRate}/hr
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f8f4ea] p-3">
                      <p className="text-gray-500">Bookings</p>
                      <p className="font-semibold text-[#0f172a]">
                        {room.bookingCount || 0}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities?.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full bg-[#d8a84f]/15 px-3 py-1 text-xs font-medium text-[#0f172a]"
                      >
                        {amenity}
                      </span>
                    ))}

                    {room.amenities?.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex gap-3 pt-6">
                    <Link
                      href={`/rooms/${room._id}`}
                      className="flex-1 rounded-lg border border-[#0f172a]/20 px-4 py-2.5 text-center text-sm font-semibold text-[#0f172a] transition hover:bg-[#f8f4ea]"
                    >
                      View
                    </Link>

                    <Link
                      href={`/rooms/${room._id}/edit`}
                      className="flex-1 rounded-lg bg-[#d8a84f] px-4 py-2.5 text-center text-sm font-semibold text-[#0f172a] transition hover:bg-[#c89632]"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              Delete Room?
            </h2>

            <p className="mt-3 text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-[#0f172a]">
                {selectedRoom.roomName}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={deleteLoading}
                className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyListingsPage;