import React from 'react';
import { RoomTable } from '../components/RoomTable';
import { getAllRooms } from '@/lib/room/data';

const AllRoomsPage = async() => {
    const roomData = await getAllRooms();
    return (
        <div>
           <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-10 text-center mb-5">
            All Rooms<span className="text-[#d8a84f]"> Informations</span>
          </h1>
            <RoomTable roomData={roomData}></RoomTable>
        </div>
    );
};

export default AllRoomsPage;


