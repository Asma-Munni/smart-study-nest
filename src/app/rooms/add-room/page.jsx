import AddRoomForm from '@/app/components/AddRoomForm';
import React from 'react';

const AddRoomPage = () => {
    return (
        <div>
            <div className="my-10 text-center">
                     <h1 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
                       Add <span className="text-[#d8a84f]">New Room</span>
                     </h1>
           
                     <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>
           
                     <p className="mt-4 text-gray-600">
                       Add your study room information and make it available for booking.
                     </p>
                   </div>
           <AddRoomForm></AddRoomForm>
        </div>
    );
};

export default AddRoomPage;