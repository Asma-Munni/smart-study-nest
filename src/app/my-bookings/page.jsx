"use client";

import { authClient } from "@/lib/auth-client";
import { cancelBooking, getMyBookings } from "@/lib/room/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyBookingsPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (isPending) return;

    if (!user) {
      router.push("/login?redirect=/my-bookings");
      return;
    }

    const loadMyBookings = async () => {
      try {
        setLoading(true);

        const data = await getMyBookings(user.id);

        setBookings(data);
      } catch (error) {
        toast.error(error.message || "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    loadMyBookings();
  }, [isPending, user, router]);

  const canCancelBooking = (booking) => {
    return booking.status === "confirmed" && booking.bookingDate >= today;
  };

  const handleCancelBooking = async () => {
    if (!selectedBooking || !user) return;

    try {
      setCancelLoading(true);

      const data = await cancelBooking(selectedBooking._id, user.id);

      if (data?.modifiedCount > 0) {
        toast.success("Booking cancelled");

        setBookings((previousBookings) =>
          previousBookings.map((booking) =>
            booking._id === selectedBooking._id
              ? { ...booking, status: "cancelled" }
              : booking
          )
        );

        setSelectedBooking(null);
      }
    } catch (error) {
      toast.error(error.message || "Failed to cancel booking");
    } finally {
      setCancelLoading(false);
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
            My <span className="text-[#d8a84f]">Bookings</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600">
            View and manage your study room reservations.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-[#eadfca] bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              You have no bookings yet.
            </h2>

            <p className="mt-3 text-gray-600">
              Browse available rooms and reserve your preferred study space.
            </p>

            <Link
              href="/rooms"
              className="mt-6 inline-block rounded-xl bg-[#0f172a] px-7 py-3 font-semibold text-[#f5ecd7] transition hover:bg-[#d8a84f] hover:text-[#0f172a]"
            >
              Explore Rooms
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="overflow-hidden rounded-3xl border border-[#eadfca] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                  <div className="h-56 sm:h-full">
                    <img
                      src={booking.roomImage}
                      alt={booking.roomName}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-bold text-[#0f172a]">
                          {booking.roomName}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                          Booking ID: {booking._id.slice(-6)}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-[#f8f4ea] p-3">
                        <p className="text-gray-500">Date</p>
                        <p className="font-semibold text-[#0f172a]">
                          {booking.bookingDate}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#f8f4ea] p-3">
                        <p className="text-gray-500">Time</p>
                        <p className="font-semibold text-[#0f172a]">
                          {booking.startTime} - {booking.endTime}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#f8f4ea] p-3">
                        <p className="text-gray-500">Total Cost</p>
                        <p className="font-semibold text-[#d8a84f]">
                          ${booking.totalCost}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#f8f4ea] p-3">
                        <p className="text-gray-500">Booked By</p>
                        <p className="truncate font-semibold text-[#0f172a]">
                          {booking.userName || "User"}
                        </p>
                      </div>
                    </div>

                    {booking.specialNote && (
                      <div className="mt-4 rounded-xl border border-[#eadfca] bg-[#f8f4ea] p-3">
                        <p className="text-xs text-gray-500">Special Note</p>
                        <p className="mt-1 text-sm text-[#0f172a]">
                          {booking.specialNote}
                        </p>
                      </div>
                    )}

                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      <Link
                        href={`/rooms/${booking.roomId}`}
                        className="rounded-lg border border-[#0f172a]/20 px-4 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-[#f8f4ea]"
                      >
                        View Room
                      </Link>

                      {canCancelBooking(booking) && (
                        <button
                          type="button"
                          onClick={() => setSelectedBooking(booking)}
                          className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              Cancel Booking?
            </h2>

            <p className="mt-3 text-gray-600">
              Are you sure you want to cancel your booking for{" "}
              <span className="font-semibold text-[#0f172a]">
                {selectedBooking.roomName}
              </span>
              ?
            </p>

            <div className="mt-5 rounded-2xl bg-[#f8f4ea] p-4 text-sm">
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {selectedBooking.bookingDate}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Time:</span>{" "}
                {selectedBooking.startTime} - {selectedBooking.endTime}
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedBooking(null)}
                className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700"
              >
                Keep Booking
              </button>

              <button
                type="button"
                onClick={handleCancelBooking}
                disabled={cancelLoading}
                className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {cancelLoading ? "Cancelling..." : "Confirm Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyBookingsPage;