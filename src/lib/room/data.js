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