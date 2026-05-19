"use server"

import { revalidatePath } from "next/cache";

export const addRoom =async (formData)=>{
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
    };
    console.log(modifiedData);

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
  console.log(data);

  revalidatePath("/rooms"); // revalidate after successful POST

  return data;
  };

  {/*delete function */}
  export const deleteRoom = async (id) => {

    const res = await fetch(`http://localhost:5000/rooms/${id}`, {
        method: 'DELETE',
    }); 

const data = await res.json();
if (!res.ok) return;
console.log(data);
if (res.ok){
    revalidatePath('/rooms');}
   

return data;

}

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