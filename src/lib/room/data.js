export const getAllRooms = async () =>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
const data = await res.json();
return data;
}

export const getRoomDetails = async (id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`);
   const data = await res.json();
  // console.log(data);
   return data;
}

{/*Six latest room sort */}
export const getLatestRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/latest-rooms`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest rooms");
  }

  const data = await res.json();

  return data;
};