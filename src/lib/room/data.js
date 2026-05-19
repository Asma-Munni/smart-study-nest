export const getAllRooms = async () =>{
const res = await fetch("http://localhost:5000/rooms");
const data = await res.json();
return data;
}

export const getRoomDetails = async (id) =>{
    const res = await fetch(`http://localhost:5000/rooms/${id}`);
   const data = await res.json();
  // console.log(data);
   return data;
}

{/*Six latest room sort */}
export const getLatestRooms = async () => {
  const res = await fetch("http://localhost:5000/latest-rooms", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest rooms");
  }

  const data = await res.json();

  return data;
};