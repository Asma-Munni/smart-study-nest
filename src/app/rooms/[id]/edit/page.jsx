import EditRoomForm from '@/app/components/EditRoomForm';
import { getRoomDetails } from '@/lib/room/data';
import React from 'react';

const EditRoomPage = async({params}) => {
    const {id} =await params;
   // console.log(id);
   const room = await getRoomDetails(id);
   console.log(room);
    return (
        <div>
            <h1>Edit {room.roomName}</h1>
            <EditRoomForm room={room}></EditRoomForm>
        </div>
    );
};

export default EditRoomPage;