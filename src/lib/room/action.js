"use server"

import { revalidatePath } from "next/cache";



{/*Add room */}

export const addRoom = async (formData) => {
  const newRoom = Object.fromEntries(formData.entries());
  const amenities = formData.getAll("amenities");

  const modifiedData = {
    roomName: newRoom.roomName,
    description: newRoom.description,
    image: newRoom.image,
    floor: newRoom.floor,
    capacity: parseInt(newRoom.capacity),
    hourlyRate: parseFloat(newRoom.hourlyRate),
    amenities: amenities,

    // owner data
    ownerId: newRoom.ownerId,
    ownerName: newRoom.ownerName,
    ownerEmail: newRoom.ownerEmail,

    bookingCount: 0,
    createdAt: new Date().toISOString(),
  };

  const res = await fetch("http://localhost:5000/rooms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  if (!res.ok) {
    throw new Error("Failed to add room");
  }

  const data = await res.json();

  revalidatePath("/rooms");
  revalidatePath("/my-listings");

  return data;
};

  {/*delete function */}
 export const deleteRoom = async (id, userId) => {
  const res = await fetch(`http://localhost:5000/rooms/${id}?userId=${userId}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete room");
  }

  revalidatePath("/rooms");
  revalidatePath("/my-listings");

  return data;
};

{/*Update */}

export const updateRoom = async (id, formData) => {

    const updatedRoom = Object.fromEntries(formData.entries());
   // console.log(updatedRoom);
   const amenities = formData.getAll("amenities");
const modifiedData = {
      roomName: updatedRoom.roomName,
      description: updatedRoom.description,
      image: updatedRoom.image,
      floor: updatedRoom.floor,
      capacity: parseInt(updatedRoom.capacity),
      hourlyRate: parseFloat(updatedRoom.hourlyRate),
      amenities: amenities,
    };
    console.log(modifiedData);
   const res = await fetch(`http://localhost:5000/rooms/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifiedData),
        
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || 'Failed to update room');
    }   if (res.ok) {
        revalidatePath('/rooms');
        return data;
    }
    

}

{/*Room book */}

export const bookRoom = async (roomId, formData) => {
  const booking = Object.fromEntries(formData.entries());

  const bookingData = {
    roomId,
    roomName: booking.roomName,
    roomImage: booking.roomImage,
    userId: booking.userId,
    userName: booking.userName,
    userEmail: booking.userEmail,
    bookingDate: booking.bookingDate,
    startTime: booking.startTime,
    endTime: booking.endTime,
    totalCost: Number(booking.totalCost),
    specialNote: booking.specialNote || "",
  };

  const res = await fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to book room");
  }

  revalidatePath(`/rooms/${roomId}`);
  revalidatePath("/my-bookings");

  return data;
};

{/*My Listing */}
export const getMyListings = async (userId) => {
  const res = await fetch(`http://localhost:5000/my-listings/${userId}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load my listings");
  }

  return data;
};


{/*My Booking */}
export const getMyBookings = async (userId) => {
  const res = await fetch(`http://localhost:5000/my-bookings/${userId}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load my bookings");
  }

  return data;
};

export const cancelBooking = async (bookingId, userId) => {
  const res = await fetch(
    `http://localhost:5000/bookings/${bookingId}/cancel`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to cancel booking");
  }

  revalidatePath("/my-bookings");
  revalidatePath("/rooms");

  return data;
};