export const getAllRooms = async (search = "") => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SERVER_URL is missing in .env.local");
  }

  const res = await fetch(
    `${baseUrl}/rooms?search=${encodeURIComponent(search)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch rooms");
  }

  const data = await res.json();
  return data;
};

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