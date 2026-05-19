import React from 'react';
import PopularRooms from '../components/PopularRooms';

const SeeAllRoom = () => {
    return (
        <div className='bg-[#f8f4ea]'>
            <div className="text-center my-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            See All <span className="text-[#d8a84f]">Rooms</span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#d8a84f]"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore quiet, comfortable, and well-equipped study rooms designed
            for focused learning and group collaboration.
          </p>
        </div>
          <PopularRooms></PopularRooms>  
        </div>
    );
};

export default SeeAllRoom;